import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/meals/post-2">Post 2</Link>
      </p>
    </main>
  );
}
