import { useState, useEffect } from "react";
import MenuItems from "./NavItems";
import Link from "next/link";
import Image from "next/image";

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
      className={`hidden md:block top-0 w-full z-10 fixed transition-all ease-in-out text-black h-20 `}
    >
      <div
        className={`flex justify-between transition-all ease-in-out text-black px-5 ${
          navBackground ? "bg-gray-200" : "bg-gray-100"
        } `}
      >
        <Link href="/">
          <Image
            src={"/images/navbarLogo.png"}
            width={100}
            height={100}
            alt="logo"
            // className="h-20 w-20 bg-red-400"
          />

          <div className=" bg-contain bg-no-repeat hover:cursor-pointer my-2"></div>
        </Link>
        <MenuItems />
      </div>
    </nav>
  );
};

export default Navbar;
