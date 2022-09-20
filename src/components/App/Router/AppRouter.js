import { useContext } from "react";

import { Routes, Route } from "react-router-dom";
import FlashMessages from "../../FlashMessage/FlashMessages";
import Modal from "../../Modal/Modal";
import { Home } from "../../Pages/Home";
import Login from "../../Pages/Login";
import NotFound from "../../Pages/NotFound";

import { StateContext } from "../Context/AppContext";
import Footer from "../Partials/Footer";
import Header from "../Partials/Header";

const AppRouter = () => {
  const appState = useContext(StateContext);
  return (
    <>
      <FlashMessages messages={appState.flashMessageges} />{/* component for flashmessages */}
      <Modal /> {/* component for modal */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
