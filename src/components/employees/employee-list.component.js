import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EmployeeTableRow from "./EmployeeTableRow";

const EmployeeList = () => {
const [employees, setEmployees] = useState([]);

useEffect(() => {
	axios
	.get(`${process.env.REACT_APP_API_URL}/employees/`)
	.then(({ data }) => {
		setEmployees(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return employees.map((res, i) => {
	return <EmployeeTableRow obj={res} setEmployees={setEmployees} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>PhoneNo</th>
			<th>DOJ</th>
			<th>ShiftTime</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default EmployeeList;
