import { React, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { TrainingData, EventSignUp, VirtualAttendance } from "../data"
import HomePage from './HomePage';

const Login = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState();

    const btnHandler = (e) => {
        e.preventDefault();
        let user1 = TrainingData.find(td => td.Email === username);

        if (user1 !== undefined) {
            setUser(user1);
        }
        else {
            setUser("Nu a fost gasit");
        }
    }

    return (
        <>
            {
                !user && <form>
                    <input type={"text"} value={username} onChange={(e) => setUsername(e.target.value)} />
                    <button onClick={(e) => btnHandler(e)}>
                        Click
                    </button>
                </form>
            }

            {user &&
                <div>
                    {user.Email}
                    -
                    {user.Groups}
                </div>
            }

            <HomePage user={user} />
        </>
    )
}

export default Login