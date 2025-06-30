import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";
const db = sql("meals.db");
import { utapi } from "@/server/uploadthing";

export function getMeals({ searchTerm = null, page = 1, pageSize = 6 } = {}) {
  const offset = (page - 1) * pageSize;
  const like = searchTerm ? `%${searchTerm}%` : null;

  const base = `
    FROM   meals m
    JOIN   users u ON u.id = m.creator_id
  `;
  const where = searchTerm ? "WHERE m.title LIKE ?" : "";
  const params = searchTerm ? [like] : [];

  const meals = db
    .prepare(
      `
   SELECT m.*,
       u.name  AS creator_name  
    ${base}
    ${where}
    LIMIT ? OFFSET ?
  `
    )
    .all(...params, pageSize, offset);

  const { total } = db
    .prepare(
      `
    SELECT COUNT(*) AS total
    ${base}
    ${where}
  `
    )
    .get(...params);

  return { meals, totalMeals: total };
}
export function getMeal(slug) {
  return db
    .prepare(
      `
   SELECT m.*,
       u.name  AS creator_name  
    FROM    meals m
    JOIN    users u ON u.id = m.creator_id
    WHERE   m.slug = ?
  `
    )
    .get(slug);
}
export async function saveMeal(meal, session) {
  if (!session?.user) throw new Error("Not signed in");
  // 1️⃣ Who is logged in?
  const creatorId = session.user.id; //   ← your auth layer should expose this

  // 2️⃣ sanitise + upload
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const { data, error } = await utapi.uploadFiles(meal.image);
  if (error) throw new Error(error.message);
  meal.image = data.ufsUrl;

  // 3️⃣ write only the FK, let a DB trigger fill timestamps if you need them
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, image, slug, creator_id)
    VALUES
      (@title, @summary, @instructions, @image, @slug, @creator_id)
  `
  ).run({ ...meal, creator_id: creatorId });
}
