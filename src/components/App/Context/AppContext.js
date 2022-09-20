import { createContext, useContext } from "react";

//* useContext used to create common data that can be accessed
//* throughout the component hierarchy without passing the props
//* down manually to each level

export const StateContext = createContext();
export const useAppState = () => useContext(StateContext);

export const DispatchContext = createContext();
export const useAppDispatch = () => useContext(DispatchContext);
