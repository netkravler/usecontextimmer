import { useContext } from "react";
import DispatchContext from "../App/Context/DispatchContext";

export const Home = () => {
  const appDispatch = useContext(DispatchContext);

  return (
    <div>
      Home
      <br />
      <button onClick={() => appDispatch({ type: "flashMessage", value: "Jeg er en flashmessage" })}>Show me a flashmessage</button>
      <br />
      <button onClick={() => appDispatch({ type: "ShowModal", payload: <ModalPayload /> })}>Show me a modal with component</button>
      <br />
      <button onClick={() => appDispatch({ type: "ShowModal", payload: <aside>Jeg er sendt som dom content</aside> })}>
        Show me a modal with DOM
      </button>
      <br />
    </div>
  );
};

const ModalPayload = () => {
  const appDispatch = useContext(DispatchContext);

  return (
    <div>
      <button onClick={() => appDispatch({ type: "flashMessage", value: "Jeg er sendt fra modal" })}>Tricker message from modal</button>
    </div>
  );
};
