import MainHeader from "@/components/main-header/main-header";
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

        {children}
      </body>
    </html>
  );
}
