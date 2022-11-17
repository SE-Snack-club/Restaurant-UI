// Import Modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import EmployeeForm from "./EmployeeForm";
import Alert from 'react-bootstrap/Alert';
// CreateEmployee Component
const CreateEmployee = () => {
  let navigate = useNavigate();
  const [errmessage, setErrMessage] = useState(false);
  const [formValues, setFormValues] =
    useState({ name: '', email: '', PhoneNo: '', DOJ: '', ShiftTime: '', FDate: '', TDate: '', Whours: '', PCheck: '' })
  // onSubmit handler
  const onSubmit = employeeObject => {
    axios.post(
      `${process.env.REACT_APP_API_URL}/employees/create-employee`,
    employeeObject)
    .then(res => {
      if (res.status === 200){
      setErrMessage(false);
      navigate("/employee-list")
      }
      else
      Promise.reject()
    })
    .catch(err => setErrMessage(true))
  }
    
  // Return Employee form
  return(<>
        {
          (errmessage === true)? 
          <div>
            <Alert variant="danger">user not exist</Alert>
          </div>:<div></div>
        }
    <EmployeeForm initialValues={formValues}
    onSubmit={onSubmit}
    enableReinitialize>
    Add Employee
    </EmployeeForm>
  </>)
}

// Export CreateEmployee Component
export default CreateEmployee
