import React from "react";

const HomePage = ({ user }) => {
  return <div>{user ? user.Email + user.Groups  : "Homepage"}</div>;
};

export default HomePage;
