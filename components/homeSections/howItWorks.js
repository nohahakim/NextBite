import { FaSearch, FaUtensils, FaUsers } from "react-icons/fa";
import classes from "./howItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={classes.section}>
      <div className={classes.sectionHeader}>
        <h2>How It Works</h2>
        <p>
          NextLevel Food simplifies discovering, creating, and sharing gourmet
          recipes with food enthusiasts globally.
        </p>
      </div>

      <div className={classes.features}>
        <div className={classes.featureCard}>
          <div className={classes.featureIcon}>
            <FaSearch />
          </div>
          <h3>Discover Recipes</h3>
          <p>
            Browse thousands of gourmet recipes shared by our community. Filter
            by cuisine, dietary needs, or cooking time.
          </p>
        </div>

        <div className={classes.featureCard}>
          <div className={classes.featureIcon}>
            <FaUtensils />
          </div>
          <h3>Create & Share</h3>
          <p>
            Share your culinary masterpieces with the world. Upload recipes,
            photos, and cooking tips to inspire others.
          </p>
        </div>

        <div className={classes.featureCard}>
          <div className={classes.featureIcon}>
            <FaUsers />
          </div>
          <h3>Join Community</h3>
          <p>
            Connect with fellow gourmet enthusiasts. Participate in challenges,
            events, and cooking discussions.
          </p>
        </div>
      </div>
    </section>
  );
}
