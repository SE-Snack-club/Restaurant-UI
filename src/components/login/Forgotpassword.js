import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './Login.css';
import  Container  from 'react-bootstrap/Container';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
          event.preventDefault();
          event.stopPropagation();
        }

    return(<>
    <Container className="login-center-items text-center">
    <div className=" form-signin w-100 m-auto">

        <h4>Enter your email</h4>
        <br></br>
        <Form onSubmit={handleSubmit}>
        {/* {
        (errmessage === true)? 
        <div>
          <Alert variant="danger">invalid email</Alert>
        </div>:<div></div>
      } */}
        <Row>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Col lg={{span:1,offset:4}} sm={12} md={6}>
        <Form.Label>
        <h5>
          Email
          </h5>
        </Form.Label>
        </Col>
        <Col lg={{span:4}} sm={12} md={6}>
          <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required/>
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
        <Col>
        <Button type="submit">send email</Button>
        </Col>
        </Row>
        </Form>
        </div>
    </Container>
    </>)
}
export default ForgotPassword;