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
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const Catering = () => {
  let navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [cateringType, setCateringType] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  //const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [dateOfCatering, setDateOfCatering] = useState("");
  const [noOfPeople, setNoOfPeople] = useState("");
  const [userVegOrders, setUserVegOrders] = useState([]);
  const [userNonVegOrders, setUserNonVegOrders] = useState([]);
  //const [cateringId, setCateringId] = useState("");
  const [successMessage, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [viewMembersShow, setViewMembersShow] = useState(false);

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
    //setValidated(true);
    //service call
    // cateringId,
    let reqObj = {
      userId,
      cateringType,
      firstName,
      lastName,
      address,
      zip,
      emailAddress,
      dateOfCatering,
      noOfPeople
    }

    axios.put(`${process.env.REACT_APP_API_URL}/catering/addOrder`, reqObj, {
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
  useEffect(
    () => {
      const login_details = JSON.parse(localStorage.getItem('user') || "{}");
      if(login_details['userId'])
        setUserId(login_details["userId"])
      else {
        navigate('/login') 
        return
      }
      getUserOrders(login_details["userId"])
    },[])   
    const getUserOrders = async (user_id) => {
      try {
        let resp = await axios.post(`${process.env.REACT_APP_API_URL}/catering/getUserOrderDetails`, {
          "userId":user_id
        });
        setUserVegOrders(resp.data.filter(f => f["cateringType"]==1));        
        setUserNonVegOrders(resp.data.filter(f => f["cateringType"]==2));
        // console.log(userVegOrders,userNonVegOrders)
      }
      catch (err) {
        console.log(err.response.data.message);
        setErrorMsg(true);
      }
    }

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

  const handleClose1 = () => {
    console.log("exec");
    setShow(false);
    setModalShow(true);
  }
  const handleClose1111 = () => {
    setModalShow(false);
  }
  const handleClose = () => {
    console.log("close");
    //setShow(false);

    setShow(false); ////
  }
  const handleShow = (type) => {
    setCateringType(type)
    setShow(true);
  }
  ///

  return (
    <div style={{ backgroundImage: `url(${Img2})` }}>
      <Container>
        <div>

          <Modal show={show} >
            <Modal.Header closeButton onClick={handleClose}>
              <Modal.Title>Catering Confirmation</Modal.Title>
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
                      required
                      value={dateOfCatering}
                      onChange={(e) => { setDateOfCatering(e.target.value) }}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>No of People</Form.Label>
                    <Form.Control type="text" required value={noOfPeople}
                      onChange={(e) => { setNoOfPeople(e.target.value) }} />
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
            modalShow={modalShow} onHide={() => { setModalShow(false); }}
          />
           <Modal  size="lg" show={viewMembersShow} >
            <Modal.Header closeButton onClick= {e => setViewMembersShow(false)}>
              <Modal.Title>Order Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>                               
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th> 
          <th>Address</th>         
          <th>Email</th>
          <th>No:Of People</th>
          <th>Order Dt</th>
        </tr>
      </thead>
      <tbody>
      {userVegOrders.length > 0 && cateringType == 1 ? (
        userVegOrders.map((n, i) => (
        <tr key={i}>
          <td>{i+1}</td>
          <td>{n['details'].firstName +' '+n['details'].lastName}</td>          
          <td>{n['details'].address}</td>
          <td>{n['details'].emailAddress}</td>
          <td>{n['details'].noOfPeople}</td>
          <td>{n['details'].dateOfCatering}</td>
        </tr>
        ))):""}
         {userNonVegOrders.length > 0 && cateringType == 2 ? (
        userNonVegOrders.map((n, i) => (
        <tr key={i}>
          <td>{i+1}</td>
          <td>{n['details'].firstName +' '+n['details'].lastName}</td>
          <td>{n['details'].address}</td>
          <td>{n['details'].emailAddress}</td>
          <td>{n['details'].noOfPeople}</td>
          <td>{n['details'].dateOfCatering}</td>
        </tr>
        ))):""}
      </tbody>
    </Table>
            </Modal.Body>

          </Modal> 
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
                    <Button variant="primary" onClick={() => { handleShow(1); }}>
                      Order now
                    </Button>
                    { (userVegOrders.length>0) ?
                        (<Button className="ms-2" variant="primary" onClick={(e) => { setCateringType(1);setViewMembersShow(true);}}>
                          View
                        </Button>):("")
                        }
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
                    <Button variant="primary" onClick={() => { handleShow(2); }}>
                      Order now
                    </Button>
                    { (userNonVegOrders.length>0) ?
                        (<Button className="ms-2" variant="primary" onClick={(e) => { setCateringType(2);setViewMembersShow(true);}}>
                          View
                        </Button>):("")
                        }
                  </h3>
                </Figure.Caption>
              </Figure>
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default Catering;
