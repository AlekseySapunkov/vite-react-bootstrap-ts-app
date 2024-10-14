import styles from "./MainContent.module.css";
const MainContent = (props: any) => {
  return (
    <main className={styles.main}>
      <div className={styles.introduction}>
        <div className={styles.textAboutMe}>
          <h1>Коротко обо мне</h1>
          <p>
            Привет! Меня зовут Ксения Сидорова.
            <br /> Я - художница и муза, а также путешественница, арт-персона.{" "}
            <br />
            Создаю произведения искусства, вдохновляю людей, двигаюсь в потоке
            жизни.
            <br /> Пою, танцую, играю, рисую.
          </p>
        </div>
        <div className={styles.selfie}></div>
      </div>
      <h1>Мои работы</h1>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <div title="image" className={styles.img1}></div>
        </div>
        <div className={styles.img}>
          <div title="image" className={styles.img3}></div>
        </div>
        <div className={styles.img}>
          <div title="image" className={styles.img1}></div>
        </div>
        <div className={styles.img}>
          <div title="image" className={styles.img3}></div>
        </div>
        <div className={styles.img}>
          <img
            src="../../assets/0531a6747575cf83165d312cc1b5f313.jpg"
            alt="imageFinger"
          />
        </div>
      </div>
    </main>
  );
};
export default MainContent;
