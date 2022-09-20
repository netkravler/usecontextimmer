import { useContext } from "react";
import { DispatchContext } from "../App/Context/AppContext";
import { useAppDispatch } from "../App/Context/AppContext";
import Login from "./Login";
export const Home = () => {
  const appDispatch = useAppDispatch();

  return (
    <div>
      Home
      <br />
      {/** tells dispatch to show flashmessage with value of "Jeg er en flashmessage" */}
      <button onClick={() => appDispatch({ type: "flashMessage", value: "Jeg er en flashmessage" })}>Show me a flashmessage</button>
      <br />
      {/** tells dispatch to open a modal with a payload of component <ModalPayload */}
      <button onClick={() => appDispatch({ type: "ShowModal", payload: <ModalPayload /> })}>vist i modal via component</button>
      <br />
      {/** tells dispatch to open a modal with a payload of html */}
      <button onClick={() => appDispatch({ type: "ShowModal", payload: <aside>Vist i modal som ren text</aside> })}>En modal med ren text</button>
      <br />
      {/** tells dispatch to open a modal with a payload of component <Login */}
      <button onClick={() => appDispatch({ type: "ShowModal", payload: <Login /> })}>Login modal</button>
    </div>
  );
};

const ModalPayload = () => {
  const appDispatch = useAppDispatch();

  return (
    <div>
      <h2>Jeg er en fed Modal</h2>
      <button onClick={() => appDispatch({ type: "flashMessage", value: "Jeg er sendt fra modal" })}>Send flash fra modal</button>
    </div>
  );
};
