import { React, useState } from 'react'
import { TrainingData } from "../data";
import StudentDetails from './StudentDetails';

const HomePageManager = ({ loggedIn }) => {

    const allUsers = TrainingData;
    const [show, setShow] = useState(true);
    return (

        <div>
            {
                loggedIn && <>{allUsers.map(user => {
                    return (
                        <li style={{listStyle: "none"}} key={user.Email}>
                            <StudentDetails user={user} setShow={setShow} />
                        </li>
                    )
                })}</>
            }

        </div>
    )
}

export default HomePageManager