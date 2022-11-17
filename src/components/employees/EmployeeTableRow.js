import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

const EmployeeTableRow = (props) => {
let userRole = useSelector((state) => state.loginReducer.userInfo.role);
const { _id, name, email, PhoneNo, DOJ, ShiftTime, FDate, TDate, Whours, PCheck } = props.obj;
let navigate = useNavigate();
const deleteEmployee = () => {
	axios
	.delete(
		`${process.env.REACT_APP_API_URL}/employees/delete-employee/${_id}`)
	.then((res) => {
		if (res.status === 200) {
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
	<td>{FDate}</td>
	<td>{TDate}</td>
	<td>{Whours}</td>
	<td>{PCheck}</td>
	{userRole && userRole === 'Admin' ?
	<td>
		<Link className="edit-link"
		to={"/edit-employee/" + _id}>
		Update
		</Link>
		<td>&nbsp;</td>
		<Button onClick={deleteEmployee}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>: null}
	</tr>
);
};

export default EmployeeTableRow;
