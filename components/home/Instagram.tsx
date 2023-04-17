import Image from "next/image";
import Link from "next/link";

const instagramArray = [{}, {}, {}, {}];

const Instagram = () => {
  return (
    <div className="flex items-center flex-wrap justify-evenly gap-4 w-screen bg-zinc-200 pb-10 p-10">
      {instagramArray.map((post) => (
        <div className=" relative bg-blue-800 basis-1/3 lg:basis-1/5 flex-grow flex gap-4 justify-center h-auto">
          <div className="h-80 w-full text-center">test</div>
        </div>
      ))}
    </div>
  );
};

export default Instagram;
