import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './Login.css';
import  Container  from 'react-bootstrap/Container';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [errmessage, setErrMessage] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = useState(false);

    let navigate = useNavigate();

    function redirectToLogin(){
      navigate('/login');
    }

    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={props.show}
          onHide={redirectToLogin}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <h4>Email was send successfully, please check your spam folder as well</h4>
            <p>
            Click login to enter login page
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={redirectToLogin}>Login</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    const handleSubmit = (event) => {
          event.preventDefault();
          event.stopPropagation();

          let details={
            email
          }

          axios.post(`${process.env.REACT_APP_API_URL}/login/forgotpassword`,details).then(
            res=>{
              console.log(res);
              setErrMessage(false);
              setShow(true);
            }
          ).catch(err=>{
            console.log(err);
            setErrMessage(true);
          })

        }

    return(<>
    <Container className="login-center-items text-center">
    <div className=" form-signin w-100 m-auto">

        <h4>Enter your email</h4>
        <br></br>
        <Form onSubmit={handleSubmit}>
        {
        (errmessage === true)? 
        <div>
          <Alert variant="danger">invalid email</Alert>
        </div>:<div></div>
      }
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
    <MyVerticallyCenteredModal
        show={show}
        onHide={() => setModalShow(false)}/>
    </>)
}
export default ForgotPassword;