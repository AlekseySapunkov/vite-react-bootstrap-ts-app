import { Button } from "react-bootstrap"
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import styles from "./Contacts.module.scss"
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
const Contacts = (props: any) => {
  const openModal = () => {
    props.setModalVisible();
  }
  return (

    <Container fluid style={{ padding: "30px" }}>
      <Row>
        <Col lg={true} className={styles.card}>
          <Card className="text-center">
            <Card.Header>Как связаться со мной</Card.Header>
            <Card.Body>
              <Card.Text>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">Instagram</a><br></br>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">Instagram</a>
              </Card.Text>
              <Button style={{ background: "#0088cc", color: "white", width: "150px", marginTop: "10px" }} variant="info" onClick={openModal}>Оставить заявку</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={true}>
          <div className={styles.map}>
            <YMaps>
              <Map defaultState={{ center: [41.887064, 12.504809], zoom: 9 }} width={"auto"}>
                <Placemark geometry={[41.887064, 12.504809]} />
              </Map>
            </YMaps>
          </div>
        </Col>
      </Row>
    </Container>



  )


}
export default Contacts