import styles from "./Footer.module.scss"
interface FooterProps {
  setModalVisible: () => void;
}
const Footer = (props: FooterProps) => {
  const modalHandler = () => {
    props.setModalVisible();
  }
  return <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles['footer-col']}>
          <h4>Я и мои работы</h4>
          <ul>
            <li><a href="/">Обо мне</a></li>
            <li><a href="/">Мои услуги</a></li>
            <li><a href="works">Примеры работ</a></li>
          </ul>
        </div>
        <div className={styles['footer-col']}>
          <h4>Помощь</h4>
          <ul>
            <li><a href="faq">Покупка</a></li>
            <li><a href="faq">Статус товара</a></li>
            <li><a href="faq">Варианты оплаты</a></li>
            <li><a href="faq">Скидки, промоакции</a></li>
          </ul>
        </div>
        <div className={styles['footer-col']}>
          <h4>Подписывайтесь и следите за новостями</h4>
          <div className={styles['social-links']}>
            <a href="https://t.me/your_name" target="_blank" title="Написать в Telegram" rel="noopener noreferrer" id={styles.telegram}></a>
            <a href="https://www.instagram.com/" target="_blank" title="Instagram" rel="noopener noreferrer" id={styles.instagram}></a>
          </div>
          <div title="Сделать заказ" className={styles['modal-button']} onClick={modalHandler}></div>
        </div>
      </div>
    </div>
  </footer>
}
export default Footer