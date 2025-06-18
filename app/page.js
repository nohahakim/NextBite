import Link from "next/link";

export default function Page() {
  console.log("Executing on the server");
  return (
    <div>
      <h1>Welcome to the Next.js App!</h1>
      <p>This is a simple page demonstrating the use of Next.js.</p>
      <Link href="/about">About Us</Link>
    </div>
  );
}
