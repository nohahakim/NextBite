"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import classes from "./search.module.css";

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search") || "";

  function handleSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchTerm = formData.get("search");

    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSearch} className={classes.form}>
      <input
        type="text"
        name="search"
        placeholder="Search meals..."
        defaultValue={currentSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
}
