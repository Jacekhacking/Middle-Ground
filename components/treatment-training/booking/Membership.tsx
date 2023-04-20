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

const MembershipComponent = ({
  membershipsArray,
  handleMemberShipArrayChange,
}: ServiceMembershipItemProps) => {
  const { id, cost, sessions_per_month, session_length, description } =
    membershipsArray[0];

  return (
    <>
      <div
        className=" w-full flex flex-col justify-center items-center py-2 gap-4 text-zinc-950 "
        key={id}
      >
        <h2 className=" text-4xl text-center test font-bold pb-8 ">
          Treatment Memberships
        </h2>

        <div className="flex flex-col  ">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center h-full gap-4 ">
              <h3 className="text-6xl font-bold">
                ${cost}
                <span className="text-xl font-light">/ month</span>
              </h3>
              <p className="text-2xl">
                {sessions_per_month}x{session_length} minute sessions
              </p>
            </div>

            <div className=" w-5/12 px-2 flex flex-col items-center ">
              <div className=" w-auto flex items-center justify-between ">
                <form className=" w-96 md:w-auto flex flex-col gap-2 items-center md:items-end justify-center my-2  drop-shadow-md">
                  <div className="flex">
                    <label
                      htmlFor="membership-session-length"
                      className="text-center font-bold md:pl-2"
                    >
                      Treatments Per Month
                    </label>
                    <select
                      id="membership-session-length"
                      className="bg-white ml-4 focus:outline-none focus:ring-2 focus:ring-zinc-900 cursor-pointer"
                      value={sessions_per_month}
                      onChange={(e) =>
                        handleMemberShipArrayChange('frequency', e.target.value)
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="flex">
                    <label
                      htmlFor="frequency"
                      className="text-center font-bold md:pl-2"
                    >
                      Treatment Length
                    </label>
                    <select
                      className="bg-white ml-4 focus:outline-none focus:ring-2 focus:ring-zinc-900 cursor-pointer"
                      id="frequency"
                      value={session_length}
                      onChange={(e) => {
                        handleMemberShipArrayChange('length', e.target.value);
                      }}
                    >
                      <option value="60">60</option>
                      <option value="90">90</option>
                      <option value="120">120</option>
                    </select>
                  </div>
                </form>
              </div>

              <p className=" text-center w-64 sm:w-96 md:w-auto leading-6 ">
                {description}
              </p>

              <a
                href={`https://www.vagaro.com/middleground/memberships`}
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
      </div>
      <div className=" w-10/12 min-h-[2px] bg-black my-4 "></div>
    </>
  );
};

export default MembershipComponent;
