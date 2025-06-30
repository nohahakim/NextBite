import Link from "next/link";
import NavLink from "./nav-link";
import { FaUtensils } from "react-icons/fa";
import { verifyAuth } from "@/lib/auth";
import HeaderShell from "./header-shell";
import classes from "./main-header.module.css";

export default async function MainHeader() {
  const { user } = await verifyAuth();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link className={classes.logo} href="/">
          <div className={classes.logoIcon}>
            <FaUtensils className={classes.logoIconImage} />
          </div>
          <span className={classes.logoText}>NextBite Food</span>
        </Link>

        <HeaderShell user={user} />
      </div>
    </header>
  );
}
