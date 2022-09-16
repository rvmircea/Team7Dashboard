import { React, useState } from "react";

const StudentDetails = ({user, setShow}) => {
    const [isClicked, setIsClicked] = useState(false);
    const btnHandler = () => {
        setIsClicked(!isClicked);
        setShow((prev) => !prev);
    }
  return (
     <>
     <button onClick={() => btnHandler()}>
         {!isClicked ? <>{user.Email}</> : 
         <>
         "Celelalte"
         </>}
     </button>
     </>
  )
}

export default StudentDetails