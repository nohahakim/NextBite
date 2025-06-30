"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import NavLink from "./nav-link";
import { logout } from "@/lib/actions/auth-actions";
import classes from "./main-header.module.css";

export default function HeaderShell({ user }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <>
      <nav className={`${classes.nav} ${open ? classes.open : ""}`}>
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

          <li className={classes.loginItem}>
            {user ? (
              <form action={logout} onSubmit={() => setOpen(false)}>
                <button className={classes.loginButton} type="submit">
                  <FaSignOutAlt className={classes.loginIcon} />
                  <span>Logout</span>
                </button>
              </form>
            ) : (
              <Link
                href="/auth"
                className={classes.loginButton}
                onClick={() => open && toggle()}
              >
                <FaUser className={classes.loginIcon} />
                <span>Login</span>
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <button
        className={classes.menuButton}
        onClick={toggle}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </>
  );
}
