import "../styles/index.scss";
import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import MainContent from "../components/layouts/MainContent";
import Contacts from "../components/nav/Contacts";
import MyWorks from "../components/nav/MyWorks";

function App() {
  const [isContactsVisible, setContactsVisible] = useState(false);
  const [isMainContextVisible, setMainContextVisible] = useState(true);
  const [isMyWorksVisible, setMyWorksVisible] = useState(false);
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
  return (
    <div>
      <Header
        setContactsVisible={setVisibilityContactsHandler}
        setMainContextVisible={setVisibilityMainContextHandler}
        setMyWorksVisible={setVisibilityMyWorksHandler}
      />
      {isContactsVisible && <Contacts />}
      {isMainContextVisible && <MainContent />}
      {isMyWorksVisible && <MyWorks />}
      <Footer />
    </div>
  );
}

export default App;
