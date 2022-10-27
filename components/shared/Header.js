import styles from "../styles/Header.module.css";
import HeaderTitle from "../images/HeaderTitle.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src={HeaderTitle}
        alt="Middle Ground Treatment & Training"
        height={550}
        width={550}
      />
    </header>
  );
};

export default Header;
