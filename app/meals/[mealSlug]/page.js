import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getMeal, getMeals } from "@/lib/meals";
import classes from "./page.module.css";

export async function generateMetadata({ params }) {
  const { mealSlug } = await params;
  const meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}
export async function generateStaticParams() {
  const { meals } = await getMeals({});

  return meals.map((meal) => ({
    mealSlug: meal.slug,
  }));
}

export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;

  const meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

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
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className={classes.details}>
          <h1 className={classes.title}>{meal.title}</h1>

          <div className={classes.creator}>
            <p className={classes.creatorName}>by {meal.creator_name}</p>
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
