"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "../meals";
import { revalidatePath } from "next/cache";
import { verifyAuth } from "../auth";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const { user } = await verifyAuth();

  if (!user) {
    return { message: "You must be signed in to share a meal." };
  }
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    // creator: formData.get("name"),
    // creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal, { user });
  revalidatePath("/meals");
  redirect("/meals");
}
