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
        className={`flex items-center justify-between transition-all ease-in-out text-black px-5 backdrop-blur-sm  ${
          navBackground ? "bg-zinc-300/90" : "bg-zinc-200/90"
        } `}
      >
        <div className={`w-14 h-14 relative `}>
          <Link href="/">
            <Image
              src={"/images/navbarLogo.png"}
              fill={true}
              alt="logo"
              className="absolute bg-transparent"
            />
          </Link>
        </div>

        <MenuItems navBackground={navBackground} />
      </div>
    </nav>
  );
};

export default Navbar;
