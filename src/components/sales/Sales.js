import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Container } from 'react-bootstrap';

// input=month, yr 
// y-axis= cost in $
// x-axis = dates
// price, and date data from backend purchaces table

const data = [
    { argument:"1/1/2022", value: 100 },
    { argument: "2/1/2022", value: 120 },
    { argument: "3/1/2022", value: 30 },
    { argument: "4/1/2022", value: 111 },
    { argument: "5/1/2022", value: 391 },
    { argument: "6/1/2022", value: 100 },
    { argument:"7/1/2022", value: 101 },
    { argument: "8/1/2022", value: 210 },
    { argument: "9/1/2022", value: 301 },
    { argument: "10/1/2022", value: 111 },
    { argument:"11/1/2022", value: 101 },
    { argument: "12/1/2022", value: 120 },
    { argument: "13/1/2022", value: 300 },
    { argument: "14/1/2022", value: 111 },
    { argument: "15/1/2022", value: 339 },
    { argument: "16/1/2022", value: 100 },
    { argument:"17/1/2022", value: 130 },
    { argument: "18/1/2022", value: 202 },
    { argument: "19/1/2022", value: 310 },
    { argument: "20/1/2022", value: 101 },
    { argument:"21/1/2022", value: 100 },
    { argument: "22/1/2022", value: 210 },
    { argument: "23/1/2022", value: 303 },
    { argument: "24/1/2022", value: 113 },
    { argument: "25/1/2022", value: 394 },
    { argument: "26/1/2022", value: 100 },
    { argument:"27/1/2022", value: 160 },
    { argument: "28/1/2022", value: 705 },
    { argument: "29/1/2022", value: 330 },
    { argument: "30/1/2022", value: 401 },
];

const Sales = () => {
    
  const [transactionDetails, setITransactionDetails]=useState("");
  const [month, setMonth]=useState("");

  let obj={
    month:9,
    year:2022
  }

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_API_URL}/transaction/gettransactions`,obj).then(
      res=>{
        console.log(res.data);
        setITransactionDetails(res.data);
      }
    ).catch(err=>{
      console.log(err);
    })

  }, []);

  return(
    <div className="card">
      {/* {transactionDetails[0].date} */}
      
                <h3>
                    <marquee behavior="scroll" direction="left" scrollamount="11" >
                       <b> <p color='red'>These are the sales report for this month!</p></b></marquee>
                </h3>
        <DropdownButton id="dropdown-basic-button" title="month">
                <Dropdown.Item href="#/action-1">January</Dropdown.Item>
                <Dropdown.Item href="#/action-2"> February</Dropdown.Item>
                <Dropdown.Item href="#/action-3">March</Dropdown.Item>
                <Dropdown.Item href="#/action-1">April</Dropdown.Item>
                <Dropdown.Item href="#/action-2"> May</Dropdown.Item>
                <Dropdown.Item href="#/action-3">June </Dropdown.Item>
                <Dropdown.Item href="#/action-1">July</Dropdown.Item>
                <Dropdown.Item href="#/action-2"> August</Dropdown.Item>
                <Dropdown.Item href="#/action-3">September</Dropdown.Item>
                <Dropdown.Item href="#/action-1">October</Dropdown.Item>
                <Dropdown.Item href="#/action-2"> November</Dropdown.Item>
                <Dropdown.Item href="#/action-3">December</Dropdown.Item>
    </DropdownButton>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Year</Form.Label>
        <Form.Control type="text" placeholder="Enter year" />
      </Form.Group>
      <Form.Label>month</Form.Label>
      {/* <Form.Control 
          type="text" 
          value={month} 
          onChange={(e) => { setMonth(e.target.value) }} 
          /> */}
    </Form>
    
        <Chart
            data={data}>   
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries valueField="value" argumentField="argument" />
        </Chart>

<br></br>
<br></br>
<h3 >
    List of 5 orders for this month!
</h3>
        <Table striped>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>user Name</th>
          <th>email </th>
          <th>Order date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>motto</td>
          <td>mark.otto@gmail.com</td>
          <td>10/1/2022</td>
        </tr>
        <tr>
        <td>2</td>
          <td>jhon</td>
          <td>khasim</td>
          <td>jkhasim</td>
          <td>jhon.khasim@gmail.com</td>
          <td>10/3/2022</td>
        </tr>
        <tr>
        <td>3</td>
          <td>kalyani</td>
          <td>posupulati</td>
          <td>pkalyani</td>
          <td>kalyani.posupulatio@gmail.com</td>
          <td>10/11/2022</td>
        </tr>
        <tr>
        <td>4</td>
          <td>lokesh</td>
          <td>kanti</td>
          <td>klokesh</td>
          <td>lokesh.kanti@gmail.com</td>
          <td>10/13/2022</td>
        </tr>
        <tr>
        <td>5</td>
          <td>jeevan</td>
          <td>komaneni</td>
          <td>kjeevan</td>
          <td>jeevan.komaneni@gmail.com</td>
          <td>10/26/2022</td>
    </tr>
      </tbody>
    </Table>

    </div>
)
  };
export default Sales