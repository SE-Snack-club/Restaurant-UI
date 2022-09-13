import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'
import  Container  from 'react-bootstrap/Container';
import './Register.css';


const Register=()=>{
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return(<>
    <Container className="center-items">
    
    <h2>Please enter the below details to register</h2>
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
      
      <Form.Group as={Row} className="mb-3">
      <Col lg={{span:1,offset:4}}>
        <Form.Label>
          First name
        </Form.Label>
        </Col>
        <Col lg={{span:3}}>
          <Form.Control type="text" required/>
      </Col>
      </Form.Group>
    
        
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastName">
      <Col lg={{span:1,offset:4}}>
        <Form.Label>
          Last name
        </Form.Label>
        </Col>
        <Col lg={{span:3}}>
          <Form.Control type="text" required/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Col lg={{span:1,offset:4}}>
        <Form.Label>
          Email
        </Form.Label>
        </Col>
        <Col lg={{span:3}}>
          <Form.Control type="email" required/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhone">
      <Col lg={{span:1,offset:4}}>
        <Form.Label >
          Phone
        </Form.Label>
        </Col>
        <Col lg={{span:3}}>
        <Form.Control type="text" required/>
        </Col>
      </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalUsername">
        <Col lg={{span:1,offset:4}}>
        <Form.Label>
          Username
        </Form.Label>
        </Col>
        <Col lg={{span:3}}>
          <Form.Control type="text" required/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
      <Col lg={{span:1,offset:4}}>
        <Form.Label>
          Password
        </Form.Label>
        </Col>
        <Col lg={{span:3}}>
          <Form.Control type="password" required/>
        </Col>
      </Form.Group>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="validationCustom06" lg={{span:3,offset:4}}>
      <Form.Label>Address</Form.Label>
        <Form.Control type="text" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom03" lg={{span:1}}>
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Zip.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom05" lg={{span:2,offset:4}}>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom04" lg={{span:2}}>
          <Form.Label>State</Form.Label>
          <Form.Control type="text" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} className="mb-3" lg={{span:4,offset:4}}>
        <Form.Check 
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
    
    </Container>
        </>)
}

export default Register;