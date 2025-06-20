#!/usr/bin/env node
/**
 * Move legacy /public/images/* files into UploadThing
 * and patch the `image` column to the new CDN URLs.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sql from "better-sqlite3";
import { UTApi } from "uploadthing/server";
// import { Blob } from "buffer"; // Node <20 needs this import
// import { File } from "fetch-blob/file.js";

// ① make sure the token is present
const utapi = new UTApi({
  token: process.env.UPLOADTHING_TOKEN, // falls back to env var if omitted :contentReference[oaicite:1]{index=1}
});

if (!process.env.UPLOADTHING_TOKEN) {
  console.error("❌  UPLOADTHING_TOKEN is missing in .env.local");
  process.exit(1);
}

const db = sql("meals.db");

// ② fetch rows that still hold plain file names
const rows = db
  .prepare(`SELECT id, image FROM meals WHERE image NOT LIKE 'http%'`)
  .all();

if (rows.length === 0) {
  console.log("🎉 No legacy images left to migrate.");
  process.exit(0);
}

const rootDir = path.dirname(fileURLToPath(import.meta.url));

for (const { id, image } of rows) {
  const localPath = path.join(rootDir, "public", "images", image);

  if (!fs.existsSync(localPath)) {
    console.warn(`⚠️  Skipping ${image} – file not found`);
    continue;
  }

  const buffer = fs.readFileSync(localPath);
  const mimeType = image.endsWith(".png") ? "image/png" : "image/jpeg";
  // const blob = new File([buffer], { type: mimeType });

  // const { data, error } = await utapi.uploadFiles(blob);

  const file = new File([buffer], image, { type: mimeType });
  const { data, error } = await utapi.uploadFiles(file, {
    // second argument = options
    route: "imageUploader", // ⬅️  the same slug
    fileName: image, // keeps the nice name
  });

  if (error) {
    console.error(`❌  Failed to upload ${image}:`, error);
    continue;
  }

  db.prepare(`UPDATE meals SET image = ? WHERE id = ?`).run(data.url, id);
  console.log(`✓ ${image} → ${data.url}`);
}

console.log("✅  Migration complete – all rows now point to UploadThing URLs.");
process.exit(0);
