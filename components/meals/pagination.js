"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import classes from "./pagination.module.css";

export default function Pagination({ currentPage, totalItems, pageSize }) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function generatePageLink(page) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className={classes.pagination}>
      {currentPage > 1 && (
        <Link href={generatePageLink(currentPage - 1)} className={classes.link}>
          Previous
        </Link>
      )}

      <div className={classes.pageInfoContainer}>
        <span className={classes.pageInfo}>
          Page <span className={classes.currentPage}>{currentPage}</span> of{" "}
          <span className={classes.totalPages}>{totalPages}</span>
        </span>
      </div>
      {currentPage < totalPages && (
        <Link href={generatePageLink(currentPage + 1)} className={classes.link}>
          Next
        </Link>
      )}
    </div>
  );
}
