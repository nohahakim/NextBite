import MainHeader from "@/components/main-header";
import "./globals.css";

export const metadata = {
  title: "Next Level Food",
  description: "A community for food lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />

        <svg width="100%" height="200">
          <rect width="100%" height="200" fill="#d4a017" />
        </svg>
        {children}
      </body>
    </html>
  );
}
