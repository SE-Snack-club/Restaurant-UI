import React from 'react';

// Import Custom CSS
import "./Employee.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import other React Component
import CreateStudent from
	"./create-student.component";
import EditStudent from
	"./edit-student.component";
import StudentList from
	"./student-list.component";
    
    const Employees = () => {
        return(
           
        <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/student-list"> Employee Management</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/create-student">Add Employee</Nav.Link>
      </Nav.Item>
     </Nav>
        <Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
		 <Routes>
          <Route exact path="/" element={<StudentList />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
		 </Routes>
			</div>
			</Col>
		</Row>
		</Container>
        </div>
        
);
};
export default Employees;