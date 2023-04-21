const DUMMY_DATA = [
  {
    id: '60,1',
    membership: true,
    session_length: 60,
    sessions_per_month: 1,
    cost: 85,
    description:
      '60 MIN TREATMENT SESSION - 1 X PER MONTH. for Massage Therapy & Assisted Stretching',
  },
  {
    id: '60,2',
    membership: true,
    session_length: 60,
    sessions_per_month: 2,
    cost: 175,
    description:
      '60 MIN TREATMENT SESSION - 2 X PER MONTH. for Massage Therapy & Assisted Stretching',
  },
  {
    id: '60,4',
    membership: true,
    session_length: 60,
    sessions_per_month: 4,
    cost: 320,
    description:
      '60 MIN TREATMENT SESSION - 4 X PER MONTH. for Massage Therapy & Assisted Stretching',
  },
  {
    id: '90,1',
    membership: true,
    session_length: 90,
    sessions_per_month: 1,
    cost: 130,
    description:
      '90 MIN TREATMENT SESSION - 1 X PER MONTH. for Massage Therapy & Assisted Stretching',
  },
  {
    id: '90,2',
    membership: true,
    session_length: 90,
    sessions_per_month: 2,
    cost: 250,
    description:
      '90 MIN TREATMENT SESSION - 2 X PER MONTH. for Massage Therapy & Assisted Stretching',
  },
  {
    id: '90,4',
    membership: true,
    session_length: 90,
    sessions_per_month: 4,
    cost: 450,
    description:
      '90 MIN TREATMENT SESSION - 4 X PER MONTH. for Massage Therapy & Assisted Stretching',
  },
  {
    id: '120,1',
    membership: true,
    session_length: 120,
    sessions_per_month: 1,
    cost: 170,
    description:
      '120 MIN TREATMENT SESSION - 1 X PER MONTH. for Massage Therapy & Assisted Stretching',
  },
  {
    id: '120,2',
    membership: true,
    session_length: 120,
    sessions_per_month: 2,
    cost: 300,
    description:
      '120 MIN TREATMENT SESSION for Massage Therapy & Assisted Stretching 2 X PER MONTH.',
  },

  {
    id: '120,4',
    membership: true,
    session_length: 120,
    sessions_per_month: 4,
    cost: 650,
    description:
      '120 MIN TREATMENT SESSION - 4 X PER MONTH. for Massage Therapy & Assisted Stretching',
  },

  {
    id: '60m',
    membership: false,
    session_length: 60,
    cost: 100,
    description:
      'Treatment includes: Therapeutic Massage & Assisted Stretching customized to your needs.',
  },
  {
    id: '90m',
    membership: false,
    session_length: 90,
    cost: 150,
    description:
      'Treatment includes: Therapeutic Massage & Assisted Stretching customized to your needs.',
  },
  {
    id: '120m',
    membership: false,
    session_length: 120,
    cost: 200,
    description:
      'Treatment includes: Therapeutic Massage & Assisted Stretching customized to your needs.',
  },
  {
    id: '180m',
    membership: false,
    session_length: 180,
    cost: 250,
    description:
      'Treatment includes: Therapeutic Massage & Assisted Stretching customized to your needs. (NOT RECOMMENDED FOR NEW CLIENTS) ',
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
