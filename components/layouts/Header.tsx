import React from "react";
import styles from "./Header.module.css";
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
        <nav  className='nav nav-tabs'>
          <a href="" onClick={setVisbilityMainContextHandler}>Главное меню</a>
          <a href="">Обо мне</a>
          <a href="">Мои работы</a>
          <a href="" onClick={setVisbilityContactsHandler}>Контакты для связи</a>
        </nav>
      </header>
    </React.Fragment>
  );
};
export default Header;
