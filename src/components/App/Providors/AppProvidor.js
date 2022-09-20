import React from "react";

import { useImmerReducer } from "use-immer";

import { DispatchContext } from "../Context/AppContext";
import { StateContext } from "../Context/AppContext";

const AppProvider = ({ children }) => {
  const initialAppState = {
    flashMessageges: [],
    ToggleModal: "none",
    ModalPayload: null,
    loggedIn: false,
    userInfo: "",
    access_token: "",
    username: "",
  };

  const appReducer = (draft, action) => {
    
    switch (action.type) {
      case "flashMessage":
        draft.flashMessageges.push(action.value);
        return;

      case "setToggleModal":
        draft.ToggleModal = action.value;

        return;

      case "ShowModal":
        draft.ModalPayload = action.payload;
        draft.ToggleModal = "block";
        return;

      case "login":
        draft.loggedIn = true;
        draft.userInfo = action.user;
        draft.access_token = action.token;
        draft.username = action.username;

        return;

      case "logout":
        draft.loggedIn = false;

        return;

      default:
        return;
    }
  };
    //* useImmerReducer uses a function "appReducer" to change values in state in this case "initialAppState"
  const [state, dispatch] = useImmerReducer(appReducer, initialAppState);

  return (<>
    {/** StateContext.prodvidor used to read values in state */}
    <StateContext.Provider value={state}>
      {/** DispatchContext.prodvidor used to change values in state */}
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
    </>
  );
};

export default AppProvider;
