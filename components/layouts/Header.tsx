import React from "react";
import styles from "./Header.module.scss";
import { Nav } from "react-bootstrap";
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
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
  const setVisibilityFAQ = (event: any) => {
    navigate('/FAQ', { replace: false })
  }
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.logoAndIntro}>
          <div className={styles.logo}></div>
          <h1>Художник Ксения</h1>
        </div>
        <Navbar expand="lg" className={styles.navbar}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center" variant="tabs">
              <Nav.Item>
                <Nav.Link href="/" className={styles.navLink} onClick={setVisbilityMainContextHandler}>Главное меню</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="works" className={styles.navLink} onClick={setVisibilityMyWorksHandler}>Мои работы</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="contacts" onClick={setVisbilityContactsHandler} className={styles.navLink}>Контакты для связи</Nav.Link>
              </Nav.Item>
              <Nav.Item><Nav.Link href="faq" onClick={setVisibilityFAQ} className={styles.navLink}>FAQ</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Outlet />
    </React.Fragment>
  );
};
export default Header;
