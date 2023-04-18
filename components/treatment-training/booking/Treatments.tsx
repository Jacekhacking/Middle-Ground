import { MGButton } from '../../UI/Button';

type SingleServiceMassageComponent = {
  singleSession: {
    id: string;
    cost: number;
    session_length: number;
    description: string;
  }[];
  handleSessionChange: any;
};

const TreatmentComponent = ({
  singleSession,
  handleSessionChange,
}: SingleServiceMassageComponent) => {
  const { id, cost, session_length, description } = singleSession[0];

  return (
    <>
      <div
        className=" w-full flex justify-center flex-col md:flex-row items-center px-7 py-2 text-zinc-950"
        key={id}
      >
        <div className="flex flex-col h-60 items-center justify-center gap-4 ">
          <h2 className=" text-3xl text-center test font-bold">
            Single Session Options
          </h2>
          <h3 className="text-6xl font-bold">
            ${cost}
            <span className="text-xl font-light">/ month</span>
          </h3>
          <p className="text-2xl">{session_length} minute sessions</p>

          <MGButton
            size={'small'}
            thirdPartyLink="https://www.vagaro.com/middleground/services"
          >
            Sign Up
          </MGButton>
        </div>

        <div className=" w-5/12 px-2 flex flex-col items-center">
          <div className=" w-62 flex items-center justify-center ">
            <form className="my-2 flex gap-2 items-end justify-center drop-shadow-md">
              <label
                htmlFor="session-length"
                className="text-center  font-bold pl-2"
              >
                Session Length
              </label>
              <select
                onChange={(e) => handleSessionChange(Number(e.target.value))}
                name=""
                value={session_length}
                id="session-length"
                className="bg-white ml-4 focus:outline-none focus:ring-2 focus:ring-zinc-900 cursor-pointer"
              >
                <option value="60">60</option>
                <option value="90">90</option>
                <option value="120">120</option>
                <option value="180">180</option>
              </select>
            </form>
          </div>

          <p className="text-center text-lg w-screen px-10 md:w-full">
            {description}
          </p>
        </div>
      </div>
      <div className=" w-10/12 min-h-[2px] bg-black my-4 "></div>
    </>
  );
};

export default TreatmentComponent;
