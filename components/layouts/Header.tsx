import React from "react";
import styles from "./Header.module.scss";
import {  Nav } from "react-bootstrap";
const Header = (props:any) => {

  const setVisbilityContactsHandler = (event:any) =>{
    event.preventDefault()
    props.setContactsVisible()
  }
  const setVisbilityMainContextHandler = (event:any) =>{
    event.preventDefault()
    props.setMainContextVisible()
  }
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.logoAndIntro}>
          <div className={styles.logo}></div>
          <h1>Художник Ксения</h1>
        </div>
        <Nav className="justify-content-center" variant="tabs" defaultActiveKey="#home">
        <Nav.Item>
            <Nav.Link href="#home" className={styles.navLink} onClick={setVisbilityMainContextHandler}>Главное меню</Nav.Link>
        </Nav.Item>
            <Nav.Link href="#works" className={styles.navLink}>Мои работы</Nav.Link>
            <Nav.Link href="#contacts" onClick={setVisbilityContactsHandler} className={styles.navLink}>Контакты для связи</Nav.Link>
          </Nav>
      </header>
    </React.Fragment>
  );
};
export default Header;
