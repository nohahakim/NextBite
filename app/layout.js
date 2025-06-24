import MainHeader from "@/components/main-header/main-header";
import Footer from "@/components/shared/footer";
import "./globals.css";

export const metadata = {
  title: "NextBite",
  description: "A community for food lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />

        {children}
        <Footer />

        {/* Optional: Add a script tag for any client-side JavaScript */}
        {/* <script src="/path/to/your/script.js"></script> */}
      </body>
    </html>
  );
}
