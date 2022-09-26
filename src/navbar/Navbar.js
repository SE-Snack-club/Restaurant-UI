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
import AddItem from '../components/addItem/AddItem';
import Contact from '../components/contact/Contact';
import Marriage from "../components/info/Marriage";
import Working from "../components/info/Working";
import Family from "../components/info/Family";
import Resolution from "../components/info/Resolution";
import Valentine from "../components/info/Valentine";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import React from 'react';
import Review from '../components/review/Review';


const Navigationbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className=''>
        <Container fluid>
          <Navbar.Brand >Snack Club</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link as={Link} to="/home">Home</Nav.Link>

              <Nav.Link as={Link} to="/menu">
                Items Menu</Nav.Link>
              <Nav.Link as={Link} to="/contact">
              Contact</Nav.Link>
              <Nav.Link as={Link} to="/review">
              Post Review</Nav.Link>
          </Nav>
                  
            <NavDropdown title="Info" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/Info/Events'>Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Info/Catering'>Catering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Info/Buffet'>Buffet</NavDropdown.Item>
            </NavDropdown>
            
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login</Nav.Link>
              <Nav.Link as={Link} to="/register">
                Sign up</Nav.Link>
            <Nav.Link>
              <AiOutlineShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
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
        <Route path="/info/Events/Marriage" element={<Marriage />} />
        <Route path="/info/Events/Working" element={<Working />} />
        <Route path="/info/Events/Family" element={<Family />} />
        <Route path="/info/Events/Resolution" element={<Resolution />} />
        <Route path="/info/Events/Valentine" element={<Valentine />} />
        <Route path="/addmenuitem" element={<AddItem />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/review" element={<Review/>}/>
      </ Routes>
    </>
  );
};

export default Navigationbar;
