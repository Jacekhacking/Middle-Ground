const DUMMY_DATA = [
  {
    id: "60,2",
    membership: true,
    session_length: 60,
    sessions_per_month: 2,
    cost: 175,
    description:
      "This is for the client that likes to receive TREATMENT (massage or stretching) 2x PER MONTH. Each session will be $87.50 on this plan. Lock in your treatment dates up to 3 months in advance to receive this discounted rate. ",
  },
  {
    id: "90,2",
    membership: true,
    session_length: 90,
    sessions_per_month: 2,
    cost: 250,
    description:
      "This is for the client that likes to receive 90 MIN TREATMENT (massage or stretching) 2x PER MONTH. Each session will be $125 on this plan. Lock in your treatment dates up to 3 months in advance to receive this discounted rate. ",
  },
  {
    id: "60,4",
    membership: true,
    session_length: 60,
    sessions_per_month: 4,
    cost: 320,
    description:
      "This is for the client that likes to receive TREATMENT (massage or stretching) 4x PER MONTH or 1x PER WEEK. Each session will be $80 on this plan. Lock in your treatment dates up to 3 months in advance to receive this discounted rate. ",
  },
  {
    id: "90,4",
    membership: true,
    session_length: 90,
    sessions_per_month: 4,
    cost: 450,
    description:
      "This is for the client that likes to receive 90 MIN TREATMENT (massage or stretching) 4x PER MONTH. Each session will be $112.50 on this plan. Lock in your treatment dates up to 3 months in advance to receive this discounted rate. ",
  },
  {
    id: "120,4",
    membership: true,
    session_length: 120,
    sessions_per_month: 4,
    cost: 650,
    description:
      "This is for the client that likes to receive 120 MIN TREATMENT (massage or stretching) 4x PER MONTH. Each session will be $162.50 on this plan. Lock in your treatment dates up to 3 months in advance to receive this discounted rate. ",
  },

  {
    id: "60m",
    membership: false,
    session_length: 60,
    cost: 1120,
    description: "FILLER description about a 60 minute session for memberships",
  },
  {
    id: "90m",
    membership: false,
    session_length: 90,
    cost: 1120,
    description: "FILLER description about a 60 minute session for memberships",
  },
  {
    id: "120m",
    membership: false,
    session_length: 120,
    cost: 1120,
    description: "FILLER description about a 60 minute session for memberships",
  },
];

export const getMembershipData = () => {
  return DUMMY_DATA.filter((data) => data.membership === true);
};
export const getSingleSessionData = () => {
  return DUMMY_DATA.filter((data) => data.membership === false);
};

export const getFilteredMemberships = (sessionLength, sessionsPerMonth) => {
  const membershipOptions = getMembershipData();
  return membershipOptions.filter(
    (data) =>
      data.session_length === sessionLength &&
      data.sessions_per_month === sessionsPerMonth
  );
};

export const getFilteredSingleSession = (sessionLength) => {
  const sessionOptions = getSingleSessionData();
  return sessionOptions.filter((data) => data.session_length === sessionLength);
};
