import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EmployeeTableRow from "./EmployeeTableRow";
import { useDispatch, useSelector } from 'react-redux';

const EmployeeList = () => {
let userRole = useSelector((state) => state.loginReducer.userInfo.role);
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
	<div>
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>PhoneNo</th>
			<th>DOJ</th>
			<th>ShiftTime</th>
			<th>FromDate</th>
			<th>ToDate</th>
			<th>Workedhours</th>
			<th>PayCheck</th>
			{userRole && userRole === 'Admin' ?
			<th>Action</th>
			: null}
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	<h3>Note: From above info if PayCheck is <b>YES</b> please collect Pay Check from Office </h3>
	</div>
);

};

export default EmployeeList;
