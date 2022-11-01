import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Modal, Nav, Row } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditPersonalInfo=()=>{

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [errmessage, setErrMessage] = useState(false);
  const [updatesuccess, setUpdateSuccess]=useState(false);
  let userid = useSelector((state) => state.loginReducer.userInfo.userId);
  console.log(userid);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h4>Congratulations your account was updated successfully</h4>
        </Modal.Body>
      </Modal>
    );
  }
  
  useEffect(() => {
    
    axios.post(`${process.env.REACT_APP_API_URL}/profile//getedituser`, {userid}).then(
      res=>{
        console.log(res.data);  
        setFname(res.data[0].fname);
        setLname(res.data[0].lname);
        setPassword(res.data[0].password);
        setDob(res.data[0].dob);
        setPhone(res.data[0].phone);
        setAddress(res.data[0].address);
        setZip(res.data[0].zip);
        setCity(res.data[0].city);
        setState(res.data[0].state);
      }
    ).catch(err=>{
      console.log(err); 
    })

  }, []);

  const update = (e) => {
    e.preventDefault();
    console.log("updating");
    let updatedetails={
          userid,
          fname,
          lname,
          dob,
          phone,
          password,
          address,
          zip,
          city,
          state
    }

    axios.post(`${process.env.REACT_APP_API_URL}/registration/update`, updatedetails).then(
      res=>{
        console.log(res);
        setUpdateSuccess(true);
      }
    ).catch(err=>{
      console.log(err);
    })
}

return(
<>
  <br></br>
  <br></br>
<Container fluid>
  <Row >
    <Col lg={{span:3, offset:2}}>
      <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
    className="rounded float-left" width="200" height="200" alt="logo"/>
    </Col>
    <Col lg={{span:5}}>
    <Container>
    <Form>
      <h5>
      <Row className="p-2">
        <Col xs={{span:3}}>Name</Col>
        <Col xs={{span:5}}>  
          <Form.Control type="text" value={fname} onChange={(e) => { setFname(e.target.value) }} required/>
        </Col>
      </Row>
      <Row className="p-2">
        <Col xs={{span:3}}>lname</Col>
        <Col xs={{span:5}}>
          <Form.Control type="text" value={lname} onChange={(e) => { setLname(e.target.value) }} required/> 
        </Col>
      </Row>
      <Row className="p-2">
        <Col xs={{span:3}}>password</Col>
        <Col xs={{span:6}}> 
          <Form.Control type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} required/>
        </Col>
      </Row>
      <Row className="p-2">
        <Col xs={{span:3}}>Phone</Col>
        <Col xs={{span:5}}> 
          <Form.Control type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} required/>
        </Col>
      </Row>
      <Row className="p-2">
        <Col xs={{span:3}}>Date Of Birth</Col>
        <Col xs={{span:5}}> 
          <Form.Control type="text" value={dob} onChange={(e) => { setDob(e.target.value) }} required/>
        </Col>
      </Row>
      <Row className="p-2">
        <Col xs={{span:3}}>Address</Col>
        <Col xs={{span:5}}> 
          <Form.Control type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} required/>
        </Col>
      </Row>
      <Row className="p-2">
        <Col xs={{span:3}}>City<br/></Col>
        <Col xs={{span:5}}> 
          <Form.Control type="text" value={city} onChange={(e) => { setCity(e.target.value) }} required/>
        </Col>
      </Row>
      <Row className="p-2">
        <Col xs={{span:3}}>Zip<br/></Col>
        <Col xs={{span:5}}> 
          <Form.Control type="text" value={zip} onChange={(e) => { setZip(e.target.value) }} required/>
        </Col>
      </Row>
      <Row className="p-2">
        <Col xs={{span:3}}>State<br/></Col>
        <Col xs={{span:5}}> 
          <Form.Control type="text" value={state} onChange={(e) => { setState(e.target.value) }} required/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Button variant="primary" onClick={update}>update personal information</Button>
        </Col>
      </Row>
      </h5>
      </Form>
      <MyVerticallyCenteredModal
        show={updatesuccess}
        onHide={() => setModalShow(false)}/>
    </Container>
    </Col>
  </Row>
</Container>
</>
)
}

export default EditPersonalInfo;