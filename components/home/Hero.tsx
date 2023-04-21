import HeaderTitle from '../../public/images/HeaderTitle.png';
import Header from '../../public/images/Header-bg.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <header
      className={`relative items-center justify-center h-screen py-minusNav `}
    >
      <div className="h-full w-full ">
        <Image
          src={Header}
          fill={true}
          className="object-cover"
          alt="Alora holding a workout band."
        />
      </div>

      <div className="flex absolute inset-x-0 top-0 right-25 items-center justify-center ">
        <Image
          src={HeaderTitle}
          alt="Middle Ground Treatment & Training"
          height={550}
          width={550}
          priority
        />
      </div>
      <a
        href={`https://www.vagaro.com/middleground/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className=" custom-box-shadow text-xl bg-white text-black absolute bottom-14 right-12 w-32 h-12 hover:bg-black hover:text-white">
          Book Now
        </button>
      </a>
    </header>
  );
};

export default Hero;
