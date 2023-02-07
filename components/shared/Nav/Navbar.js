import { useState, useEffect } from "react";
import MenuItems from "./MenuItems";
import Link from "next/link";

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
      className={`sticky top-0 w-screen z-10 flex justify-between transition-all text-black px-5 ${
        navBackground ? "bg-gray-200" : "bg-gray-100"
      }`}
    >
      <Link href="/" legacyBehavior>
        <div className="nav-logo bg-contain bg-no-repeat hover:cursor-pointer"></div>
      </Link>

      <MenuItems />
    </nav>
  );
};

export default Navbar;
