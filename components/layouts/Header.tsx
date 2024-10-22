import React from "react";
import styles from "./Header.module.scss";
import { Nav } from "react-bootstrap";
import { Outlet, useNavigate } from 'react-router-dom';
const Header = (props: any) => {
  const navigate = useNavigate();
  const setVisbilityContactsHandler = (event: any) => {
    navigate('/contacts', { replace: false })
  }
  const setVisbilityMainContextHandler = (event: any) => {
    navigate('/', { replace: false })
  }
  const setVisibilityMyWorksHandler = (event: any) => {
    navigate('/works', { replace: false })
  }
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.logoAndIntro}>
          <div className={styles.logo}></div>
          <h1>Художник Ксения</h1>
        </div>
        <Nav className="justify-content-center" variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/" className={styles.navLink} onClick={setVisbilityMainContextHandler}>Главное меню</Nav.Link>
          </Nav.Item>
          <Nav.Link href="works" className={styles.navLink} onClick={setVisibilityMyWorksHandler}>Мои работы</Nav.Link>
          <Nav.Link href="contacts" onClick={setVisbilityContactsHandler} className={styles.navLink}>Контакты для связи</Nav.Link>
        </Nav>
      </header>
      <Outlet />
    </React.Fragment>
  );
};
export default Header;
