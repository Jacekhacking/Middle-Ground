import { useState } from 'react';
import {
  getFilteredMemberships,
  getFilteredSingleSession,
} from '../../dummy-data';

import MembershipComponent from '../../components/treatment-training/booking/Membership';
import TreatmentComponent from '../../components/treatment-training/booking/Treatments';
const Services = () => {
  const [membershipFrequency, setMembershipFrequency] = useState(0);
  const [membershipSessionLength, setMembershipSessionLength] = useState(0);
  const [membershipArray, setMembershipArray] = useState(
    getFilteredMemberships(60, 2)
  );

  const [singleSession, setSingleSession] = useState(
    getFilteredSingleSession(60)
  );

  const handleMemberShipArrayChange = (message, data) => {
    if (message === 'frequency') {
      setMembershipFrequency(Number(data));
      const filteredArray = getFilteredMemberships(
        membershipSessionLength > 0 ? membershipSessionLength : 60,
        Number(data)
      );

      setMembershipArray(filteredArray);
      return;
    }
    if (message === 'length') {
      setMembershipSessionLength(Number(data));
      const filteredArray = getFilteredMemberships(
        Number(data),
        membershipFrequency > 0 ? membershipFrequency : 2
      );

      setMembershipArray(filteredArray);
      return;
    } else {
      console.log('error wrong data passed');
    }
  };

  const handleSessionChange = (sessionLength) => {
    const filteredArray = getFilteredSingleSession(sessionLength);
    setSingleSession(filteredArray);
  };

  return (
    <div className="min-h-screen bg-zinc-200 flex flex-col items-center lg:justify-center lg:pt-10 pb-10 ">
      <h1 className=" text-black text-center text-3xl md:text-5xl font-bold underline py-20 ">
        Booking Options
      </h1>
      <div className="flex flex-col items-center max-w-4xl">
        <MembershipComponent
          handleMemberShipArrayChange={handleMemberShipArrayChange}
          membershipsArray={membershipArray}
        />
        <TreatmentComponent
          handleSessionChange={handleSessionChange}
          singleSession={singleSession}
        />
        <div className="text-zinc-950 flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Personal Training</h2>- 50$ for a
          60 minute training session.
        </div>
      </div>
    </div>
  );
};

export default Services;
