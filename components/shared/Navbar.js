import styles from "../styles/Navbar.module.css";
import logo from "../images/navbarLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`${styles.nav} ${
        scrollPosition > 10 ? styles["nav-background-visible"] : ""
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

      <Link href="/">Home</Link>

      <container className={styles.navbarMenuItem}>
        <Link href="/treatment">Treatment & Training</Link>
        <ul className={styles.navUl}>
          <li>Book Now</li>
          <li>Service Menu</li>
          <li>Daily Exercise</li>
        </ul>
      </container>
      <div className={styles.navbarMenuItem}>
        <Link href="/about">About</Link>
        <ul className={styles.navUl}>
          <li className={styles["nav-item"]}>Blog</li>
          <li>FAQ</li>
          <li>Reviews</li>
          <li>Tour</li>
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
