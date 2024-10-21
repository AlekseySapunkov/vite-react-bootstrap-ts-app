import { Button } from "react-bootstrap"
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { YMap, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer, YMapMarker } from "../tools/YandexReactify"
import styles from "./Contaxts.module.scss"
const Contacts = (props: any) => {
  const openModal = () => {
    props.setModalVisible();
  }
  return (

    <Container fluid style={{ padding: "30px" }}>
      <Row>
        <Col xs={10} md={8}>
          <Card>
            <Card.Header>Как связаться со мной</Card.Header>
            <Card.Body>
              <Card.Text>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">Instagram</a><br></br>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">Instagram</a>
              </Card.Text>
              <Button style={{ background: "#0088cc", color: "white", width: "150px" }} variant="info" onClick={openModal}>Оставить заявку</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={4}>
          <div className={styles.map}>
            <YMap location={{ center: [25.229762, 55.289311], zoom: 9 }} mode="vector">
              <YMapDefaultSchemeLayer />
              <YMapDefaultFeaturesLayer />
              <YMapMarker coordinates={[25.229762, 55.289311]} draggable={true}>
                <section>
                  <h1>You can drag this header</h1>
                </section>
              </YMapMarker>
            </YMap></div>
        </Col>
      </Row>
    </Container>



  )


}
export default Contacts