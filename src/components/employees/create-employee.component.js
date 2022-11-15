// Import Modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import EmployeeForm from "./EmployeeForm";

// CreateEmployee Component
const CreateEmployee = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] =
    useState({ name: '', email: '', PhoneNo: '', DOJ: '', ShiftTime: ''})
  // onSubmit handler
  const onSubmit = employeeObject => {
    axios.post(
      `${process.env.REACT_APP_API_URL}/employees/create-employee`,
    employeeObject)
    .then(res => {
      if (res.status === 200){
      
      navigate("/employee-list")
      }
      else
      Promise.reject()
    })
    .catch(err => alert('Something went wrong'))
  }
    
  // Return Employee form
  return(
    <EmployeeForm initialValues={formValues}
    onSubmit={onSubmit}
    enableReinitialize>
    Add Employee
    </EmployeeForm>
  )
}

// Export CreateEmployee Component
export default CreateEmployee
