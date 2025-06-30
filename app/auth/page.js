import AuthForm from "@/components/auth/auth-form";

export default async function Auth({ searchParams }) {
  const { mode } = (await searchParams) || {};
  const formMode = mode || "login";
  return <AuthForm mode={formMode} />;
}
