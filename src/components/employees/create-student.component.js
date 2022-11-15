// CreateStudent Component for add new student

// Import Modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import StudentForm from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] =
    useState({ name: '', email: '', rollno: '' })
  // onSubmit handler
  const onSubmit = studentObject => {
    axios.post(
      `${process.env.REACT_APP_API_URL}/students/create-student`,
    studentObject)
    .then(res => {
      if (res.status === 200){
      
      navigate("/student-list")
      }
      else
      Promise.reject()
    })
    .catch(err => alert('Something went wrong'))
  }
    
  // Return student form
  return(
    <StudentForm initialValues={formValues}
    onSubmit={onSubmit}
    enableReinitialize>
    Add Employee
    </StudentForm>
  )
}

// Export CreateStudent Component
export default CreateStudent
