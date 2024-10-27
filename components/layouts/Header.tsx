import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Nav } from "react-bootstrap";
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Navbar, NavDropdown } from "react-bootstrap";
const Header = (props: any) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
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
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <Nav className="justify-content-center" variant="tabs" >
          <Nav.Item>
            <Nav.Link href="/" className={styles.navLink} onClick={setVisbilityMainContextHandler}>Главное меню</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="works" className={styles.navLink} onClick={setVisibilityMyWorksHandler}>Мои работы</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="contacts" onClick={setVisbilityContactsHandler} className={styles.navLink}>Контакты для связи</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="faq" onClick={setVisibilityFAQ} className={styles.navLink}>FAQ</Nav.Link>
          </Nav.Item>
        </Nav> */}
      </header>
      <Outlet />
    </React.Fragment>
  );
};
export default Header;
