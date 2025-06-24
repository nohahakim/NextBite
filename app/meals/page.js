import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Search from "@/components/meals/search";
import Pagination from "@/components/meals/pagination";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

async function Meals({ searchTerm, page, pageSize }) {
  const { meals, totalMeals } = await getMeals({ searchTerm, page, pageSize });
  const totalPages = Math.ceil(totalMeals / pageSize);

  return (
    <>
      <MealsGrid meals={meals} />
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalItems={totalMeals}
          pageSize={pageSize}
        />
      )}
    </>
  );
}

// ---------  FIXED HERE ------------
export default async function MealsPage({ searchParams }) {
  const params = (await searchParams) ?? {}; // <-- await first
  const searchTerm = params.search ?? null;
  const page = Number(params.page) || 1;
  const pageSize = 6;

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
        <Search />
        <Suspense
          key={`${searchTerm}-${page}`}
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals searchTerm={searchTerm} page={page} pageSize={pageSize} />
        </Suspense>
      </main>
    </>
  );
}
