import { MGButton } from "../../UI/button";

type ServiceMembershipItemProps = {
  memberships: {
    id: string;
    cost: number;
    sessions_per_month?: number;
    session_length: number;
    description: string;
  }[];
  membershipsArray: {
    id: string;
    cost: number;
    sessions_per_month?: number;
    session_length: number;
    description: string;
  }[];
  handleMemberShipArrayChange: any;
};

const MembershipComponent = ({
  memberships,
  membershipsArray,
  handleMemberShipArrayChange,
}: ServiceMembershipItemProps) => {
  const { id, cost, sessions_per_month, session_length, description } =
    membershipsArray[0];

  return (
    <>
      <div
        className=" w-full flex justify-center items-start px-7 py-2 gap-4 text-black"
        key={id}
      >
        <div className="flex flex-col items-center justify-between h-full gap-6 ">
          <h2 className="text-black text-3xl testing test font-bold ">
            Treatment Memberships
          </h2>
          <h3 className="text-6xl font-bold">
            ${cost}
            <span className="text-xl font-light">/ month</span>
          </h3>
          <p className="text-2xl">
            {sessions_per_month}x{session_length} minute sessions
          </p>
          <MGButton
            size={"small"}
            thirdPartyLink="https://www.vagaro.com/middleground/memberships"
          >
            Sign Up
          </MGButton>
        </div>

        <div className="text-black w-5/12 px-2 flex flex-col items-center ">
          <div className=" w-auto flex items-center justify-center ">
            <form className=" mx-4 flex items-center justify-center my-2  drop-shadow-md">
              <label
                htmlFor="session-length"
                className="text-center  font-bold pl-2"
              >
                Membership Options
              </label>
              <select
                name=""
                id="session-length"
                className="bg-white ml-4 focus:outline-none focus:ring-2 focus:ring-zinc-900 cursor-pointer"
                value={id}
                onChange={(e) => handleMemberShipArrayChange(e.target.value)}
              >
                {memberships.map(
                  ({ id, session_length, sessions_per_month }) => (
                    <option key={id} value={id}>
                      {sessions_per_month}x{session_length}
                    </option>
                  )
                )}
              </select>
            </form>
          </div>

          <p className=" text-center leading-6 "> {description}</p>
        </div>
      </div>
      <div className=" w-10/12 min-h-[2px] bg-black my-4 "></div>
    </>
  );
};

export default MembershipComponent;
