import {
  getFilteredMemberships,
  getFilteredSingleSession,
} from '../../dummy-data'
import { useState, useEffect, useRef } from 'react'
import ServiceMembershipItem from '../../components/services/service-membership'
import SingleServiceMassageComponent from '../../components/services/single-service-massage'

const Services = () => {
  const [membershipArray, setMembershipArray] = useState(
    getFilteredMemberships(60),
  )

  const [sessionArray, setSessionArray] = useState(getFilteredSingleSession(60))

  const handleMemberShipArrayChange = (sessionLength) => {
    const filteredArray = getFilteredMemberships(sessionLength)
    setMembershipArray(filteredArray)
  }

  const handleSessionChange = (sessionLength) => {
    const filteredArray = getFilteredSingleSession(sessionLength)
    setSessionArray(filteredArray)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center ">
      <h2 className=" text-black text-5xl font-bold underline py-10 ">
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
    </div>
  )
}

export default Services
