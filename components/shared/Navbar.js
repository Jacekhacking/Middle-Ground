import styles from "../styles/Navbar.module.css";
import logo from "../images/navbarLogo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Image src={logo} alt="logo" width="100" height="100" />
      <ul>
        <li>Home</li>
        <li>Treatment</li>
        <li>Training</li>
        <li>Blog</li>
        <li>About</li>
        <li>FAQ</li>
      </ul>
      <ul>
        <li>fb</li>
        <li>fb</li>
        <li>fb</li>
      </ul>
    </nav>
  );
};

export default Navbar;
