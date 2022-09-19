import { React, useState } from "react";
import { TrainingData } from "../data";
import HomePage from "./HomePage";
import HomePageManager from "./HomePageManager";
import loginImg from './login.png';

import classes from "./Login.module.css";

const Login = ({loggedIn,setLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState();
  const [userOrManager, setUserOrManager] = useState(true);
  const btnHandler = (e) => {
    e.preventDefault();
    setLoggedIn((prev) => !prev)
    let user1 = TrainingData.find((td) => td.Email === username);

    if (user1 !== undefined) {
      setUser(user1);
    } else {
      setUserOrManager(false);
    }
  };

  return (
    // <><div className={classes.loginImg}>
    //   <img src={loginImg} width="300" style={{ position: 'relative' }} alt="login" />
    // </div>
    <>
    <div className={classes.login}>
    <img className = {classes.loginImage} src={loginImg} alt="login" />
        {(!user && userOrManager && !loggedIn) && (
          <form>
            <div className={classes.control}>
              <label>Email</label>
              <input
                type={"text"}
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>

            <button className={classes.button} onClick={(e) => btnHandler(e)}>
              Login
            </button>
          </form>
        )}
        {userOrManager ? <HomePage user={user} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <HomePageManager setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}

      </div></>
  );
};

export default Login;
