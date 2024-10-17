import styles from "./MainContent.module.scss";
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
        <div className={styles.img}>
            <img
              src="me.jpg"
              alt="imageFinger"
            />
          </div>
      </div>
    </main>
  );
};
export default MainContent;
