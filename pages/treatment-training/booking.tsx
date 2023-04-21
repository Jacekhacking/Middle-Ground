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
      <div className="flex flex-col items-center w-screen">
        <MembershipComponent
          handleMemberShipArrayChange={handleMemberShipArrayChange}
          membershipsArray={membershipArray}
        />
        <TreatmentComponent
          handleSessionChange={handleSessionChange}
          singleSession={singleSession}
        />
        <div className="text-zinc-950 flex flex-col items-center gap-2 text-center w-screen flex-wrap">
          <h2 className="text-3xl font-bold text-center">Personal Training</h2>
          <p className="leading-5 max-w-sm h-auto">
            1 FREE CONSULT: Receive TRAINING advice & structured programming
            from a Certified Strength & Conditioning Specialist (CSCS) to
            address specific training goals. Your first consultation will be
            conducted virtually or informally as an add-on to a previously
            booked session. We will (1) discuss your specific health & fitness
            goals (2) create a training program that will help you achieve your
            goals (3) answer any questions you might have.
          </p>
          <h3 className="font-bold text-2xl ">After Consult </h3>
          <p className="text-xl">50$ for a 60 minute training session.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
