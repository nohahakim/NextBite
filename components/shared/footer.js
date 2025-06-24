import Link from "next/link";
import { useMemo } from "react";
import classes from "./footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUtensils,
} from "react-icons/fa";

export default function Footer() {
  // Get current year dynamically
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.brandColumn}>
            <div className={classes.logo}>
              <div className={classes.logoIcon}>
                <div className={classes.logoInner}>
                  <FaUtensils className={classes.utensilIcon} />
                </div>
              </div>
              <span className={classes.logoText}>NextBite Food</span>
            </div>
            <p className={classes.description}>
              Discover, share, and celebrate gourmet recipes with our global
              community of food lovers.
            </p>
            <div className={classes.socialLinks}>
              <a href="#" className={classes.socialLink} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className={classes.socialLink} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className={classes.socialLink} aria-label="Pinterest">
                <FaPinterest />
              </a>
              <a href="#" className={classes.socialLink} aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className={classes.navColumn}>
            <h3 className={classes.heading}>Navigation</h3>
            <ul className={classes.linksList}>
              <li>
                <Link href="/" className={classes.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/meals" className={classes.link}>
                  Browse Recipes
                </Link>
              </li>
              <li>
                <Link href="/community" className={classes.link}>
                  Community
                </Link>
              </li>
              <li>
                <Link href="/share-recipe" className={classes.link}>
                  Share Recipe
                </Link>
              </li>
            </ul>
          </div>

          <div className={classes.contactColumn}>
            <h3 className={classes.heading}>Contact</h3>
            <ul className={classes.contactList}>
              <li className={classes.contactItem}>
                <FaEnvelope className={classes.contactIcon} />
                <span>contact@nextbitefood.com</span>
              </li>
              <li className={classes.contactItem}>
                <FaPhone className={classes.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className={classes.contactItem}>
                <FaMapMarkerAlt className={classes.contactIcon} />
                <span>123 Culinary Street, Foodville</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.copyright}>
          <p>© {currentYear} NextBite Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
