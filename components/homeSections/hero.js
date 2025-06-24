import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slideshow";
import classes from "./hero.module.css";

export default function HeroSection() {
  return (
    <section className={classes.heroSection}>
      <div className={classes.heroOverlay}></div>
      <div className={classes.parallax}></div>
      <div className={classes.heroContent}>
        <div className={classes.heroText}>
          <h1>
            Discover NextBite <span>Culinary Delights</span>
          </h1>
          <p>
            Explore, create, and share exquisite recipes with our worldwide
            community of culinary aficionados. Join thousands who are elevating
            their dining experiences.
          </p>
          <div className={classes.heroButtons}>
            <Link href="/meals" className={classes.btnPrimary}>
              Explore Recipes
            </Link>
            <Link href="/community" className={classes.btnOutline}>
              Join Community
            </Link>
          </div>
        </div>

        <div className={classes.slideshowContainer}>
          <div className={classes.slideshow}>
            <ImageSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
}
