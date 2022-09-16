import { React, useState } from "react";

const StudentDetails = ({ user, setShow }) => {
    const [isClicked, setIsClicked] = useState(false);
    const btnHandler = () => {
        setIsClicked(!isClicked);
        setShow((prev) => !prev);
    }
    return (
        <>
            <span style={{color: "#3287c1", fontSize: "24px"}}>
                {user.Email}
            </span>

            <button style={{ marginLeft: "12px" }} onClick={() => btnHandler()}>
                {!isClicked ? <span>Show</span>
                    :
                    <>
                        Hide
                    </>
                }
            </button>
            <div>
                {
                isClicked &&
                <div style={{ color: "white", backgroundColor:"3287c1", padding: "8px", marginTop: "4px", borderRadius: "8px"}}>
                    More details:
                    <p>
                        Courses Enrolled {user.NewCoursesEnrolled}
                    </p>
                    <p>
                        Courses Started {user.NewCoursesStarted}
                    </p>
                    <p>
                        MinutesVideoConsumed {user.MinutesVideoConsumed}
                    </p>
                </div>
            }
            </div>
            
        </>
    )
}

export default StudentDetails