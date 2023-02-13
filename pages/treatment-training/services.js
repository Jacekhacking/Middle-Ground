import { getFilteredMemberships } from "../../dummy-data";
import { useState, useEffect, useRef } from "react";
import ServiceMembershipItem from "../../components/services/service-membership";
import { getAllJSDocTagsOfKind } from "typescript";

const Services = () => {
  const [membershipArray, setMembershipArray] = useState(
    getFilteredMemberships(60)
  );

  const handleMemberShipArrayChange = (sessionLength) => {
    const filteredArray = getFilteredMemberships(sessionLength);
    setMembershipArray(filteredArray);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center ">
      <h2 className=" text-black text-5xl font-bold underline ">
        Services Available
      </h2>
      <div className="flex flex-col items-center max-w-6xl">
        <ServiceMembershipItem
          handleMemberShipArrayChange={handleMemberShipArrayChange}
          membershipsArray={membershipArray}
        />
      </div>
    </div>
  );
};

export default Services;
