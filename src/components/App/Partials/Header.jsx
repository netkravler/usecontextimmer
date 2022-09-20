import React from "react";

import { Link } from "react-router-dom";
import { useAppState } from "../Context/AppContext";

const Header = () => {
  const appState = useAppState();

  //** you could use appState to get values from providor in case you are logged in.  */

  return (
    <ul>
      {/** link to profile is only shown if user is logged in */}
      {appState.loggedIn && (
        <li>
          <Link to="/profile">My secret page</Link>
        </li>
      )}
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export default Header;
