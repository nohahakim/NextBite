"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./nav-link";
import classes from "./main-header.module.css";
import { FaBars, FaTimes, FaUtensils } from "react-icons/fa";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link className={classes.logo} href="/">
          <div className={classes.logoIcon}>
            <FaUtensils className={classes.logoIconImage} />
          </div>
          <span className={classes.logoText}>NextBite Food</span>
        </Link>

        <nav className={`${classes.nav} ${isMenuOpen ? classes.open : ""}`}>
          <ul className={classes.navList}>
            <li>
              <NavLink href="/meals">Browse Recipes</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
            <li>
              <NavLink href="/meals/share">Share Recipe</NavLink>
            </li>
          </ul>
        </nav>

        <button
          className={classes.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="fas fa-times" />
          ) : (
            <FaBars className="fas fa-bars" />
          )}
        </button>
      </div>
    </header>
  );
}
