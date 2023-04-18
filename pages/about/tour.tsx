import Carousel from "../../components/UI/carousel/Carousel";

const Tour = () => {
  return (
    <div className="min-h-screen text-center bg-zinc-200 text-zinc-900 flex flex-col items-center justify-center lg:justify-center lg:pt-32 pb-10">
      <p className="px-4 pt-20 lg:pt-10 max-w-3xl text-xl md:text-2xl">
        Middle Ground is proudly nestled in the Trolley Healing Hub. We are
        located at 515 S 700 E Suite 2D, right across the street from Whole
        Foods at Trolley Square, in the restored Trolley Corners building.
      </p>

      <Carousel />

      <h3 className=" text-xl md:text-2xl">
        Other practitioners in the Trolley Healing Hub:
      </h3>
      <ul className="">
        <li>Pinyon Physical Therapy - Sarah McNurlin</li>
        <li>Engage Physical Therapy - (Natasha)</li>
        <li>Engage Personal Training - (Claire)</li>
        <li>LC BodyWork - Lisa Colling</li>
        <li>Topaz Healing - Caroline Pengram</li>
        <li>(Mental Health Therapy) - April Davis</li>
      </ul>
    </div>
  );
};

export default Tour;
