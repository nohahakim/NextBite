import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Search from "@/components/meals/search"; // Add this import

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

async function Meals({ searchTerm }) {
  // Add searchTerm prop
  const meals = await getMeals(searchTerm);
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage({ searchParams }) {
  const { search } = await searchParams;

  const searchTerm = search ?? null;

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Search /> {/* Add SearchBar component */}
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
          key={searchTerm} // Important to re-render when search changes
        >
          <Meals searchTerm={searchTerm} /> {/* Pass searchTerm */}
        </Suspense>
      </main>
    </>
  );
}
