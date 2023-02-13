import Link from "next/link";
import { NavData } from "./NavData";
import styles from "../../../styles/Navbar.module.css";

const MenuItems = () => {
  return (
    <>
      {NavData.map(({ subMenu, url, title }) =>
        subMenu ? (
          <div
            key={title}
            className="bg-inherit relative flex items-center justify-center h-20 min-w-20 px-10 my-2"
          >
            <div className="bg-inherit group border border-transparent text-black flex items-center justify-center min-h-10 min-w-20 transition-all ease-in-out hover:border-black custom-box-shadow-hover px-10 my-2">
              <Link href={url}>{title}</Link>

              <ul className="mt-10 left-50 top-2 absolute hidden group-hover:block border border-black bg-inherit custom-box-shadow-hover">
                {subMenu.map(({ url, title }) => (
                  <Link href={url} key={title}>
                    <div className={styles["nav-item"]}>{title} </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div key={title} className={styles["navbar-menu-container"]}>
            <Link href={url}>{title}</Link>
          </div>
        )
      )}

      <ul className="text-black flex justify-between items-center mr-3 p-2 border border-transparent hover:border-black hover:cursor-pointer custom-box-shadow-hover my-2">
        <li>fb</li>
        <li>inst</li>
        <li>fb</li>
      </ul>
    </>
  );
};

export default MenuItems;
