import React from "react";
import Img from './Images/cateringimg.jpg';
import Img1 from './Images/vegcatering.jpg';
import Img2 from './Images/burger.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

function Myvertical(props) {
console.log(props);
  return (
    <Modal
      show={props.modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Order Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <center>
        <h2 style={{ color: "green" }}>Order placed sucsessfully!!!!</h2>
        </center>
        
              </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Catering=()=>{
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
  
 const handleClose1 = () =>{ 
  console.log("exec");
    setShow(false);
    setModalShow(true);
  }

  const handleClose = () =>{ 
    console.log("close");
    setShow(false);
  }
  const handleShow = () => setShow(true);

  
    return(
        <div>
            <Card className="bg-dark text-white">
      <Card.Img src={Img2} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><h2><center>Catering</center></h2></Card.Title>
        <Container>
      <Row>
        <Col md={4}><Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="171x180"
        src={Img1}
      />
      <Figure.Caption>
      <h1 style={{ color: "white" }}>Veg Catering(Available prior one day)</h1>
        <h3>
        <Button variant="primary" onClick={handleShow}>
        Order now
      </Button>
      </h3>
      </Figure.Caption>
    </Figure>
      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Catering Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to confirm your order!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Place order
          </Button>
      </Modal.Footer>
      </Modal>
      <Myvertical
        modalShow={modalShow} onHide={() => setModalShow(false)}
      />
       
      </Col>
    </Row>
    <Row>
        <Col md={4}><Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="171x180"
        src={Img}
      />
      <Figure.Caption>
        <h1 style={{ color: "white" }}>Non-Veg Catering(Available prior 2 days)</h1>
        <h3>
        <Button variant="primary" onClick={handleShow}>
        Order now
      </Button>


      
        </h3>
      </Figure.Caption>
    </Figure>

        </Col>
        </Row>
      </Container>
      </Card.ImgOverlay>
    </Card>
       
       
       </div>
    )}
    export default Catering;
    