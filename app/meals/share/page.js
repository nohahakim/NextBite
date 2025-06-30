import { redirect } from "next/navigation";
import { verifyAuth } from "@/lib/auth"; // your auth helper
import ShareMealForm from "@/components/meals/share-form";

export default async function ShareMealPage() {
  const { user } = await verifyAuth();
  if (!user) {
    // either redirect to login...
    redirect("/auth?callback=/meals/share");
  }

  return <ShareMealForm user={user} />;
}
