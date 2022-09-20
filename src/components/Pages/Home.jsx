import { useContext } from "react";
import { DispatchContext } from "../App/Context/AppContext";
import { useDispatch } from "../App/Context/AppContext";
import Login from "./Login";
export const Home = () => {
  //const appDispatch = useContext(DispatchContext);

  const appDispatch = useDispatch();

  return (
    <div>
      Home
      <br />
      <button onClick={() => appDispatch({ type: "flashMessage", value: "Jeg er en flashmessage" })}>Show me a flashmessage</button>
      <br />
      <button onClick={() => appDispatch({ type: "ShowModal", payload: <ModalPayload /> })}>vist i modal via component</button>
      <br />
      <button onClick={() => appDispatch({ type: "ShowModal", payload: <aside>Vist i modal som ren text</aside> })}>En modal med ren text</button>
      <br />
      <button onClick={() => appDispatch({ type: "ShowModal", payload: <Login /> })}>Login modal</button>
    </div>
  );
};

const ModalPayload = () => {
  const appDispatch = useContext(DispatchContext);

  return (
    <div>
      <h2>Jeg er en fed Modal</h2>
      <button onClick={() => appDispatch({ type: "flashMessage", value: "Jeg er sendt fra modal" })}>Send flash fra modal</button>
    </div>
  );
};
