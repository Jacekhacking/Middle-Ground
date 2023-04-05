import Image from "next/image";
import AboutImage from "../../public/images/welcome-page-tiny 2.jpg";
import HeaderTitle from "../../public/images/HeaderTitle.png";

const AboutFounderComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start font-serif md:py-20">
      <div className="flex w-96 h-40  items-center justify-center overflow-hidden relative">
        <Image
          src={HeaderTitle}
          fill={true}
          alt="middle Ground"
          className="object-cover"
        />
      </div>

      <div className=" bg-gray-900 rounded-md flex flex-col md:flex-row p-10 max-w-5xl items-center justify-start">
        <Image
          src={AboutImage}
          alt="Alora Bonner"
          className="shadow-2xl rounded-md w-4/5 md:w-1/2 "
        />
        <div className="flex flex-col items-center">
          <h2 className="text-gray-200  text-5xl md:pb-20">Meet Alora</h2>

          <p className=" text-gray-200 text-center  md:text-3xl max-w-4xl ">
            Lorem ipsum d olor sit amet consectetur, adipisicing elit.
            Architecto provident libero, perferendis facilis, id laudantium,
            aspernatur dicta quaerat ratione quia voluptates recusandae. Sit
            molestias eius aut. Quis fuga commodi magni?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounderComponent;
