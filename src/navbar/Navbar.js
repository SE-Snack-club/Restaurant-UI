import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Navigate, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/login/Login';
import Menu from '../components/menu/Menu';
import Register from '../components/register/Register';
import FoodCaloriesInfo from '../components/foodCaloriesInfo/FoodCaloriesInfo';
import Info from "../components/info/Info";
import Catering from "../components/info/Catering";
import Buffet from "../components/info/Buffet";
import Events from "../components/info/Events";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Birthday from "../components/info/Birthday";
import AddItem from '../components/addItem/AddItem';
import Contact from '../components/contact/Contact';
import Orders from '../components/orders/Orders';
import PurchaseReceipt from '../components/orders/PurchaseReceipt';
import Delivarystatus from '../components/orders/Delivarystatus';
import Offers from '../components/offers/Offers';
import Marriage from "../components/info/marriage";
import Working from "../components/info/working";
import Family from "../components/info/family";
import Resolution from "../components/info/Resolution";
import Valentine from "../components/info/Valentine";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from "../components/cart/Cart";
import React from 'react';
import Review from '../components/review/Review';
import ReserveTable from '../components/reserveTable/ReserveTable';


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
              <Nav.Link as={Link} to="/offers">
                Offers </Nav.Link>
              <Nav.Link as={Link} to="/contact">
              Contact</Nav.Link>
              <Nav.Link as={Link} to="/reserveTable">
              Reserve Table</Nav.Link>
              <Nav.Link as={Link} to="/orders">
              My Orders</Nav.Link>
              <Nav.Link as={Link} to="/review">
              Post Review</Nav.Link>
              <Nav.Link as={Link} to="/foodCaloriesInfo">
              FoodCaloriesInfo</Nav.Link>
              <NavDropdown title="Info" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/Info/Events'>Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Info/Catering'>Catering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Info/Buffet'>Buffet</NavDropdown.Item>
            </NavDropdown>
          </Nav>

            
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login</Nav.Link>
              <Nav.Link as={Link} to="/register">
                Sign up</Nav.Link>
            <Nav.Link as={Link} to="/cart">
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
        <Route path="/foodCaloriesInfo" element={<FoodCaloriesInfo />} />
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
        <Route path="/orders"  element={<Orders/>} />
        <Route path="/PurchaseReceipt" element={<PurchaseReceipt/>} />
        <Route path="/Delivarystatus" element={<Delivarystatus/>} />

        <Route path="/offers" element={<Offers/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/reserveTable" element={<ReserveTable />} />
      </ Routes>
    </>
  );
};

export default Navigationbar;
