"use client";

import { useActionState } from "react";
import ImagePicker from "@/components/meals/image-picker";
import classes from "./share-form.module.css";
import { shareMeal } from "@/lib/actions/meal-actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, { message: null });

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>
          Inspire our community with your exquisite recipes and cooking
          expertise.
        </p>
      </header>

      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.formGroup}>
            <label htmlFor="title">Recipe Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className={classes.input}
              placeholder="Amazing Chocolate Cake"
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="summary">Short Summary</label>
            <textarea
              id="summary"
              name="summary"
              required
              className={classes.textarea}
              placeholder="Describe your recipe in a few sentences"
            ></textarea>
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className={classes.textarea}
              placeholder="Step-by-step instructions..."
            ></textarea>
          </div>

          <div className={classes.formGroup}>
            <label>Recipe Image</label>
            <ImagePicker label="Your image" name="image" />
          </div>

          {state.message && (
            <div className={classes.message}>
              <p>{state.message}</p>
            </div>
          )}

          <div className={classes.actions}>
            <MealsFormSubmit />
          </div>
        </form>
      </main>
    </div>
  );
}
