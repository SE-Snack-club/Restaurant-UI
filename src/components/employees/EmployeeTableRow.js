import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const EmployeeTableRow = (props) => {
const { _id, name, email, PhoneNo, DOJ, ShiftTime } = props.obj;
let navigate = useNavigate();
const deleteEmployee = () => {
	axios
	.delete(
		`${process.env.REACT_APP_API_URL}/employees/delete-employee/${_id}`)
	.then((res) => {
		if (res.status === 200) {
			// navigate("/student-list")
			props.setEmployees(res.data)
		} else Promise.reject();
	})
	.catch((err) => {});
};

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{PhoneNo}</td>
	<td>{DOJ}</td>
	<td>{ShiftTime}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-employee/" + _id}>
		Edit
		</Link>
		<td>&nbsp;</td>
		<Button onClick={deleteEmployee}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default EmployeeTableRow;
