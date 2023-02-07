import Image from "next/image";
import AboutImage from "../images/welcome-page-tiny.JPG";

const about = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center font-serif">
      <h2 className="text-black text-5xl pb-20">Meet Alora</h2>
      <Image
        src={AboutImage}
        alt="Alora"
        height={700}
        width={700}
        className="shadow-2xl rounded-md "
      />

      <p className="mt-20 text-black text-center text-3xl max-w-4xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        provident libero, perferendis facilis, id laudantium, aspernatur dicta
        quaerat ratione quia voluptates recusandae. Sit molestias eius aut. Quis
        fuga commodi magni?
      </p>
    </div>
  );
};

export default about;
