import styles from "../..//styles/Navbar.module.css";
import logo from "../../images/navbarLogo.png";
import Image from "next/image";
import Link from "next/link";
import { NavData } from "./NavData";
import MenuItems from "./MenuItems";
import { useState, useEffect } from "react";

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
    console.log(window.scrollY);
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, []);

  console.log(NavData[1].subMenu);
  return (
    <nav
      className={`${styles.nav} ${
        navBackground ? styles["nav-background-visible"] : ""
      }`}
    >
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width="100"
          height="100"
          className={styles.logo}
        />
      </Link>

      {/* HTML/CSS for the map function  */}

      <div className={styles.navbarMenuContainer}>
        <Link href={"/"}>
          <a> testing</a>
        </Link>
        <ul className={styles.navUl}>
          <Link href={"/"} className={styles["nav-item"]}>
            <div className={styles["nav-item"]}> testing</div>
          </Link>
        </ul>
      </div>

      <ul className={styles["nav-socials"]}>
        <li>fb</li>
        <li>inst</li>
        <li>fb</li>
      </ul>
    </nav>
  );
};

export default Navbar;
