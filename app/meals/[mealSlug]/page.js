// import Image from "next/image";
// import { notFound } from "next/navigation";

// import { getMeal } from "@/lib/meals";
// import classes from "./page.module.css";

// export async function generateMetadata({ params }) {
//   const { mealSlug } = await params; // Await params to get mealSlug
//   const meal = await getMeal(mealSlug);

//   if (!meal) {
//     notFound();
//   }

//   return {
//     title: meal.title,
//     description: meal.summary,
//   };
// }

// export default async function MealDetailsPage({ params }) {
//   const { mealSlug } = await params; // Await params to get mealSlug
//   const meal = await getMeal(mealSlug);

//   if (!meal) {
//     notFound();
//   }

//   meal.instructions = meal.instructions.replace(/\n/g, "<br />");

//   return (
//     <>
//       <header className={classes.header}>
//         <div className={classes.image}>
//           <Image
//             src={meal.image}
//             alt={meal.title}
//             fill
//             sizes="(max-width: 640px) 100vw, 400px"
//           />
//         </div>
//         <div className={classes.headerText}>
//           <h1>{meal.title}</h1>
//           <p className={classes.creator}>
//             by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
//           </p>
//           <p className={classes.summary}>{meal.summary}</p>
//         </div>
//       </header>
//       <main>
//         <p
//           className={classes.instructions}
//           dangerouslySetInnerHTML={{
//             __html: meal.instructions,
//           }}
//         ></p>
//       </main>
//     </>
//   );
// }
// app/community/page.js
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";

export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  // Format instructions to preserve line breaks
  const formattedInstructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <div className={classes.container}>
      <div className={classes.backButton}>
        <Link href="/meals">
          <i className="fas fa-arrow-left"></i> Back to all recipes
        </Link>
      </div>

      <div className={classes.grid}>
        <div className={classes.imageContainer}>
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className={classes.image}
          />
        </div>

        <div className={classes.details}>
          <h1 className={classes.title}>{meal.title}</h1>

          <div className={classes.creator}>
            <p className={classes.creatorName}>by {meal.creator}</p>
            <a
              href={`mailto:${meal.creator_email}`}
              className={classes.creatorEmail}
            >
              {meal.creator_email}
            </a>
          </div>

          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </div>

      <div className={classes.instructionsContainer}>
        <h2 className={classes.sectionTitle}>Preparation Instructions</h2>
        <div
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: formattedInstructions }}
        />
      </div>

      <div className={classes.shareRecipe}>
        <Link href="/meals/share" className={classes.shareButtonLarge}>
          <i className="fas fa-plus"></i> Share Your Own Recipe
        </Link>
      </div>
    </div>
  );
}
