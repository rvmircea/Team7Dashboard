import {React, useState} from "react";
import Login from "./components/Login";
import MainHeader from "./components/MainHeader";
const App = () => {

  const [loggedIn, setLoggedIn ] = useState(false);
  return (
    <>
      <MainHeader loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
    </>
  );
};

export default App;
