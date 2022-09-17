import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import StateContext from "../Context/StateContext";

const Header = () => {
  const appState = useContext(StateContext);
  return (
    <ul>
      {!appState.loggedIn ? (
        <li>
          <Link to="/login">Login</Link>
        </li>
      ) : (
        ""
      )}
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export default Header;
