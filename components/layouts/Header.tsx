import React from "react";
import styles from "./Header.module.scss";
import { Nav, Row, Col, Container } from "react-bootstrap";
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
const Header = () => {
  const navigate = useNavigate();
  const setVisbilityContactsHandler = () => {
    navigate('/contacts', { replace: false })
  }
  const setVisbilityMainContextHandler = () => {
    navigate('/', { replace: false })
  }
  const setVisibilityMyWorksHandler = () => {
    navigate('/works', { replace: false })
  }
  const setVisibilityFAQ = () => {
    navigate('/FAQ', { replace: false })
  }
  return (
    <React.Fragment>
      <header className={styles.header}>
        <Container>
          <Row >
            <Col className={styles.imgLogo}>
              <div className={styles.logo}></div>
            </Col>
            <Col className={styles.h1}><h1>Художник Ксения</h1></Col>
          </Row>
        </Container>
        <Navbar expand="lg" className={styles.navbar} >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav fill variant="pills">
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
