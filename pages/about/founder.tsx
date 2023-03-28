import Image from "next/image";
import AboutImage from "../../public/images/welcome-page-tiny 2.jpg";

const AboutFounderComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start font-serif md:py-20">
      <h2 className="text-black text-5xl md:pb-20">Meet Alora</h2>
      <div className=" flex flex-col md:flex-row p-10 max-w-5xl items-center justify-start">
        <Image
          src={AboutImage}
          alt="Alora Bonner"
          className="shadow-2xl rounded-md w-4/5 md:w-1/2 "
        />

        <p className="mt-20 text-black text-center  md:text-3xl max-w-4xl ">
          Lorem ipsum d olor sit amet consectetur, adipisicing elit. Architecto
          provident libero, perferendis facilis, id laudantium, aspernatur dicta
          quaerat ratione quia voluptates recusandae. Sit molestias eius aut.
          Quis fuga commodi magni?
        </p>
      </div>
    </div>
  );
};

export default AboutFounderComponent;
