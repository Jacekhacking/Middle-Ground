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
        className=" w-full flex justify-center flex-col items-center py-2 text-zinc-950"
        key={id}
      >
        <h2 className=" text-3xl text-center test font-bold pb-8">
          Single Session Options
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <h3 className="text-6xl font-bold">
              ${cost}
              <span className="text-xl font-light">/ month</span>
            </h3>
            <p className="text-2xl">{session_length} minute sessions</p>
          </div>

          <div className=" w-5/12 px-2 flex flex-col items-center">
            <div className=" flex justify-center items-center ">
              <form className=" w-96 md:w-auto flex gap-2 items-center  justify-center my-2  drop-shadow-md">
                <div className="flex">
                  <label
                    htmlFor="session-length"
                    className="text-center font-bold md:pl-2"
                  >
                    Session Length
                  </label>
                  <select
                    onChange={(e) =>
                      handleSessionChange(Number(e.target.value))
                    }
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
                </div>
              </form>
            </div>

            <p className="text-center w-64 sm:w-96 md:w-auto leading-6">
              {description}
            </p>
            <a
              href={`https://www.vagaro.com/middleground/services`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" custom-box-shadow  bg-zinc-100 text-black  w-20 h-8 hover:bg-black hover:text-zinc-100">
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className=" w-10/12 min-h-[2px] bg-black my-4 "></div>
    </>
  );
};

export default TreatmentComponent;
