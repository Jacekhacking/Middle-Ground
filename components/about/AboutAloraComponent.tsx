import Image from "next/image";
import AboutImage from "/public/images/welcome-page-tiny 2.jpg";

const AboutAloraComponent = ({ bioParagraph }) => {
  return (
    <>
      <div className=" bg-zinc-200 md:bg-zinc-900 rounded-md gap-6 flex flex-col md:flex-row p-10 max-w-5xl items-center justify-start">
        <Image
          src={AboutImage}
          alt="Alora Bonner"
          className="shadow-2xl rounded-md w-4/5 md:w-1/2 "
        />
        <div className="flex flex-col items-center justify-evenly">
          <h2 className=" text-zinc-900 md:text-zinc-200  text-5xl md:pb-10">
            Meet Alora
          </h2>

          <p className=" text-zinc-900 md:text-zinc-200 text-center leading-7 text-md md:text-xl max-h-96 md:max-w-3xl  overflow-auto ">
            {bioParagraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutAloraComponent;
