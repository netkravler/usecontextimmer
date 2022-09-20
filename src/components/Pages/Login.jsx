import { useState } from "react";

import { useDispatch } from "../App/Context/AppContext";
import { useAppState } from "../App/Context/AppContext";

import styled from "styled-components";

const StyledForm = styled.form`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input,
  button {
    padding: 10px;
    flex: 1;
    border-radius: 8px;
  }
  button {
    cursor: pointer;
    background-color: #98b68e;
    color: #fff;
    &:hover {
      background-color: #fff;
      color: #98b68e;
    }
  }
`;

const Login = () => {
  const appState = useAppState();
  const appDispatch = useDispatch();

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
        console.log(data.status === "Ok");
        if (data.status === "Ok") {
          appDispatch({ type: "login", user: data.user, token: data.access_token, username: data.username });
          appDispatch({ type: "flashMessage", value: "Velkommen" });
        } else {
          appDispatch({ type: "flashMessage", value: "Ingen bruger med disse kriterie" });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return !appState.loggedIn ? (
    <StyledForm onSubmit={LogMeIn}>
      <input type="text" name="username" onChange={(e) => handleChange(e)} />
      <input type="password" name="password" onChange={(e) => handleChange(e)} />
      <button>login</button>
    </StyledForm>
  ) : (
    <>
      {/*appState.username*/}
      {appState.loggedIn && appState.userInfo.firstname}
      {appState.loggedIn && appState.userInfo.lastname}

      <button onClick={() => appDispatch({ type: "logout" })}>Logout</button>
    </>
  );
};

export default Login;
