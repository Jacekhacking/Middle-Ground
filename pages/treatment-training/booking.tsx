import { useState } from "react";
import {
  getFilteredMemberships,
  getFilteredSingleSession,
  getMembershipData,
} from "../../dummy-data";

// import TreatmentComponent from "../../components/treatment-training/booking/treatment";
import TreatmentComponent from "../../components/treatment-training/booking/Treatment";
import MembershipComponent from "../../components/treatment-training/booking/Memberships";

const Services = () => {
  const [membershipArray, setMembershipArray] = useState(
    getFilteredMemberships(60, 2)
  );

  const [sessionArray, setSessionArray] = useState(
    getFilteredSingleSession(60)
  );

  const handleMemberShipArrayChange = (data) => {
    const [sessionLength, sessionsPerMonth] = data.split(",");
    const filteredArray = getFilteredMemberships(
      Number(sessionLength),
      Number(sessionsPerMonth)
    );
    setMembershipArray(filteredArray);
  };

  const handleSessionChange = (sessionLength) => {
    const filteredArray = getFilteredSingleSession(sessionLength);
    setSessionArray(filteredArray);
  };

  const memberships = getMembershipData();

  return (
    <div className="min-h-screen bg-zinc-200 flex flex-col items-center justify-start pt-10 pb-10 ">
      <h2 className=" text-black text-5xl font-bold underline py-20 ">
        Booking Options
      </h2>
      <div className="flex flex-col items-center max-w-6xl">
        <MembershipComponent
          memberships={memberships}
          handleMemberShipArrayChange={handleMemberShipArrayChange}
          membershipsArray={membershipArray}
        />
        <TreatmentComponent
          handleSessionChange={handleSessionChange}
          sessionArray={sessionArray}
        />
      </div>
    </div>
  );
};

export default Services;
