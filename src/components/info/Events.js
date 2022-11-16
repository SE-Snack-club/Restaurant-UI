import React from "react";
import Img25 from './Images/events.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";
import { useEffect } from "react";
import Loader from '../loader/Loader';
import ErrorDisplayComp from '../common/errordisplaycomp/ErrorDisplayComp';
import { Alert } from "react-bootstrap";
//import './Menu.css';
const Events = () => {
  // navigate('/info/Events/Register1');
  let navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState(false);
  const [viewMembersShow, setViewMembersShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [menuData, setMenuData] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [pagesNum, setPagesNum] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [noOfPeople, setNoOfPeople] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState("");
  const [eventId, setEventId] = useState("");
  const [selectedEvent, setSelectedEvent] = useState({});
  const [successMessage, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const Addevent12 = () => {
    navigate('/addEvent');
  }

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
    setViewMembersShow(false)
    setValidated(false);
    //service call
    let reqObj = {
      eventId,
      firstName,
      lastName,
      noOfPeople,
      emailAddress,
      dateOfEvent
    }

    axios.put(`${process.env.REACT_APP_API_URL}/events/updateCusotmerDetails`, reqObj, {
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
        centered>
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
    setShow(false);
    setViewMembersShow(false)
  }
  const registerModelBtnEvent = () => {
    console.log("close");
    setModalShow(true)
    setShow(false);
    setViewMembersShow(false)
  }


  //   const getPagesCount=async()=>{
  //     try{
  //     let countRes = await axios.get(`${process.env.REACT_APP_API_URL}/menu/itemCount`);////////////
  //     setPagesNum(countRes.data.count);
  // }catch(e){
  //     setPagesNum(0);
  // }
  //   }

  useEffect(
    () => {
      const login_details = JSON.parse(localStorage.getItem('user') || "{}");
      if(login_details['userId'])
        setUserId(login_details["userId"])
      else {
        navigate('/login') 
        return
      }
      console.log(login_details)
      setMenuData(null);
      const getEvents = async () => {
        try {
          let resp = await axios.post(`${process.env.REACT_APP_API_URL}/events/getEventByName`, {
            pageNum: activePage
          });
          setMenuData(resp.data);
          setError(false);
        }
        catch (err) {
          console.log(err.response.data.message);
          setError(true);
        }
      }
      getPagesCount();
      getEvents();

    }, [activePage]);

  const getPagesCount = async () => {
    try {
      let countRes = await axios.get(`${process.env.REACT_APP_API_URL}/events/eventCount`);
      setPagesNum(countRes.data.count);
    } catch (e) {
      setPagesNum(0);
    }
  }

  const getThatPage = (number) => {
    console.log(parseInt(number.target.innerText));
    let pageNo = parseInt(number.target.innerText);
    setActivePage(pageNo);
  }

  let events = [];
  for (let number = 0; number <= pagesNum - 1; number++) {
    events.push(
      <Pagination.Item key={number} onClick={(e) => { getThatPage(e) }} active={number === activePage}>
        {number}
      </Pagination.Item>,
    );
  }

  const onAddNewEvent = (e) => {
    e.preventDefault();
    navigate('/addEvent');
  }

  function utfDecodeString(array) {
    return btoa(
      array.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
  }
  // const handleAddTocart = (item_Id) => {
  //   console.log(item_Id, "selected");
  // }
  return (
    <div style={{ backgroundImage: `url(${Img25})` }} >
      <Container>
        <div>
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
                    <Form.Label>No of People</Form.Label>
                    <Form.Control type="text" required value={noOfPeople}
                      onChange={(e) => { setNoOfPeople(e.target.value) }} />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid numder.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>G-mail</Form.Label>
                    <Form.Control type="text" placeholder="enter email" required value={emailAddress}
                      onChange={(e) => { setEmailAddress(e.target.value) }} />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid mail.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Row} md="10" controlId="validationCustom04">
                    <Form.Label>
                      Date of event
                    </Form.Label>
                    <Form.Control type="date" value={dateOfEvent} onChange={(e) => { setDateOfEvent(e.target.value) }} required />
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
                {/* onClick={handleClose1} */}
                <Button type="submit" >Register</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
              </Form>
            </Modal.Body>

          </Modal>
          <Myvertical
            modalShow={modalShow} onHide={() => { setModalShow(false); }}
          />
          <Modal show={viewMembersShow} >
            <Modal.Header closeButton onClick= {e => setViewMembersShow(false)}>
              <Modal.Title>Members</Modal.Title>
            </Modal.Header>
            <Modal.Body>                               
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>No:Of People</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {selectedEvent["customerDetails"] && selectedEvent["customerDetails"].length > 0 ? (
        selectedEvent["customerDetails"].map((n, i) => (
        <tr key={i}>
          <td>{i+1}</td>
          <td>{n.firstName +' '+n.lastName}</td>
          <td>{n.noOfPeople}</td>
          <td>{n.emailAddress}</td>
        </tr>
        ))):""}
      </tbody>
    </Table>
            </Modal.Body>

          </Modal>         
        </div>

      </Container>
      {(error === true) ? <Container>
        <Row>
          <Col>
            <ErrorDisplayComp />
          </Col>
        </Row>
      </Container> : null
      }

      <Container className='mt-2'>
        <Row>
          <Col>
            {(successMessage === true) ? <Alert variant="info">Event added sucsessfully!!!</Alert> : null}
            {(errorMsg === true) ? <Alert variant="warning">Adding an event failed try again!!!</Alert> : null}
          </Col>
        </Row>
      </Container>

      <Container className='mt-3'>
        <Row  >
          {
            (menuData && menuData.length > 0) ?

              menuData.map(eachEvent => {
                console.log("exe");

                return (
                  <Col className='mb-3 card-group' xs={12} lg={3} md={6} key={eachEvent.eventId}>
                    <Card border="info"  >
                      <div className='bg-image hover-zoom'>
                        <Card.Img height={200} variant="top" src={eachEvent.eventImage} />
                      </div>
                      <Card.Body>
                        <Card.Title>{eachEvent.eventName}</Card.Title>
                        <Card.Text>
                          {eachEvent.eventDescription}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className='remove-footer-prop'>
                        <Button variant="primary" onClick={(e) => { (userId.length==0)?(navigate('/login')):(setShow(true)); setEventId(eachEvent.eventId) }}>
                          Register
                        </Button>                         
                       { (eachEvent['userId'] && userId == eachEvent['userId']) ?
                        (<Button className="ms-2" variant="primary" onClick={(e) => { (userId.length==0)?(navigate('/login')):(setViewMembersShow(true)); setSelectedEvent(eachEvent) }}>
                          View
                        </Button>):("")
                        }                     
                      </Card.Footer>
                    </Card>
                  </Col>
                )
              })
              : <Loader />}
        </Row>
      </Container>
      <Button className="mb-2" onClick={onAddNewEvent} variant="primary" size="lg">Add an event</Button>

    </div>
  )
}
export default Events;