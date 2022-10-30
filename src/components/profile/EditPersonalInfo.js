import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const EditPersonalInfo=()=>{

  const [userdatafromreg, setuserdatafromreg] = useState("");
  let userid = useSelector((state) => state.loginReducer.userInfo.userId);
  console.log(userid);
  useEffect(() => {
    
    axios.post(`${process.env.REACT_APP_API_URL}/profile/finduser`, {userid}).then(
      res=>{
        console.log(res.data);  
        setuserdatafromreg(res.data[0]);
      }
    ).catch(err=>{
      console.log(err); 
    })

  }, []);

//   let navigate = useNavigate();

//   const editinformation = (e) => {
//     e.preventDefault();
//     console.log("editing");
//     navigate('/editpersonalinfo');
// }

return(
<html>
  <br></br>
  <br></br>
<Container fluid>
  <Row>
    <Col lg={{span:3, offset:2}}>
      <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
    className="rounded float-left" width="200" height="200" alt="logo"/>
    </Col>
    <Col lg={{span:5}}>
    <Container>
    <Form>
      <h5>
      <Row>
        <Col xs={{span:3}}>Name</Col>
        <Col xs={{span:5}}>: {userdatafromreg.fname}</Col>
      </Row>
      <Row>
        <Col xs={{span:3}}>Username</Col>
        <Col xs={{span:5}}>: {userdatafromreg.username}</Col>
      </Row>
      <Row>
        <Col xs={{span:3}}>Email</Col>
        <Col xs={{span:6}}>: {userdatafromreg.email}</Col>
      </Row>
      <Row>
        <Col xs={{span:3}}>Phone</Col>
        <Col xs={{span:5}}>: {userdatafromreg.phone}</Col>
      </Row>
      <Row>
        <Col xs={{span:3}}>Date Of Birth</Col>
        <Col xs={{span:5}}>: {userdatafromreg.dob}</Col>
      </Row>
      <Row>
        <Col xs={{span:3}}>Address</Col>
        <Col xs={{span:5}}>: {userdatafromreg.address}</Col>
      </Row>
      <Row>
        <Col xs={{span:3}}>City<br/></Col>
        <Col xs={{span:5}}>: {userdatafromreg.city}</Col>
      </Row>
      </h5>
      </Form>
    </Container>
    </Col>
  </Row>
</Container>

</html>
)
}

export default EditPersonalInfo;