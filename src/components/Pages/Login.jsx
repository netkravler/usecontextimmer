import { useState, useContext } from "react";

import StateContext from "../App/Context/StateContext";
import DispatchContext from "../App/Context/DispatchContext";

const Login = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };

  const LogMeIn = (e) => {
    e.preventDefault();

    const endPoint = "https://api.mediehuset.net/token";
    const username = user.username;
    const password = user.password;

    const data = { username: username, password: password };

    fetch(endPoint, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        appDispatch({ type: "login", user: data.user, token: data.access_token, username: data.username });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return !appState.loggedIn ? (
    <form onSubmit={LogMeIn}>
      <input type="text" name="username" onChange={(e) => handleChange(e)} />
      <input type="password" name="password" onChange={(e) => handleChange(e)} />
      <button>login</button>
    </form>
  ) : (
    <>
      {/*appState.username*/}
      {appState.userInfo.firstname}
      {appState.userInfo.lastname}

      <button onClick={() => appDispatch({ type: "logout" })}>Logout</button>
    </>
  );
};

export default Login;
