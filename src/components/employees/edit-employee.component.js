// Import Modules
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";

// EditEmployee Component
const EditEmployee = () => {
  let params = useParams();
  let _id = params.id;
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({ name: '', email: '', PhoneNo: '', DOJ: '', ShiftTime: '' })
	
  //onSubmit handler
  const onSubmit = (employeeObject) => {
    axios
    .put(
      `${process.env.REACT_APP_API_URL}/employees/update-employee/${_id}`,
      employeeObject
    )
    .then((res) => {
      if (res.status === 200) {
      
      navigate("/employee-list");
      } else Promise.reject();
    })
    .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize employee form
  useEffect(() => {
    axios
    .get(
      `${process.env.REACT_APP_API_URL}/employees/update-employee/${_id}`
    )
    .then((res) => {
      const { name, email, PhoneNo, DOJ, ShiftTime } = res.data;
      setFormValues({ name, email, PhoneNo, DOJ, ShiftTime });
    })
    .catch((err) => console.log(err));
  }, [_id]); 

  // Return Employee form
  return (
    <EmployeeForm
    initialValues={formValues}
    onSubmit={onSubmit}
    enableReinitialize
    >
    Update Employee
    </EmployeeForm>
  );
};

// Export EditStudent Component
export default EditEmployee;
