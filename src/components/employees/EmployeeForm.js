import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const EmployeeForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string().email("You have enter an invalid email address").required("Required"),
	PhoneNo: Yup.number().positive("Invalid Phone number").integer("Invalid Phone number").required("Required"),
	DOJ: Yup.date().required(),
	ShiftTime: Yup.string().required("Required"),
	FDate: Yup.date(),
	TDate:Yup.date(),
	Whours:Yup.string(),
	PCheck:Yup.string()
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
      <label htmlFor="name">Name</label>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
      <label htmlFor="email">Email</label>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

		<FormGroup>
      <label htmlFor="PhoneNo">PhoneNumber</label>
			<Field name="PhoneNo" type="number"
				className="form-control" />
			<ErrorMessage
			name="PhoneNo"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
      <label htmlFor="DOJ">Date OF Joining</label>
			<Field name="DOJ" type="date"
				className="form-control" />
			<ErrorMessage
			name="DOJ"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
      <label htmlFor="ShiftTime">ShiftTime</label>
			<Field name="ShiftTime" type="text"
				className="form-control" />
			<ErrorMessage
			name="ShiftTime"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
      <label htmlFor="FDate">From Date</label>
			<Field name="FDate" type="date"
				className="form-control" />
			<ErrorMessage
			name="FDate"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
      <label htmlFor="TDate">To Date</label>
			<Field name="TDate" type="date"
				className="form-control" />
			<ErrorMessage
			name="TDate"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
      <label htmlFor="Whours">Worked Hours</label>
			<Field name="Whours" type="text"
				className="form-control" />
			<ErrorMessage
			name="Whours"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
      <label htmlFor="PCheck">Pay Check</label>
			<Field name="PCheck" type="text"
				className="form-control" />
			<ErrorMessage
			name="PCheck"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>		
		<br></br>
		<Button variant="primary" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default EmployeeForm;
