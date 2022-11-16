import { useState, useEffect } from "react";
import MenuItems from "./MenuItems";

import Link from "next/link";

import styles from "../..//styles/Navbar.module.css";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const changeNavBackground = () => {
      if (window.scrollY > 10) {
        setNavBackground(true);
      } else if (window.scrollY < 10) {
        setNavBackground(false);
      }
    };

    window.addEventListener("scroll", changeNavBackground);
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, []);

  return (
    <nav
      className={`${styles["nav"]} ${
        navBackground ? styles["nav-background-visible"] : ""
      }`}
    >
      <Link href="/" legacyBehavior>
        <div className={`${styles["logo"]}`}></div>
      </Link>

      <MenuItems />
    </nav>
  );
};

export default Navbar;
