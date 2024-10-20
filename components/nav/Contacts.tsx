import { Button } from "react-bootstrap"
import { Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
const Contacts=(props:any)=>{
    const openModal = () =>{
        props.setModalVisible();
    }
    return (

            <Container fluid style={{padding:"30px"}}>
                      <Row>
        <Col xs={10} md={8}>
        <Card>
            <Card.Header>Как связаться со мной</Card.Header>
            <Card.Body>
            <Card.Text>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">Instagram</a><br></br>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">Instagram</a>
            </Card.Text>
             <Button style={{background:"#0088cc", color:"white", width:"150px"}} variant="info" onClick={openModal}>Оставить заявку</Button>
            </Card.Body>
      </Card>
        </Col>
        <Col xs={6} md={4}>
        <Image src="../../public/-4.jpg" style={{height:"300px", width:"300px"}} rounded/> 
        </Col>
      </Row>         
            </Container>



    )
    
    
}
export default Contacts