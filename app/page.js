import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
import Hero from "@/components/homeSections/hero";
import WhyChooseUs from "@/components/homeSections/whyChooseUs";
import HowItWorks from "@/components/homeSections/howItWorks";

// Step 2: Define the HomePage component
export default function HomePage() {
  return (
    <>
      {/* <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <p>Dummy content goes here...</p>
      </main> */}
      <Hero />

      <HowItWorks />
      <WhyChooseUs />
    </>
  );
}
