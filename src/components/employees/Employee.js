import React from 'react';

// Import Custom CSS
import "./Employee.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import other React Component
import CreateEmployee from
	"./create-employee.component";
import EditEmployee from
	"./edit-employee.component";
import EmployeeList from
	"./employee-list.component";
    
    const Employees = () => {
        return(
           
        <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/employee-list"> Employee Management</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/create-employee">Add Employee</Nav.Link>
      </Nav.Item>
     </Nav>
        <Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
		 <Routes>
          <Route exact path="/" element={<EmployeeList />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
		 </Routes>
			</div>
			</Col>
		</Row>
		</Container>
        </div>
        
);
};
export default Employees;