import { useState } from "react";
import { Col, Container, Figure, Form, Row } from "react-bootstrap"


const Profile=()=>{

  const [name, setName] = useState("customer_name");
  //setName("Raghava");
return(
    <html>

<Container fluid>

    <Row>
  <Col lg={{span:3}}><img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
   className="rounded float-left" width="200" height="200" alt="logo" /></Col>
  <Col lg={{span:8}}>
 {name}
  
  </Col>
  
</Row>

</Container>
    </html>
)
}

export default Profile;