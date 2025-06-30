import sql from "better-sqlite3";

const db = sql("meals.db");

export function createUser(email, password, name) {
  const result = db
    .prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)")
    .run(email, password, name);
  return result.lastInsertRowid;
}

export function getUserByEmail(email) {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}
