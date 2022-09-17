import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import  Container  from 'react-bootstrap/Container';
import './Login.css';

const Login=()=>{
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
    <Container className="login-center-items">
        <h1>Login</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Row>
      <Form.Group as={Col} controlId="validationCustom06" lg={{span:4,offset:4}}>
      <Form.Label>Username</Form.Label>
        <Form.Control type="text" required />
          <Form.Control.Feedback type="invalid">
            Username is required.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="validationCustom03" lg={{span:4,offset:4}}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" required />
          <Form.Control.Feedback type="invalid">
            Password is required.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
      <br/>
        <Button type="submit">Login</Button>

    </Form>
    </Container>
        </>)
}

export default Login;
