export default function MealDetailsPage({ params }) {
  const slug = params.slug;
  return (
    <main>
      <h1>Meal Details: {slug}</h1>
    </main>
  );
}
