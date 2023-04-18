const philosophyArray = [
  {
    title: ' 1. Exploration & gaining awareness of your body',
    description:
      "Bodywork can bring awareness to areas of tension that you didn't even know existed. Areas of muscle tissue that have been neglected need to be addressed to improve circulation. Applying force to tissue will encourage the connection between mind & body. Exploration for treatment can be both relaxing & productive in a non-judgmental way. ",
  },
  {
    title: '2. Assessment & tracking your progress',
    description:
      "“If you're not assessing, then you're just guessing.” It's important to know your starting point with a basic assessment of joints, tissue quality, and movement. It is so fulfilling to see progress overtime with where your body is today & how it’s been doing over the past week, month, or year. Progress is a mindset that needs nourished. Your individual progress will be tracked thru detailed notes, video analysis, and Your Middle Ground Tracker.",
  },
  {
    title: '3. Empowerment & educating every client',
    description:
      'You can feel empowered to trust your body again. So often, as we age & with past injuries we can feel scared to move our body & do the things we love. Learning how to move safely to maintain your joints, muscles, and overall balance will help you feel confident. Knowledge is power & you deserve to know how to care for your body.',
  },
  {
    title: '4. Consistency & movement longevity',
    description:
      "The only way to be consistent is to practice being consistent. One thing is certain, you have to move your body for a lifetime. You can find your middle ground between treatment & training to enhance your body's movement for the long-run.",
  },
];

const PhilosophyContainer = () => {
  return (
    <div className="container max-w-6xl p-4">
      <ul className="md:text-2xl text-black flex flex-col gap-10 ">
        {philosophyArray.map((item) => (
          <li
            key={item.title}
            className="flex flex-col items-center justify-center pb-2 text-center "
          >
            <h2 className="text-2xl pb-6 md:text-3xl text-black">
              {item.title}
            </h2>
            <p className="leading-5 md:leading-8">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Booking = () => {
  return (
    <div className="min-h-screen pt-20 lg:pt-32 pb-10 bg-zinc-200 flex flex-col items-center justify-center">
      <h1 className="text-center text-black text-xl  font-bold max-w-2xl lg:max-w-4xl underline md:text-3xl pb-10">
        My goal is to help you find YOUR MIDDLE GROUND so that you are in
        control of your body.
      </h1>
      <PhilosophyContainer />
    </div>
  );
};

export default Booking;
