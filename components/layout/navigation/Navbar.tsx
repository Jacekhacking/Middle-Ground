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
        className={`flex items-center justify-between transition-all ease-in-out text-black px-5 ${
          navBackground ? "bg-gray-200" : "bg-gray-100"
        } `}
      >
        <div className="w-14 h-14 relative">
          <Link href="/">
            <Image
              src={"/images/navbarLogo.png"}
              fill={true}
              alt="logo"
              className="absolute"
            />
          </Link>
        </div>

        <MenuItems />
      </div>
    </nav>
  );
};

export default Navbar;
