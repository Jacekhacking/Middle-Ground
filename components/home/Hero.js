import styles from "../styles/Header.module.css";
import HeaderTitle from "../images/HeaderTitle.png";
import Image from "next/image";

const Hero = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles["header-transparent-bg"]}`}>
        <Image
          src={HeaderTitle}
          alt="Middle Ground Treatment & Training"
          height={550}
          width={550}
        />
      </div>
      <button className={`${styles["booking-button"]}`}>BOOK NOW</button>
    </header>
  );
};

export default Hero;
