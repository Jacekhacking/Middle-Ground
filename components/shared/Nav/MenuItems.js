import Link from "next/link";
import { NavData } from "./NavData";
import styles from "../..//styles/Navbar.module.css";

const MenuItems = () => {
  const NavItems = NavData;

  return (
    <>
      {NavItems.map(({ subMenu, url, title }) =>
        subMenu ? (
          <div key={title} className={styles["navbar-menu-container"]}>
            <Link href={url}>{title}</Link>
            <ul className={styles["nav-ul"]}>
              {subMenu.map(({ url, title }) => (
                <Link href={url} key={title}>
                  <div className={styles["nav-item"]}>{title} </div>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <div key={title} className={styles["navbar-menu-container"]}>
            <Link href={url}>{title}</Link>
          </div>
        )
      )}

      <ul className={styles["nav-socials"]}>
        <li>fb</li>
        <li>inst</li>
        <li>fb</li>
      </ul>
    </>
  );
};

export default MenuItems;
