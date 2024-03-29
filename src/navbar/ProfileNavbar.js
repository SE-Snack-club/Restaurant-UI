import Profile from "../components/profile/Profile";
import Orders from "../components/orders/Orders";
import { Nav } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileNavBar=()=>{
  let userRole = useSelector((state) => state.loginReducer.userInfo.role);
return(
    <div>
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/profile">Personal information</Nav.Link>
      </Nav.Item>
      {userRole && userRole === 'Customer' ?
      <Nav.Item>
      <Nav.Link as={Link} to="/orders">previous orders</Nav.Link>
    </Nav.Item>
             : null}
      
    </Nav>
    <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Orders />} />
    </Routes>
    
    </div>
);
};

export default ProfileNavBar;