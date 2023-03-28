import {
  getFilteredMemberships,
  getFilteredSingleSession,
} from "../../dummy-data";
import ServiceMembershipItem from "../../components/treatment-training/services/service-membership";
import SingleServiceMassageComponent from "../../components/treatment-training/services/single-service-massage";
import { MGButton } from "../../components/UI/button";

import { useState } from "react";

const Services = () => {
  const [membershipArray, setMembershipArray] = useState(
    getFilteredMemberships(60)
  );

  const [sessionArray, setSessionArray] = useState(
    getFilteredSingleSession(60)
  );

  const handleMemberShipArrayChange = (sessionLength) => {
    const filteredArray = getFilteredMemberships(sessionLength);
    setMembershipArray(filteredArray);
  };

  const handleSessionChange = (sessionLength) => {
    const filteredArray = getFilteredSingleSession(sessionLength);
    setSessionArray(filteredArray);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start ">
      <h2 className=" text-black text-5xl font-bold underline py-20 ">
        All Services Available
      </h2>
      <div className="flex flex-col items-center max-w-6xl">
        <ServiceMembershipItem
          handleMemberShipArrayChange={handleMemberShipArrayChange}
          membershipsArray={membershipArray}
        />
        <SingleServiceMassageComponent
          handleSessionChange={handleSessionChange}
          sessionArray={sessionArray}
        />
      </div>
      <MGButton>Sign Up</MGButton>
    </div>
  );
};

export default Services;
