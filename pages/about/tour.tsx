import Carousel from "../../components/UI/carousel/Carousel";

const Tour = () => {
  return (
    <div className="min-h-screen text-center bg-zinc-200 text-zinc-900 flex flex-col items-center justify-center">
      <h2>Tour our Office!</h2>
      <p>
        Middle Ground is proudly nestled in the Trolley Healing Hub. We are
        located at 515 S 700 E Suite 2D, right across the street from Whole
        Foods at Trolley Square, in the restored Trolley Corners building.
      </p>
      <Carousel />
      <h3>Listed below are the practitioners in the Trolley Healing Hub:</h3>
      <ul>
        <li>Pinyon Physical Therapy - Sarah McNurlin</li>
      </ul>
      <ul>
        <li>Engage Physical Therapy - (Natasha)</li>
      </ul>
      <ul>
        <li>Engage Personal Training - (Claire)</li>
      </ul>
      <ul>
        <li>LC BodyWork - Lisa Colling</li>
      </ul>
      <ul>
        <li>Topaz Healing - Caroline Pengram</li>
      </ul>
      <ul>
        <li>(Mental Health Therapy) - April Davis</li>
      </ul>
    </div>
  );
};

export default Tour;
