import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";
const db = sql("meals.db");
import { utapi } from "@/server/uploadthing";

export async function getMeals(options = {}) {
  const { searchTerm = null, page = 1, pageSize = 6 } = options;
  const offset = (page - 1) * pageSize;
  let query = "SELECT * FROM meals";
  let countQuery = "SELECT COUNT(*) as total FROM meals";
  let params = [];
  let countParams = [];

  if (searchTerm) {
    query += " WHERE title LIKE ?";
    countQuery += " WHERE title LIKE ?";
    params.push(`%${searchTerm}%`);
    countParams.push(`%${searchTerm}%`);
  }

  query += " LIMIT ? OFFSET ?";
  params.push(pageSize, offset);

  const meals = db.prepare(query).all(...params);
  const totalResult = db.prepare(countQuery).get(...countParams);
  const totalMeals = totalResult.total;

  return {
    meals,
    totalMeals,
  };
}
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const { data, error } = await utapi.uploadFiles(meal.image);
  if (error) throw new Error(error.message); // optional

  meal.image = data.ufsUrl; // CDN URL from UploadThing

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
