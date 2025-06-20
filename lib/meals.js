import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";
const db = sql("meals.db");
import { utapi } from "@/server/uploadthing";

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const statement = db.prepare("SELECT * FROM meals");
  return statement.all();
}
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // const [{ url }] = await utapi.uploadFiles(meal.image);
  // meal.image = url;
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
