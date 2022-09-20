import { ModalStyled } from "./Modal.Styled";

import { useAppDispatch } from "../App/Context/AppContext";
import { useAppState } from "../App/Context/AppContext";

const Modal = () => {
  //* appState reads values in the providor
  const appState = useAppState();
  //* appDispatch sends commands providor, commands defined by "type" and may contain any number of values, payloads and any other attributes
  const appDispatch = useAppDispatch();

  return (
    <ModalStyled showmodal={appState.ToggleModal}>
      <main>
        <span onClick={() => appDispatch({ type: "setToggleModal", value: "none" })}>&times;</span>
        {appState.ModalPayload}
      </main>
    </ModalStyled>
  );
};

export default Modal;
