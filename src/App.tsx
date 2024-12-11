import "../styles/index.scss";
import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import MainContent from "../components/layouts/MainContent";
import Contacts from "../components/nav/Contacts";
import MyWorks from "../components/nav/MyWorks";
import ModalWindow from "../components/UI/ModalWindow";
import FAQ from "../components/nav/FAQ";
import NotFound from "../components/layouts/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [state, setState] = useState(null);

  const callBackendAPI = async () => {
    const connectionResponse = await fetch("http://localhost:5100/express_backend");
    const body = await connectionResponse.json();
    if (connectionResponse.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  // получение GET маршрута с сервера Express, который соответствует GET из index.js
  useEffect(() => {
    callBackendAPI()
      .then((res) => setState(res.express))
      .catch((err) => console.log(err));
  }, []);
  const [isModalVisible, setModalVisible] = useState(false);
  const setModalVisibilityHandler = () => {
    setModalVisible(true);
    if (isModalVisible) {
      setModalVisible(false);
    }
  };
  return (
    <BrowserRouter>
      <React.Fragment>
        {isModalVisible && (
          <ModalWindow setModalVisible={setModalVisibilityHandler} />
        )}
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} /> // star *
          <Route element={<NotFound />} /> // without path
          <Route path="/" element={<MainContent />} />
          <Route
            path="contacts"
            element={<Contacts setModalVisible={setModalVisibilityHandler} />}
          />
          <Route path="works" element={<MyWorks />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
        <Footer setModalVisible={setModalVisibilityHandler} />
        <div>{state}</div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
