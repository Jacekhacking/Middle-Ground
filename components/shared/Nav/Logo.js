import Link from "next/link";
import Image from "next/image";
import styles from "../..//styles/Navbar.module.css";

import logo from "../../images/navbarLogo.png";
import invertLogo from "../../images/invertedNavbarLogo.png";

import { useState } from "react";

const Logo = () => {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseExit = () => setIsHovering(false);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
      <Link href="/">
        {/* {isHovering ? (
          <Image
            src={invertLogo}
            alt="logo"
            width="100"
            height="100"
            className={styles.logo}
          />
        ) : (
          <Image
            src={logo}
            alt="logo"
            width="100"
            height="100"
            className={styles.logo}
          />
        )} */}

        <Image src={invertLogo} alt="logo" width="100" height="100" />
      </Link>
    </div>
  );
};

export default Logo;
