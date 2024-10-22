import "../styles/index.scss";
import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import MainContent from "../components/layouts/MainContent";
import Contacts from "../components/nav/Contacts";
import MyWorks from "../components/nav/MyWorks";
import ModalWindow from "../components/UI/ModalWindow";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isContactsVisible, setContactsVisible] = useState(false);
  const [isMainContextVisible, setMainContextVisible] = useState(true);
  const [isMyWorksVisible, setMyWorksVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const setVisibilityContactsHandler = () => {
    setContactsVisible(true);
    setMainContextVisible(false);
    setMyWorksVisible(false);
  };
  const setVisibilityMainContextHandler = () => {
    setContactsVisible(false);
    setMainContextVisible(true);
    setMyWorksVisible(false);
  };
  const setVisibilityMyWorksHandler = () => {
    setContactsVisible(false);
    setMainContextVisible(false);
    setMyWorksVisible(true);
  };
  const setModalVisibilityHandler = () => {
    setModalVisible(true);
    if (isModalVisible) {
      setModalVisible(false);
    }

  }
  return (
    <BrowserRouter>

      <React.Fragment>
        {isModalVisible && <ModalWindow setModalVisible={setModalVisibilityHandler} />}
        <Header
          setContactsVisible={setVisibilityContactsHandler}
          setMainContextVisible={setVisibilityMainContextHandler}
          setMyWorksVisible={setVisibilityMyWorksHandler}
        />
        <Routes>
          <Route path="/" element={isMainContextVisible && <MainContent />} />
          <Route path="contacts" element={isContactsVisible && <Contacts setModalVisible={setModalVisibilityHandler} />} />
          <Route path="works" element={isMyWorksVisible && <MyWorks />} />
        </Routes>
        <Footer setModalVisible={setModalVisibilityHandler} />
      </React.Fragment>

    </BrowserRouter>
  );
}

export default App;
