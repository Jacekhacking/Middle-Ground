import { useState, useEffect } from "react";
import MenuItems from "./MenuItems";
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
      className={`sticky top-0 w-full z-10 block transition-all text-black h-20 `}
    >
      <div
        className={`flex justify-between transition-all text-black px-5 ${
          navBackground ? "bg-gray-200" : "bg-gray-100"
        } `}
      >
        <Link href="/">
          <Image
            source={"images/navbarLogo.png"}
            alt="logo"
            className="h-20 w-20 bg-red-400"
          />

          <div className=" bg-contain bg-no-repeat hover:cursor-pointer my-2"></div>
        </Link>
        <MenuItems />
      </div>
    </nav>
  );
};

export default Navbar;
