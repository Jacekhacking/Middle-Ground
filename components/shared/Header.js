import styles from "../styles/Header.module.css";
import HeaderTitle from "../images/HeaderTitle.png";
import Image from "next/image";

const HeaderClass = {
  // objectFit: "cover",
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        styles={HeaderClass}
        src={HeaderTitle}
        alt="Middle Ground Treatment & Training"
        height={500}
        width={500}
      />
    </header>
  );
};

export default Header;
