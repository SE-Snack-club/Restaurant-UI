import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const StudentTableRow = (props) => {
const { _id, name, email, rollno: PhoneNo } = props.obj;
let navigate = useNavigate();
const deleteStudent = () => {
	axios
	.delete(
		`${process.env.REACT_APP_API_URL}/students/delete-student/${_id}`)
	.then((res) => {
		if (res.status === 200) {
			// navigate("/student-list")
			props.setStudents(res.data)
		} else Promise.reject();
	})
	.catch((err) => {});
};

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{PhoneNo}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-student/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteStudent}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default StudentTableRow;
