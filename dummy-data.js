import { type } from "os";

const DUMMY_DATA = [
  {
    id: "m4x60",
    membership: true,
    session_length: 60,
    sessions_per_month: 4,
    cost: 220,
    description: "FILLER description about a 60 minute session for memberships",
  },
  {
    id: "m4x90",
    membership: true,
    session_length: 90,
    sessions_per_month: 4,
    cost: 450,
    description:
      "Fadsf;lkjasdflka asdflkja daskdgjasdgk asd gkdjag das session for memberships",
  },
  {
    id: "m4x1200",
    membership: true,
    session_length: 120,
    sessions_per_month: 4,
    cost: 1120,
    description: "FILLER description about a 60 minute session for memberships",
  },

  {
    id: "single_session",
    membership: false,
    options: [
      {
        id: "1x60",
        cost: "",
        description: "",
      },
      {
        id: "1x90",
        cost: "",
        description: "",
      },
      {
        id: "1x120",
        cost: "",
        description: "",
      },
    ],
  },
];

export const getMembershipData = () => {
  const arr = DUMMY_DATA.filter((data) => data.membership === true);
  return arr;
};

export const getFilteredMemberships = (sessionLength) => {
  const memberships = DUMMY_DATA.filter((data) => data.membership === true);
  return memberships.filter((data) => data.session_length === sessionLength);
};
