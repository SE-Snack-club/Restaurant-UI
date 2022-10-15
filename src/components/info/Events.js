import React from "react";
import Img8 from './Images/bithday.jpg';
import Img25 from './Images/events.jpg';
import Img9 from './Images/marriage.jpg';
import Img6 from './Images/PartyFood.jpg';
import Img26 from './Images/newyear.png';
import Img27 from './Images/valentine.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
const Events=()=>{
   // navigate('/info/Events/Register1');
   const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);

  const [validated, setValidated] = useState(false);
  const [pagesNum,setPagesNum]= useState(0);

  let navigate001 = useNavigate();
  const Addevent12 = () => {
    navigate001('/addEvent');
}
  //let navigate = useNavigate();
  const Birthday12 = () => {
  setShow(true)
  }

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
  

  const getPagesCount=async()=>{
    try{
    let countRes = await axios.get(`${process.env.REACT_APP_API_URL}/menu/itemCount`);////////////
    setPagesNum(countRes.data.count);
}catch(e){
    setPagesNum(0);
}
}

const getThatPage = (number) => {
  console.log(parseInt(number.target.innerText));
  let pageNo = parseInt(number.target.innerText);
  setActivePage(pageNo);
}

let events = [];
for (let number = 0; number <= pagesNum-1; number++) {
  events.push(
      <Pagination.Item key={number} onClick={(e) => { getThatPage(e) }} active={number === activePage}>
          {number}
      </Pagination.Item>,
  );
}

const onAddNewEvent = (e) => {
  e.preventDefault();
  console.log("clicked me");
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


  
    return(
        <div style={{ backgroundImage: `url(${Img25})`} } >
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
      {/* onClick={handleClose1} */}
      <Button type="submit"  >Register</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          </Form>
        </Modal.Body>
  
      </Modal>
      <Myvertical
        modalShow={modalShow} onHide={() => setModalShow(false)}
      />
      </div>
  
          </Container>

          
          <Container className='mt-3'>
            <Row>
                {
                    (menuData && menuData.length > 0) ?

                        menuData.map(eachEvent => {
                            console.log("exe");
                            const base64String = utfDecodeString(eachItem.eventImage.data.data);
                            return (
                                <Col className='mb-3' xs={12} lg={3} md={6} key={eachEvent.eventId}>
                                    <Card border="info" >
                                        <Card.Img height={200} variant="top" src={`data:image/png;base64,${base64String}`} />
                                        <Card.Body>
                                            <Card.Title>{eachEvent.eventName}</Card.Title>
                                            <Card.Text>
                                                {eachEvent.eventDescription}
                                            </Card.Text>
                    
                                            <Button variant="primary" onClick={(e) => { handleAddTocart(eachEvent.eventId) }}>
                                                Add event
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                        : <Loader />}
            </Row>
        </Container>
        <Container className='d-flex justify-content-center'>
            <Row>
                <Col>
                    <Pagination>{items}</Pagination>
                </Col>
            </Row>
        </Container>
      
    <Button onClick={onAddNewEvent} variant="primary" size="lg">Add an event</Button> 
    
        </div>
    )}
    export default Events;