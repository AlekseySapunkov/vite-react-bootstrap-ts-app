import styles from "./MainContent.module.scss";
import { Container, Row, Col } from "react-bootstrap";
const MainContent = (props: any) => {
  return (
    <main className={styles.main}>
      <Container className={styles.introduction}>
        <Row>
          <Col className={styles.textAboutMe} xs={12} md={8}>
            <h1>Коротко обо мне</h1>
            <p>
              Привет! Меня зовут Ксения Сидорова.
              <br /> Я - художница и муза, а также путешественница, арт-персона.{" "}
              <br />
              Создаю произведения искусства, вдохновляю людей, двигаюсь в потоке
              жизни.
              <br /> Пою, танцую, играю, рисую.
            </p>
            <p>Я провожу мастер класы, рисую картины маслом <br />
              А еще я могу делать афигенные 2d и 3d изображения.
            </p>
          </Col>
          <Col className={styles.img} xs={6} md={4}>
            <img
              src="me.jpg"
              alt="Babka"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default MainContent;
