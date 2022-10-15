import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

const Addevent = () => {

  const [validated, setValidated] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [successMessage,setSuccessMsg] = useState(false);
  const [errorMsg,setErrorMsg] = useState(false);

  // const API_URL = "http://localhost:1111/menu/insertItem";

  const onSubmitItem = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    else {
      setSuccessMsg(false);
      setErrorMsg(false);
      
      // let reqObj = {
      //   eventName,
      //   eventDescription,
      //   eventImage,
      // }

    //   axios.post(`${process.env.REACT_APP_API_URL}/menu/insertItem`, reqObj, {
    //     headers: { "Content-Type": "multipart/form-data" }
    //   }).then(
    //     res => {
    //       console.log(res);
    //       setSuccessMsg(true);
    //     }
    //   ).catch(err => {
    //     console.log(err);
    //     setErrorMsg(true);
    //   })
    }
    setValidated(true);
  }

  return (
    <>
    <Container className='d-flex justify-content-center mt-3'>
    <Row>
    <Col> <h2> Add an Event </h2></Col>
    
    </Row>
    </Container>
      <Container className='mt-3'>
        <Form noValidate validated={validated} onSubmit={onSubmitItem}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Event Name"
                value={itemName}
                onChange={(e) => { setItemName(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">Event name is required</Form.Control.Feedback>
            </Form.Group>

          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Event Description</Form.Label>
              <Form.Control as="textarea"
                required
                type="text"
                placeholder="Event Description"
                value={itemDescription}
                onChange={(e) => { setItemDescription(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">Please enter event Description</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="eventImage"

             // onChange={(e) => { setItemImagePath(e.target.files[0]) }}

            />
            <Form.Control.Feedback type="invalid" tooltip>
              Upload the image
            </Form.Control.Feedback>
          </Form.Group>



          <Button type="submit">Add an Event</Button>
        </Form>


      </Container>

      <Container className='mt-2'>
      <Row>
      <Col>
      {(successMessage===true)?<Alert  variant="info">Event added sucsessfully!!!</Alert>:null}
      {(errorMsg===true)?<Alert  variant="warning">Adding an event failed try again!!!</Alert>:null}
      </Col>
      </Row>
      </Container>


    </>
  )
}

export default Addevent;