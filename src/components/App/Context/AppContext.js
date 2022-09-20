import { createContext, useContext } from "react";


export const StateContext = createContext();
export const useAppState = () => useContext(StateContext);


export const DispatchContext = createContext();
export const useDispatch = () => useContext(DispatchContext);