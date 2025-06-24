import { FaStar, FaGlobe, FaLeaf, FaHeart } from "react-icons/fa";
import classes from "./whyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={classes.chooseSection}>
      <div className={classes.sectionHeader}>
        <h2>Why Gourmet Lovers Choose Us</h2>
        <p>
          We're not just a recipe site - we're a movement dedicated to elevating
          culinary experiences.
        </p>
      </div>

      <div className={classes.chooseFeatures}>
        <div className={classes.chooseFeature}>
          <div className={classes.chooseIcon}>
            <FaStar />
          </div>
          <div>
            <h3>Curated Excellence</h3>
            <p>
              Every recipe is vetted by our culinary team to ensure exceptional
              quality and delicious results.
            </p>
          </div>
        </div>

        <div className={classes.chooseFeature}>
          <div className={classes.chooseIcon}>
            <FaGlobe />
          </div>
          <div>
            <h3>Global Flavors</h3>
            <p>
              Explore authentic recipes from every corner of the world, shared
              by our international community.
            </p>
          </div>
        </div>

        <div className={classes.chooseFeature}>
          <div className={classes.chooseIcon}>
            <FaLeaf />
          </div>
          <div>
            <h3>Dietary Inclusivity</h3>
            <p>
              Find recipes for every dietary need - vegan, gluten-free, keto,
              and more - all in one place.
            </p>
          </div>
        </div>

        <div className={classes.chooseFeature}>
          <div className={classes.chooseIcon}>
            <FaHeart />
          </div>
          <div>
            <h3>Passionate Community</h3>
            <p>
              Connect with fellow food enthusiasts who share your passion for
              exceptional cooking and flavors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
