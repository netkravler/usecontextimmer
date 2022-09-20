import { useContext } from "react";

import { Routes, Route } from "react-router-dom";
import FlashMessages from "../../FlashMessage/FlashMessages";
import Modal from "../../Modal/Modal";
import { Home } from "../../Pages/Home";
import Login from "../../Pages/Login";
import NotFound from "../../Pages/NotFound";
import Profile from "../../Pages/Profile";

import { useAppState } from "../Context/AppContext";
import Footer from "../Partials/Footer";
import Header from "../Partials/Header";

const AppRouter = () => {
  const appState = useAppState();
  return (
    <>
      {/* component for flashmessages */}
      <FlashMessages messages={appState.flashMessageges} />
      {/* component for modal */}
      <Modal />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/** Route to profile is only working if user is logged in */}
        {appState.loggedIn && <Route path="/profile" element={<Profile />} />}

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
