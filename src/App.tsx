import "../styles/index.scss";
import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import MainContent from "../components/layouts/MainContent";
import Contacts from "../components/nav/Contacts";
import MyWorks from "../components/nav/MyWorks";
import ModalWindow from "../components/UI/ModalWindow";
import FAQ from "../components/nav/FAQ"
import NotFound from "../components/layouts/NotFound"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const setModalVisibilityHandler = () => {
    setModalVisible(true);
    if (isModalVisible) {
      setModalVisible(false);
    }

  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<NotFound />} /> // empty ""
        <Route path="*" element={<NotFound />} /> // star *
        <Route element={<NotFound />} /> // without path
      </Routes>
      <React.Fragment>

        {isModalVisible && <ModalWindow setModalVisible={setModalVisibilityHandler} />}
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="contacts" element={<Contacts setModalVisible={setModalVisibilityHandler} />} />
          <Route path="works" element={<MyWorks />} />
          <Route path="faq" element={<FAQ />} />

        </Routes>
        <Footer setModalVisible={setModalVisibilityHandler} />
      </React.Fragment>

    </BrowserRouter>
  );
}

export default App;
