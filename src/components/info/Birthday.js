import React from "react";
import Card from 'react-bootstrap/Card';
import Img30 from './Images/good.jpg';
import { MdLabelImportant } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
const Birthday=()=>{
  const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };



    function Myvertical(props) {
  
      console.log(props);
        return (
          
          <Modal
            show={props.modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton onClick={handleClose1111}>
              <Modal.Title id="contained-modal-title-vcenter">
                Order Confirmation
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <center>
              <h3 style={{ color: "green" }}>Registration Successfull!!</h3>
              </center>
              
                    </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      
 const handleClose1 = () =>{ 
  console.log("exec");
    setShow(false);
    setModalShow(true);
  }
  const handleClose1111 = () =>{ 
      setModalShow(false);
    }
  const handleClose = () =>{ 
    console.log("close");
    setShow(false);
  }
  const handleShow = () => setShow(true);
    return(
<div>
<Card className="bg-dark text-white">
      <Card.Img src={Img30} height={675} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><center><h1 style={{color:'black', fontWeight: "bold"}}>Birthday Events Information</h1></center><br></br></Card.Title><br></br>

        <Card.Text>
<h4><p style={{color:'black'}}>
<MdLabelImportant />&nbsp;&nbsp;Your Birth Was Your Beginning,
Celebrating Is an Expression of Thanks,
It's a Great Opportunity to Bond With People....<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;So celebrate your birthday with our restuarent.<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;In our restuarent for a birthday we are offering upto 20% off on your total bill.<br></br>
<br></br><br></br>
<MdLabelImportant />&nbsp;&nbsp;We are also providing some special items for you at that event.
</p></h4>
<br>
</br>
<center>
<Button onClick={handleShow} variant="primary">Book An Event</Button>
  </center>
  <Modal show={show} >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Event Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            //defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            //defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>No of People</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid numder.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>G-mail</Form.Label>
          <Form.Control type="text" placeholder="enter email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid mail.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before registering."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" onClick={handleClose1} >Register</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          </Form>
        </Modal.Body>
  
      </Modal>
      <Myvertical
        modalShow={modalShow} onHide={() => setModalShow(false)}
      />
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
</div>
    );}
    export default Birthday;
