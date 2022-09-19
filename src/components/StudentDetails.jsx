import { React, useState } from "react";

import classes from "./StudentDetails.module.css";

const StudentDetails = ({ user, setShow }) => {
  const [isClicked, setIsClicked] = useState(false);
  const btnHandler = () => {
    setIsClicked(!isClicked);
    setShow((prev) => !prev);
  };
  return (
    <div className={classes["student-details"]}>
      <span>{user.Email}</span>

      <button style={{ marginLeft: "12px" }} onClick={() => btnHandler()}>
        {!isClicked ? <span>Show details</span> : <>Hide details</>}
      </button>
      <div>
        {isClicked && (
          <div>
            <p>Courses Enrolled {user.NewCoursesEnrolled}</p>
            <p>Courses Started {user.NewCoursesStarted}</p>
            <p>MinutesVideoConsumed {user.MinutesVideoConsumed}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
