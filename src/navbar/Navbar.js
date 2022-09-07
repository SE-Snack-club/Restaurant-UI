import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,Route,Redirect} from 'react-router-dom';

const Navigationbar=()=>{
    return(
        <>
        <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Restaurante</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}


export default Navigationbar;