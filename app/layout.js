import "./globals.css";
import Footer from "@/components/shared/footer";
import MainHeader from "@/components/main-header";

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
      </body>
    </html>
  );
}
