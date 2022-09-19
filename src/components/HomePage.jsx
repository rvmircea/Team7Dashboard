import React from "react";
import classes from "./HomePage.module.css"
import Courses from "./Courses";
const HomePage = ({ user, loggedIn }) => {
  // return <div>{user ? user.Email : "Homepage"}</div>;

  const pStyle = {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#3287c1",
    marginBottom: "48px",
    marginTop: "32px",
  }

  const spanStyle = {
    marginLeft: "auto",
    marginRight: "6px",
    color: "#3287c1",
    textDecoration: "underline"
  }
  

  return (
    <>
      { (user && loggedIn) &&
        <div className={classes.details}>
          <p style={pStyle}>Hello, {user.Email.substring(0, user.Email.length - 9)}</p>
          <div>
            <p className={classes.p}>New Courses Enrolled:  <span style={spanStyle}>{user.NewCoursesEnrolled} courses</span></p>
          
            <p>New Courses Started: <span style={spanStyle}> {user.NewCoursesStarted} courses</span></p>
          
            <p>Minutes Video Consumed: <span style={spanStyle}>{user.MinutesVideoConsumed} minutes</span></p>
            <Courses user={user}/>
          </div>
        </div>}
    </>
  )
};

export default HomePage;
