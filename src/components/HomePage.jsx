import React from "react";
import classes from "./HomePage.module.css"
const HomePage = ({ user, loggedIn }) => {
  // return <div>{user ? user.Email : "Homepage"}</div>;
  return (
    <>
      { (user && loggedIn) &&
        <div>
          <p>Hello {user.Email}</p>
          <div>
            <p className={classes.p}>NewCoursesEnrolled  {user.NewCoursesEnrolled}</p>
          </div>
          <div>
            <p>NewCoursesStarted {user.NewCoursesStarted}</p>
          </div>
          <div>
            <p>MinutesVideoConsumed {user.MinutesVideoConsumed}</p>
          </div>
        </div>}
    </>
  )
};

export default HomePage;
