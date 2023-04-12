import { MGButton } from "../../UI/button";

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
      <h3 className="text-black text-4xl testing test ">
        Single Session Options
      </h3>
      <div
        className=" w-full flex justify-center items-center px-7 py-2 text-black"
        key={id}
      >
        <div className="flex flex-col h-60 items-center justify-center py-4 ">
          <h3 className="text-6xl font-bold">
            ${cost}
            <span className="text-xl font-light">/ month</span>
          </h3>
          <p className="text-2xl">{session_length} minute sessions</p>

          <MGButton
            size={"small"}
            thirdPartyLink="https://www.vagaro.com/middleground/memberships"
          >
            Sign Up
          </MGButton>
        </div>

        <div className="text-black w-5/12 px-2 flex flex-col items-center">
          <div className=" w-62 flex items-center justify-center ">
            <form className="bg-gray-200 mx-4 flex items-center justify-center my-2 ">
              <label htmlFor="session-length" className="text-center">
                Session Length
              </label>
              <select
                onChange={(e) => handleSessionChange(Number(e.target.value))}
                name=""
                value={session_length}
                id="session-length"
                className="bg-white border-2 border-black mx-2"
              >
                <option value="60">60</option>
                <option value="90">90</option>
                <option value="120">120</option>
              </select>
            </form>
          </div>

          <p className="text-center text-lg">{description}</p>
        </div>
      </div>
      <div className=" w-10/12 min-h-[2px] bg-black my-4 "></div>
    </>
  );
};

export default TreatmentComponent;
