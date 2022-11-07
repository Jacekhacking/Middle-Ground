import Link from "next/link";
import { NavData } from "./NavData";
import styles from "../..//styles/Navbar.module.css";

const MenuItems = ({ items }) => {
  const NavItems = NavData;

  return (
    <>
      {NavItems.map((item) =>
        item.subMenu ? (
          <div key={item.title} className={styles["navbar-menu-container"]}>
            <Link href={item.url}>
              <a>{item.title}</a>
            </Link>
            <ul className={styles["nav-ul"]}>
              {item.subMenu.map((subUrl) => (
                <Link
                  href={subUrl.url}
                  key={subUrl.title}
                  className={styles["nav-item"]}
                >
                  <div className={styles["nav-item"]}>{subUrl.title} </div>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <div key={item.title} className={styles["navbar-menu-container"]}>
            <Link href={item.url}>
              <a>{item.title}</a>
            </Link>
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
