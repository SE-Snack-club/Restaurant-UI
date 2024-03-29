import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import './Register.css';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const Register = () => {

  let navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [errmessage, setErrMessage] = useState(false);
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [errmessagephone, setErrMessagePhone] = useState("");
  const [errmessagezip, setErrMessagezip] = useState("");
  const [show, setShow] = useState(false);

  function redirectToLogin() {
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
          <h4>Congratulations your account was created successfully</h4>
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

  const CryptoJS = require('crypto-js');

  const encryptWithAES = (text) => {
    const passphrase = '123';
    return CryptoJS.AES.encrypt(text, passphrase).toString();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else if (String(zip).length !== 5 && String(phone).length !== 10) {
      setErrMessagePhone(true);
      setErrMessagezip(true);
    }
    else if (phone.length !== 10) {
      setErrMessagePhone(true);
      setErrMessagezip(false);
      event.preventDefault();
      event.stopPropagation();
    }
    else if (zip.length !== 5) {
      setErrMessagePhone(false);
      setErrMessagezip(true);
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      setErrMessagePhone(false);
      setErrMessagezip(false);

      let regdetails = {
        fname,
        lname,
        dob,
        email,
        phone,
        username,
        password,
        address,
        zip,
        city,
        state
      }
      regdetails.password = encryptWithAES(regdetails.password);
      axios.post(`${process.env.REACT_APP_API_URL}/registration/insert`, regdetails).then(
        res => {
          console.log(res);
          setErrMessage(false);
          setShow(true);
        }
      ).catch(err => {
        console.log(err);
        setErrMessage(true);
      })
    }
    setValidated(true);
  };
  

  return (<>
    <Container className="register-center-items mt-3">

      <h2 className='mb-2'>Please enter the below details to register</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
        {
          (errmessage === true) ?
            <div>
              <Alert variant="danger">user already exist</Alert>
            </div> : <div></div>
        }

        <Form.Group as={Row} className="mb-3">
          <Col lg={{ span: 1, offset: 4 }} sm={12} md={6}>
            <Form.Label>
              First Name
            </Form.Label>
          </Col>
          <Col lg={{ span: 3 }} sm={12} md={6}>
            <Form.Control
              type="text"
              value={fname}
              onChange={(e) => { setFname(e.target.value) }}
              required />
            <Form.Control.Feedback type="invalid">
              First Name is required.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastName">
          <Col lg={{ span: 1, offset: 4 }} sm={12} md={6}>
            <Form.Label>
              Last Name
            </Form.Label>
          </Col>
          <Col lg={{ span: 3 }} sm={12} md={6}>
            <Form.Control type="text" value={lname} onChange={(e) => { setLname(e.target.value) }} required />
            <Form.Control.Feedback type="invalid">
              Last Name is required.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastName">
          <Col lg={{ span: 1, offset: 4 }} sm={12} md={6}>
            <Form.Label>
              Date Of Birth
            </Form.Label>
          </Col>
          <Col lg={{ span: 3 }} sm={12} md={6}>
            <Form.Control type="date" value={dob} onChange={(e) => { setDob(e.target.value) }} required />
            <Form.Control.Feedback type="invalid">
              DOB is required.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Col lg={{ span: 1, offset: 4 }} sm={12} md={6}>
            <Form.Label>
              Email
            </Form.Label>
          </Col>
          <Col lg={{ span: 3 }} sm={12} md={6}>
            <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhone">
          <Col lg={{ span: 1, offset: 4 }} sm={12} md={6}>
            <Form.Label >
              Phone
            </Form.Label>

          </Col>
          <Col lg={{ span: 3 }} sm={12} md={6}>
            <Form.Control type="number" value={phone} onChange={(e) => { setPhone(e.target.value) }} required />
            <Form.Control.Feedback type="invalid">
              Please enter a valid phone number.
            </Form.Control.Feedback>
            {
              (errmessagephone === true) ?
                <div>
                  <p class="text-danger">phone number must be 10 digits</p>
                </div> : <div></div>
            }
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalUsername">
          <Col lg={{ span: 1, offset: 4 }} sm={12} md={6}>
            <Form.Label>
              Username
            </Form.Label>
          </Col>
          <Col lg={{ span: 3 }} sm={12} md={6}>
            <Form.Control type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Col lg={{ span: 1, offset: 4 }} sm={12} md={6}>
            <Form.Label>
              Password
            </Form.Label>
          </Col>
          <Col lg={{ span: 3 }} sm={12} md={6}>
            <Form.Control type="password" value={password} onChange={(e) => {
              setPassword(e.target.value)
            }} required />
          </Col>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom06" lg={{ span: 3, offset: 4 }} sm={12} md={6}>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="validationCustom03" lg={{ span: 1 }} sm={12} md={6}>
            <Form.Label>Zip</Form.Label>
            <Form.Control type="number" value={zip} onChange={(e) => { setZip(e.target.value) }} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Zip.
            </Form.Control.Feedback>
            {
              (errmessagezip === true) ?
                <div>
                  <p class="text-danger">phone enter a valid ZIP code</p>
                </div> : <div></div>
            }
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom05" lg={{ span: 2, offset: 4 }} sm={12} md={6}>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" value={city} onChange={(e) => { setCity(e.target.value) }} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="validationCustom04" lg={{ span: 2 }} sm={12} md={6}>
            <Form.Label>State</Form.Label>
            <Form.Control type="text" value={state} onChange={(e) => { setState(e.target.value) }} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit" >Register</Button>
        <MyVerticallyCenteredModal
          show={show}
          onHide={() => setModalShow(false)} />
      </Form>

    </Container>
  </>)
}

export default Register;