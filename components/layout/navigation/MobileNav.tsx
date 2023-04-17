import { useState } from "react";
import { NavData } from "./NavData";
import Link from "next/link";
import styles from "../../../styles/Navbar.module.css";

const MobileNav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      {!mobileNav && (
        <div
          onClick={() => setMobileNav(!mobileNav)}
          className="md:block lg:hidden  z-20 bg-zinc-200/70 fixed rounded-br-md p-4 space-y-2 cursor-pointer"
        >
          <div className=" h-0.5 w-6 bg-black"></div>
          <div className=" h-0.5 w-6 bg-black"></div>
          <div className=" h-0.5 w-4 bg-black"></div>
        </div>
      )}

      {mobileNav && (
        <>
          <div className="md:block lg:hidden fixed z-20 w-96 h-screen only: p-4  bg-zinc-600 text-zinc-200 ">
            <div
              className="text-3xl font-thin cursor-pointer w-10 hover:text-zinc-100"
              onClick={() => setMobileNav(false)}
            >
              X
            </div>

            <div className="flex flex-col items-center h-screen justify-start">
              <Link href={"/"} onClick={() => setMobileNav(false)}>
                <div className={`${styles["nav-item"]} text-center`}>Home</div>
              </Link>
              {NavData.map(
                ({ subMenu }) =>
                  subMenu && (
                    <>
                      {subMenu.map(({ url, title }) => (
                        <Link
                          href={url}
                          key={title}
                          onClick={() => setMobileNav(false)}
                        >
                          <div className={`${styles["nav-item"]} text-center`}>
                            {title}
                          </div>
                        </Link>
                      ))}
                    </>
                  )
              )}
            </div>
          </div>
          <div
            onClick={() => setMobileNav(false)}
            className="h-screen w-screen fixed bg-white/20 z-10"
          ></div>
        </>
      )}
    </>
  );
};

export default MobileNav;
