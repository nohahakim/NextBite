/**
 * initdb.js
 * ----------
 * Run once (e.g. `node initdb.js`) to bootstrap a fresh SQLite DB
 * with the full schema + realistic seed data.
 */

const path = require("path");
const sql = require("better-sqlite3");

// ------------------------------------------------------------
// 1. Open / create the DB
// ------------------------------------------------------------
const dbPath = path.join(__dirname, "meals.db");
const db = sql(dbPath);

// enforce foreign-keys (they’re OFF by default in SQLite)
db.exec("PRAGMA foreign_keys = ON;");

// ------------------------------------------------------------
// 2. Drop existing tables so the script is always idempotent
// ------------------------------------------------------------
db.exec(`
  DROP TABLE IF EXISTS meals;
  DROP TABLE IF EXISTS sessions;
  DROP TABLE IF EXISTS users;
`);

// ------------------------------------------------------------
// 3. Re-create the tables (matches the design you posted)
// ------------------------------------------------------------
db.exec(`
  /* --- users --- */
  CREATE TABLE users (
    id       INTEGER PRIMARY KEY,
    email    TEXT    UNIQUE NOT NULL,
    password TEXT    NOT NULL,
    name     TEXT    NOT NULL
  );

  /* --- sessions --- */
  CREATE TABLE sessions (
    id         TEXT    PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id    INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  /* --- meals --- */
  CREATE TABLE meals (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    slug        TEXT    UNIQUE NOT NULL,
    title       TEXT    NOT NULL,
    image       TEXT    NOT NULL,
    summary     TEXT    NOT NULL,
    instructions TEXT   NOT NULL,
    creator_id  INTEGER NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE
  );


`);

// ------------------------------------------------------------
// 4. Dummy data
// ------------------------------------------------------------

// 4-A  users
const dummyUsers = [
  { id: 1, name: "John Doe", email: "johndoe@example.com", password: "secret" },
  { id: 2, name: "Max Schwarz", email: "max@example.com", password: "secret" },
  {
    id: 3,
    name: "Emily Chen",
    email: "emilychen@example.com",
    password: "secret",
  },
  {
    id: 4,
    name: "Laura Smith",
    email: "laurasmith@example.com",
    password: "secret",
  },
  {
    id: 5,
    name: "Mario Rossi",
    email: "mariorossi@example.com",
    password: "secret",
  },
  {
    id: 6,
    name: "Franz Huber",
    email: "franzhuber@example.com",
    password: "secret",
  },
  {
    id: 7,
    name: "Sophia Green",
    email: "sophiagreen@example.com",
    password: "secret",
  },
];

// 4-B  meals (creator_id links back to the user above)
const dummyMeals = [
  {
    slug: "juicy-cheese-burger",
    title: "Juicy Cheese Burger",
    image: "burger.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    instructions: `
1. **Prepare the patty** – Mix 200 g ground beef with salt & pepper; form into a patty.
2. **Cook** – Sear 2-3 min per side.
3. **Assemble** – Toast bun, add lettuce & tomato, patty, slice of cheese.
4. **Serve** – Cap with the top bun and enjoy hot.
    `.trim(),
    creator_id: 1,
  },
  {
    slug: "spicy-curry",
    title: "Spicy Curry",
    image: "curry.jpg",
    summary:
      "A rich and spicy curry, infused with exotic spices and creamy coconut milk.",
    instructions: `
1. **Chop veg** – Bite-size pieces.
2. **Sauté** – Until softened.
3. **Curry paste** – Stir in 2 Tbsp paste, cook 1 min.
4. **Simmer** – 500 ml coconut milk, 15 min.
5. **Serve** – Ladle over rice or bread.
    `.trim(),
    creator_id: 2,
  },
  {
    slug: "homemade-dumplings",
    title: "Homemade Dumplings",
    image: "dumplings.jpg",
    summary:
      "Tender dumplings filled with savory meat and vegetables, steamed to perfection.",
    instructions: `
1. **Filling** – Minced meat, veg, spices.
2. **Fill wrappers** – Wet edges, seal.
3. **Steam** – 10 min.
4. **Serve** – Hot with dipping sauce.
    `.trim(),
    creator_id: 3,
  },
  {
    slug: "classic-mac-n-cheese",
    title: "Classic Mac n Cheese",
    image: "macncheese.jpg",
    summary:
      "Creamy and cheesy macaroni – a comforting classic that’s always a crowd-pleaser.",
    instructions: `
1. **Boil macaroni** – Until al dente.
2. **Cheese sauce** – Butter + flour roux, whisk in milk, melt cheese.
3. **Combine** – Stir sauce into pasta.
4. **Bake** – Breadcrumb topping, golden.
    `.trim(),
    creator_id: 4,
  },
  {
    slug: "authentic-pizza",
    title: "Authentic Pizza",
    image: "pizza.jpg",
    summary:
      "Hand-tossed pizza with tangy tomato sauce, fresh toppings, and melted cheese.",
    instructions: `
1. **Dough** – Knead & proof.
2. **Shape & top** – Sauce, toppings, cheese.
3. **Bake** – 220 °C, 15-20 min.
4. **Serve** – Slice hot, add basil.
    `.trim(),
    creator_id: 5,
  },
  {
    slug: "wiener-schnitzel",
    title: "Wiener Schnitzel",
    image: "schnitzel.jpg",
    summary:
      "Crispy, golden-brown breaded veal cutlet – a classic Austrian dish.",
    instructions: `
1. **Pound veal** – Even thickness.
2. **Breading** – Flour → egg → breadcrumbs.
3. **Fry** – Until golden both sides.
4. **Serve** – With lemon wedge.
    `.trim(),
    creator_id: 6,
  },
  {
    slug: "fresh-tomato-salad",
    title: "Fresh Tomato Salad",
    image: "tomato-salad.jpg",
    summary:
      "Light and refreshing salad with ripe tomatoes, fresh basil, and a tangy vinaigrette.",
    instructions: `
1. **Slice tomatoes** – Arrange on plate.
2. **Season** – Basil, salt, pepper.
3. **Dress** – Olive oil & balsamic.
    `.trim(),
    creator_id: 7,
  },
];

// ------------------------------------------------------------
// 5. Insert everything inside one transaction for speed / safety
// ------------------------------------------------------------
db.transaction(() => {
  // 5-A insert users
  const userStmt = db.prepare(
    `INSERT INTO users (id,email,password,name)
     VALUES (@id,@email,@password,@name)`
  );
  dummyUsers.forEach((u) => userStmt.run(u));

  // 5-B insert meals
  const mealStmt = db.prepare(
    `INSERT INTO meals
      (slug,title,image,summary,instructions,creator_id)
     VALUES
      (@slug,@title,@image,@summary,@instructions,@creator_id)`
  );
  dummyMeals.forEach((m) => mealStmt.run(m));
})();

console.log("✅ Database initialised with dummy data!");
