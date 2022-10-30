import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route , Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/login/Login';
import Menu from '../components/menu/Menu';
import Register from '../components/register/Register';
import FoodCaloriesInfo from '../components/foodCaloriesInfo/FoodCaloriesInfo';
import Info from "../components/info/Info";
import Catering from "../components/info/Catering";
import Buffet from "../components/info/Buffet";
import Events from "../components/info/Events";
//import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Birthday from "../components/info/Birthday";

import AddItem from '../components/addItem/AddItem';
import Contact from '../components/contact/Contact';
import Orders from '../components/orders/Orders';
import PurchaseReceipt from '../components/orders/PurchaseReceipt';
import Delivarystatus from '../components/orders/Delivarystatus';
import Offers from '../components/offers/Offers';
//import Addevent from "../components/info/Events/Addevent";
import Addevent from '../components/addEvent/Addevent';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import Sales from "../components/sales/Sales";
import Cart from "../components/cart/Cart";
import React, { useEffect } from 'react';
import Review from '../components/review/Review';
import Inventory from '../components/inventory/inventory';
import ReserveTable from '../components/reserveTable/ReserveTable';

import Profile from '../components/profile/Profile';
import Pnavbar from '../navbar/ProfileNavbar';
import OwnerOffer from '../components/offers/OwnerOffer';
import { useNavigate } from "react-router-dom";
//Reducer
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setLoginUserInfo,clearLoginUserInfo } from '../redux-part/reducers/loginReducer';
import Checkout from '../components/checkout/Checkout';

const Navigationbar = () => {
  const navigate = useNavigate();
  // const [token, setToken] = useState(false);
  const loginStatus = useSelector((state) => state.loginReducer.isLogged);
  let userFirstName = useSelector((state) => state.loginReducer.userInfo.firstName);
  let userRole = useSelector((state) => state.loginReducer.userInfo.role);
  const dispatch = useDispatch();
  
  useEffect(() => {
    let tokenVal = localStorage.getItem("auth");
    let userDetails =JSON.parse( localStorage.getItem("user"));
    if (tokenVal) {
      dispatch(login());
      dispatch(setLoginUserInfo(userDetails));
     // userFirstName=userDetails.firstName;
    }
    else {
      dispatch(logout());
      dispatch(clearLoginUserInfo());
      navigate('/home');
    }

  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logout());
    dispatch(clearLoginUserInfo());
    navigate('/login');
  }

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className=''>
        <Container fluid>
          <Navbar.Brand onClick={e=>navigate("/")}>Snack Club</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link as={Link} to="/home">Home</Nav.Link>

              <Nav.Link as={Link} to="/menu">
                Items Menu</Nav.Link>
              <Nav.Link as={Link} to="/offers">
                Offers </Nav.Link>
              <Nav.Link as={Link} to="/owneroffer">OwnerOffer</Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact</Nav.Link>
              <Nav.Link as={Link} to="/reserveTable">
              Reserve Table</Nav.Link>
              <Nav.Link as={Link} to="/orders">
                My Orders</Nav.Link>
              <Nav.Link as={Link} to="/review">
              Post Review</Nav.Link>
              <Nav.Link as={Link} to="/inventory">
              Manage Inventory</Nav.Link>
              <Nav.Link as={Link} to="/foodCaloriesInfo">
                FoodCaloriesInfo</Nav.Link>
                <Nav.Link as={Link} to="/sales">
                Sales Report</Nav.Link>
              <NavDropdown title="Info" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to='/Info/Events'>Events</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Info/Catering'>Catering</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Info/Buffet'>Buffet</NavDropdown.Item>
              </NavDropdown>
            </Nav>


            <Nav>
              {!loginStatus ? <Nav.Link as={Link} to="/login">
                Login</Nav.Link> : null}
              {!loginStatus ? <Nav.Link as={Link} to="/register">
                Sign up</Nav.Link> : null}
              {loginStatus && userRole==='Customer' ? <Nav.Link as={Link} to="/cart">
                <AiOutlineShoppingCart />
              </Nav.Link> : null}
              {loginStatus ?
                <Nav.Link as={Link} to="/login" onClick={(e) => { handleLogout(e) }}>
                  Logout
                </Nav.Link> : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {userFirstName && loginStatus  ? <Navbar>
        <Container fluid>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <Nav.Link as={Link} to="/pnav">Welcome: <a >{userFirstName}</a> &nbsp;&nbsp;&nbsp;</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> : null}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout/>}/>
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
        <Route path="/addmenuitem" element={<AddItem />} />
        <Route path="/addEvent" element={<Addevent />} />
        <Route path="/Delivarystatus" element={<Delivarystatus/>} />
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/sales" element={<Sales/>}/>
        
        <Route path="/orders" element={<Orders />} />
        <Route path="/PurchaseReceipt" element={<PurchaseReceipt />} />
        <Route path="/Delivarystatus" element={<Delivarystatus />} />
       
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/pnav" element={<Pnavbar/>} />
        <Route path="/owneroffer" element={<OwnerOffer/>} />
        <Route path="/reserveTable" element={<ReserveTable/>}/>

      </ Routes>
    </>
  );
};

export default Navigationbar;
