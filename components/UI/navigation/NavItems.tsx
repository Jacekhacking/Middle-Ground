import Link from 'next/link';
import { NavData } from './NavData';
import styles from '../../../styles/Navbar.module.css';

// const socialMediaArray = [
//   {
//     name: 'Insta',
//     //link
//     //img
//   },
//   {
//     name: 'Facebook',
//     //link
//     //img
//   },
// ];

type NavProps = {
  navBackground: boolean;
};

const NavItems = ({ navBackground }: NavProps) => {
  return (
    <>
      {NavData.map(({ subMenu, url, title }) =>
        subMenu ? (
          <div
            key={title}
            className={`  bg-transparent relative flex items-center justify-center h-20  px-10 my-2`}
          >
            <div
              className={`group  text-black flex items-center justify-center min-h-10 hover:transition-all ease-in-out hover:${
                navBackground ? 'bg-zinc-300' : 'bg-zinc-200'
              } custom-box-shadow-hover hover:border hover:border-black px-6 my-2`}
            >
              <div className="m-4">{title}</div>

              <ul
                className={`mt-10 left-50 top-4 absolute hidden group-hover:block border border-black ${
                  navBackground ? 'bg-zinc-300' : 'bg-zinc-200'
                } custom-box-shadow-hover transition-all ease-in-out`}
              >
                {subMenu.map(({ url, title }) => (
                  <Link href={url} key={title}>
                    <div className={styles['nav-item']}>{title}</div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div key={title} className={styles['navbar-menu-container']}>
            <Link href={url} key={title}>
              {title}
            </Link>
          </div>
        )
      )}

      <ul className="text-black flex justify-between items-center h-20  my-2">
        {/* {socialMediaArray.map((link) => (
          <li
            key={link.name}
            className="border border-transparent hover:border-black hover:cursor-pointer custom-box-shadow-hover transition-all ease-in-out p-4"
          >
            {link.name}
          </li>
        ))} */}
      </ul>
    </>
  );
};

export default NavItems;
