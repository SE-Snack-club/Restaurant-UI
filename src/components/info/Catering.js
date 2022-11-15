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
import Form from 'react-bootstrap/Form';
import axios from "axios";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Catering=()=>{
    const [show, setShow] = useState(false);
    //const [show1, setShow1] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
 // const [city, setCity] = useState("");
  //const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [dateOfCatering,setDateOfCatering]=useState("");
  const [noOfPeople, setNoOfPeople] = useState("");
  //const [cateringId, setCateringId] = useState("");
  const [successMessage,setSuccessMsg] = useState(false);
  const [errorMsg,setErrorMsg] = useState(false);
  const form1 = useRef();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    event.preventDefault();
      event.stopPropagation();
    setModalShow(true)
    setShow(false)
    setValidated(false);
    //e.preventDefault();
    

  emailjs.sendForm('service_2q5l8jm', 'template_ge4ye3t', form1.current, 'EuSP_B78ueus2csuI')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    //setValidated(true);
    //service call
   // cateringId,
  let reqObj = {
    firstName,
    lastName,
    address,
    zip,
    emailAddress,
    dateOfCatering,
    noOfPeople

  }

  axios.put(`${process.env.REACT_APP_API_URL}/catering/updateCusotmerDetails`, reqObj, {
    headers: { "Content-Type": "application/json" }
  }).then(
    res => {
      console.log(res);
     setSuccessMsg(true);
    }
  ).catch(err => {
    console.log(err);
    setErrorMsg(true);
  })
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
              <h3 style={{ color: "green" }}>Order placed sucsessfully!!!!</h3>
              </center>
              
                    </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      
//  const handleClose1 = () =>{ 
//   console.log("exec");
//     setShow(false);
//     setModalShow(true);
//   }
  const handleClose1111 = () =>{ 
      setModalShow(false);
    }
  const handleClose = () =>{ 
    console.log("close");
    //setShow(false);
    
    setShow(false); ////
  }
  const handleShow = () => setShow(true);
///


    return(
        <div style={{ backgroundImage: `url(${Img2})`} }>
          <Container>
          <div>

<Modal show={show} >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Catering Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
  <Form ref={form1} noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="firstname"
            placeholder="First name"
            value={firstName}
            onChange={(e) => { setFirstName(e.target.value) }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name="lastname"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => { setLastName(e.target.value) }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" 
          name="address"
          placeholder="Address" 
          required 
          value={address}
            onChange={(e) => { setAddress(e.target.value) }}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" 
          name="zip"
          placeholder="Zip" 
          required 
          value={zip}
            onChange={(e) => { setZip(e.target.value) }}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>E-mail Address</Form.Label>
          <Form.Control type="text" 
          placeholder="E-mail Address"
           required 
           name="email"
           value={emailAddress}
            onChange={(e) => { setEmailAddress(e.target.value) }}
           />
          <Form.Control.Feedback type="invalid">
            Please provide a valid E-mail address.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
      <Row>
      <Form.Group as={Row} md="10" controlId="validationCustom04">
        <Form.Label>
          Date of Catering
        </Form.Label>
          <Form.Control type="date"  
          name="date"
          required
          value={dateOfCatering } 
          onChange={(e) => { setDateOfCatering(e.target.value) }}
          />
      </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>No of People</Form.Label>
          <Form.Control type="text"  
          name="people"
          required value={noOfPeople}
            onChange={(e) => { setNoOfPeople(e.target.value) }}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid numder.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" >Place Order</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
    </Form>
    </Modal.Body>
  
      </Modal>

      <Myvertical
        modalShow={modalShow} onHide={() => {setModalShow(false);}}
      />
      </div>
  
          </Container>




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
      <h3 style={{ color: "white" }}>Veg Catering </h3>
        <h3>
        <Button variant="primary" onClick={handleShow}>
        Order now
      </Button>
      </h3>
      </Figure.Caption>
    </Figure>
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
        <h3 style={{ color: "white" }}>Non-Veg Catering</h3>
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
    