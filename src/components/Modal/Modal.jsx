import { useContext } from "react";

import { ModalStyled } from "./Modal.Styled";

import StateContext from "../App/Context/StateContext";
import DispatchContext from "../App/Context/DispatchContext";

const Modal = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  return (
    <ModalStyled showmodal={appState.ToggleModal}>
      <main>
        <span onClick={() => appDispatch({type : "setToggleModal", value: "none"})}>&times;</span>
        {appState.ModalPayload}
      </main>
    </ModalStyled>
  );
};

export default Modal;
