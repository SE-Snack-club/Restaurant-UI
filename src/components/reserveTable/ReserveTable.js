import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
const ReserveTable =()=> {
    const [name, setName] = useState("Yasaswi Kolasani");
    const [description, setDesc] = useState("Pursuing Masters in computer science. Enrolled in the software engineering course.");
    const submit = (event) =>{
            event.preventDefault();
    };
        return(
            <div className="container">
              



            </div>
        );
}
export default ReserveTable;