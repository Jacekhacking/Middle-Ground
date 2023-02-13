import styles from "../../styles/Header.module.css";
import HeaderTitle from "../../public/images/HeaderTitle.png";
import Image from "next/image";

const Hero = () => {
  return (
    <header className={`${styles.header} h-screen py-minusNav `}>
      <div className="flex items-center justify-center">
        <Image
          src={HeaderTitle}
          alt="Middle Ground Treatment & Training"
          height={550}
          width={550}
          priority
        />
      </div>
      <button className=" custom-box-shadow text-xl bg-white text-black absolute bottom-5 right-12 w-32 h-12 hover:bg-black hover:text-white">
        Book Now
      </button>
    </header>
  );
};

export default Hero;
