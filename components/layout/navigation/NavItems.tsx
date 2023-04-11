import Link from "next/link";
import { NavData } from "./NavData";
import styles from "../../../styles/Navbar.module.css";

const socialMediaArray = [
  {
    name: "Insta",
    //link
    //img
  },
  {
    name: "Facebook",
    //link
    //img
  },
];

const NavItems = () => {
  return (
    <>
      {NavData.map(({ subMenu, url, title }) =>
        subMenu ? (
          <div
            key={title}
            className=" bg-inherit relative flex items-center justify-center h-20  px-10 my-2"
          >
            <div
              key={title}
              className="bg-inherit group border border-transparent text-black flex items-center justify-center min-h-10 hover:transition-all ease-in-out  hover:border-black custom-box-shadow-hover  px-6 my-2"
            >
              <div key={title} className="m-4">
                {title}
              </div>

              <ul
                key={title}
                className="mt-10 left-50 top-4 absolute hidden group-hover:block border border-black bg-inherit custom-box-shadow-hover transition-all ease-in-out"
              >
                {subMenu.map(({ url, title }) => (
                  <Link href={url} key={url}>
                    <div className={styles["nav-item"]} key={title}>
                      {title}
                    </div>
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

      <ul className="text-black flex justify-between items-center h-20  my-2">
        {socialMediaArray.map((link) => (
          <li className="border border-transparent hover:border-black hover:cursor-pointer custom-box-shadow-hover transition-all ease-in-out p-4">
            {link.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavItems;
