// import MealItem from './meal-item';
import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  if (!meals || meals.length === 0) {
    return (
      <div className={classes.noMeals}>
        <p>No meals found. Try a different search term!</p>
      </div>
    );
  }

  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
