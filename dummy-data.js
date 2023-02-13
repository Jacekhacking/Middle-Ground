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
}


export const getFilteredMemberships = (sessionLength) => {
    const membershipOptions = getMembershipData()
    return membershipOptions.filter((data) => data.session_length === sessionLength);
};

export const getFilteredSingleSession = (sessionLength) => {
    const sessionOptions = getSingleSessionData()
    return sessionOptions.filter((data) => data.session_length === sessionLength);
};


