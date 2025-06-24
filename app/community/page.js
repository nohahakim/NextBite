// app/community/page.js
import Image from "next/image";
import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import showcaseImg from "@/assets/pizza.jpg"; // any local hero-style image
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <section className={classes.communitySection}>
      {/* headline */}
      <header className={classes.header}>
        <h1>
          One Shared Passion: <span className={classes.gradientText}>Food</span>
        </h1>
        <p>
          Join our vibrant community of culinary enthusiasts and elevate your
          cooking journey.
        </p>
      </header>

      {/* feature grid */}
      <ul className={classes.features}>
        <li className={classes.featureCard} style={{ animationDelay: ".1s" }}>
          <div className={classes.iconWrapper}>
            <Image src={mealIcon} alt="Share & discover recipes" fill />
          </div>
          <h3>Share &amp; Discover</h3>
          <p>
            Exchange gourmet recipes, cooking tips and culinary secrets with
            thousands of food lovers.
          </p>
        </li>

        <li className={classes.featureCard} style={{ animationDelay: ".3s" }}>
          <div
            className={`${classes.iconWrapper} ${classes.secondaryIconCircle}`}
          >
            <Image src={communityIcon} alt="Connect globally" fill />
          </div>
          <h3>Connect Globally</h3>
          <p>
            Make friends with like-minded gourmet enthusiasts from around the
            world.
          </p>
        </li>

        <li className={classes.featureCard} style={{ animationDelay: ".5s" }}>
          <div className={`${classes.iconWrapper} ${classes.accentIconCircle}`}>
            <Image src={eventsIcon} alt="Exclusive events" fill />
          </div>
          <h3>Exclusive Events</h3>
          <p>
            Join cooking challenges, virtual classes and meet-ups with top
            chefs.
          </p>
        </li>
      </ul>

      {/* call-to-action box */}
      <div className={classes.ctaOuter}>
        <div className={classes.ctaInner}>
          <div className={classes.ctaContent}>
            <h3>Ready to Join Our Community?</h3>
            <p>
              Sign up today and start your culinary journey with thousands of
              food enthusiasts worldwide.
            </p>
            <button className={classes.btnPrimary}>Create Free Account</button>
          </div>

          <div className={classes.ctaImageBox}>
            <Image
              src={showcaseImg}
              alt="Happy community members"
              className={classes.ctaImage}
              fill
              sizes="(max-width:768px) 60vw, 300px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
