import { ModalStyled } from "./Modal.Styled";

import { useDispatch } from "../App/Context/AppContext";
import { useAppState } from "../App/Context/AppContext";

const Modal = () => {
  const appState = useAppState();
  const appDispatch = useDispatch();

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
