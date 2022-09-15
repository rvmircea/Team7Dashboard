import { React, useState } from "react";
import { TrainingData } from "../data";
import HomePage from "./HomePage";
import classes from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState();

  const btnHandler = (e) => {
    e.preventDefault();
    let user1 = TrainingData.find((td) => td.Email === username);

    if (user1 !== undefined) {
      setUser(user1);
    } else {
      setUser("Nu a fost gasit");
    }
  };

  return (
    <div className={classes.login}>
      {!user && (
        <form>
          <div className={classes.control}>
            <label>Email</label>
            <input
              type={"text"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <button className={classes.button} onClick={(e) => btnHandler(e)}>
            Login
          </button>
        </form>
      )}

      <HomePage user={user} />
    </div>
  );
};

export default Login;
