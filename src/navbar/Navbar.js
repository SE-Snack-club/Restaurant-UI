import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Route, Navigate, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/login/Login";
import Menu from "../components/menu/Menu";
import Register from "../components/register/Register";
import Info from "../components/info/Info";
import Catering from "../components/info/Catering";
import Buffet from "../components/info/Buffet";
import Events from "../components/info/Events";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Birthday from "../components/info/Birthday";
const Navigationbar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand>Restaurante</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/menu">
              Items Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Sign up
            </Nav.Link>
            
            <NavDropdown title="Info" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/Info/Events'>Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Info/Catering'>Catering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Info/Buffet'>Buffet</NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/info" element={<Info />} />
        <Route path="/info/Events" element={<Events />} />
        <Route path="/info/Catering" element={<Catering />} />
        <Route path="/info/Buffet" element={<Buffet />} />
        <Route path="/info/Events/Birthday" element={<Birthday />} />
      </Routes>
    </>
  );
};

export default Navigationbar;
