import styles from "./Footer.module.scss"
const Footer = () =>{
    return  <footer className={styles.footer}>
    <div className={styles.container}>
     <div className={styles.row}>
       <div className={styles['footer-col']}>
         <h4>Я и мои работы</h4>
         <ul>
           <li><a href="#">Обо мне</a></li>
           <li><a href="#">Мои услуги</a></li>
           <li><a href="#">Примеры работ</a></li>
         </ul>
       </div>
       <div className={styles['footer-col']}>
         <h4>Помощь</h4>
         <ul>
           <li><a href="#">FAQ</a></li>
           <li><a href="#">Покупка</a></li>
           <li><a href="#">Статус товара</a></li>
           <li><a href="#">Варианты оплаты</a></li>
           <li><a href="#">Скидки, промоакции</a></li>
         </ul>
       </div>
       <div className={styles['footer-col']}>
         <h4>Магазин</h4>
         <ul>
           <li><a href="#">Картины</a></li>
           <li><a href="#">Мастерклассы</a></li>
           <li><a href="#">CG</a></li>
         </ul>
       </div>
       <div className={styles['footer-col']}>
         <h4>Подписывайтесь и следите за новостями</h4>
         <div className={styles['social-links']}>
         <a href="https://t.me/your_name" target="_blank" title="Написать в Telegram" rel="noopener noreferrer"><i className={styles['fa fa-telegram']}></i></a>
        <a href="#" target="_blank" title="Instagram" rel="noopener noreferrer"><i className={styles['fab fa-instagram']}></i></a>
        <div className={styles['telegram-button']}></div>
         </div>
       </div>
     </div>
    </div>
 </footer>
}
export default Footer