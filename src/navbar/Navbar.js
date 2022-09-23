import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Navigate, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/login/Login';
import Menu from '../components/menu/Menu';
import Register from '../components/register/Register';
import Contact from '../components/contact/Contact';
import Offers from '../components/offers/Offers';

const Navigationbar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand >Restaurante</Navbar.Brand>
          <Nav className="me-auto">


            <Nav.Link as={Link} to="/home">Home</Nav.Link>

            <Nav.Link as={Link} to="/menu">
              Items Menu</Nav.Link>
              <Nav.Link as={Link} to="/contact">
              Contact</Nav.Link>

            <Nav.Link as={Link} to="/login">
              Login</Nav.Link>

            <Nav.Link as={Link} to="/offers">
              Offers</Nav.Link>
            <Nav.Link as={Link} to="/register">
              Sign up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      < Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/offers" element={<Offers/>}/>
      </ Routes>
    </>
  )
}


export default Navigationbar;