import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
const ModalWindow = (props:any) =>{
    const [show, setShow] = useState(true);
    const [dropdownTitle, setName] = useState('Варианты');
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event:any) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };
    const handleClose = () =>{
     setShow(false); 
     props.setModalVisible()
    } 
    const changeDropdownText = (event:any) =>{
      event.preventDefault();
      setName(event.target.title)

    }
    return(
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Заказ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Адрес почты</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
              Пожалуйста напишите корректный e-mail
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Иванов Иван"
                required
              />
              <Form.Control.Feedback type="invalid">
              Пожалуйста напишите корректное имя
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Телефон</Form.Label>
              <Form.Control
                type="tel"
                placeholder="89345678789"
                required
              />
              <Form.Control.Feedback type="invalid">
              Пожалуйста напишите корректный Телефон
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
             <Form.Label>Вариант заказа</Form.Label>
             <DropdownButton id="dropdown-item-button" title={dropdownTitle} autoClose>
              <Dropdown.ItemText>Выберите нужное</Dropdown.ItemText>
              <Dropdown.Divider />
              <Dropdown.Item as="button" title="CG" onClick={changeDropdownText}>CG</Dropdown.Item>
              <Dropdown.Item as="button" title="Мастерклассы" onClick={changeDropdownText}>Мастерклассы</Dropdown.Item>
              <Dropdown.Item as="button" title="Картина маслом" onClick={changeDropdownText}>Картина маслом</Dropdown.Item>
             </DropdownButton> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Опишите ваши пожелания к работе</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3">
        <Form.Check
          required
          label="Выражаю согласие с тем что мои данные будут обработаны сторонним лицом "
          feedback="Поставьте галочку если согласны "
          feedbackType="invalid"
        />
      </Form.Group>
          <Button variant="primary" type="submit">
            Отправить форму
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
    )
} 
export default ModalWindow;