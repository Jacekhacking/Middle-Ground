import { MGButton } from "../../UI/button";

type ServiceMembershipItemProps = {
  membershipsArray: {
    id: string;
    cost: number;
    sessions_per_month?: number;
    session_length: number;
    description: string;
  }[];
  handleMemberShipArrayChange: any;
};

const ServiceMembershipItem = ({
  membershipsArray,
  handleMemberShipArrayChange,
}: ServiceMembershipItemProps) => {
  const { id, cost, sessions_per_month, session_length, description } =
    membershipsArray[0];

  return (
    <>
      <h3 className="text-black text-4xl testing test ">Membership Options</h3>
      <div
        className=" w-full flex justify-center items-center px-7 py-2 text-black"
        key={id}
      >
        <div className="flex flex-col   h-60   items-center justify-between py-4 ">
          <h3 className="text-6xl font-bold">
            ${cost}
            <span className="text-xl font-light">/ month</span>
          </h3>
          <p className="text-2xl">
            {sessions_per_month}, {session_length} minute sessions per month
          </p>
          <MGButton thirdPartyLink="https://www.vagaro.com/middleground/memberships">
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
                name=""
                id="session-length"
                className="bg-white border-2 border-gray-500 ml-4 "
                onChange={(e) =>
                  handleMemberShipArrayChange(Number(e.target.value))
                }
              >
                <option value="60">60</option>
                <option value="90">90</option>
                <option value="120">120</option>
              </select>
            </form>
          </div>

          <p className="text-center text-lg"> {description}</p>
        </div>
      </div>
      <div className=" w-10/12 min-h-[2px] bg-black my-4 "></div>
    </>
  );
};

export default ServiceMembershipItem;
