import "../styles/index.scss";
import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import MainContent from "../components/layouts/MainContent";
import Contacts from "../components/nav/Contacts";

function App() {
  const [isContactsVisible, setContactsVisible] = useState(false);
  const [isMainContextVisible, setMainContextVisible] = useState(true);
  const setVisibilityContactsHandler = () => {
    setContactsVisible(true);
    setMainContextVisible(false);
  };
  const setVisibilityMainContextHandler = () => {
    setContactsVisible(false);
    setMainContextVisible(true);
  };
  return (
    <div>
      <Header
        setContactsVisible={setVisibilityContactsHandler}
        setMainContextVisible={setVisibilityMainContextHandler}
      />
      {isContactsVisible && <Contacts />}
      {isMainContextVisible && <MainContent />}
      <Footer />
    </div>
  );
}

export default App;
