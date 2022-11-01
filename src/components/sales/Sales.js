import * as React from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Container } from 'react-bootstrap';


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
    // { argument: "18/1/2022", value: 202 },
    // { argument: "19/1/2022", value: 310 },
    // { argument: "20/1/2022", value: 101 },
    // { argument:"21/1/2022", value: 100 },
    // { argument: "22/1/2022", value: 210 },
    // { argument: "23/1/2022", value: 303 },
    // { argument: "24/1/2022", value: 113 },
    // { argument: "25/1/2022", value: 394 },
    // { argument: "26/1/2022", value: 100 },
    // { argument:"27/1/2022", value: 160 },
    // { argument: "28/1/2022", value: 705 },
    // { argument: "29/1/2022", value: 330 },
    // { argument: "30/1/2022", value: 401 },
];

const Sales = () => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    
    axios.post(`${process.env.REACT_APP_API_URL}/analysis/finddata`).then(
      res=>{
        console.log(res.data);  
        
      }
    ).catch(err=>{
      console.log(err); 
    })

  }, []);
    return(
    <div>
        <br></br>
                <h3>
                    <marquee behavior="scroll" direction="left" scrollamount="11" >
                       <b> <p color='red'>Please select start and end dates to view reslts!</p></b></marquee>
                </h3>
                

              <Container>
                {/* <Row>
                    <Col>
                    <h3>temp Month </h3>
      
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
                    </Col>
                    <Col>
                    <h3>temp year </h3>
                        <DropdownButton id="dropdown-basic-button" title="year">
                                    <Dropdown.Item href="#/action-1">2022</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"> 2021</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">2020</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"> 2018</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">2017 </Dropdown.Item>
                            
                        </DropdownButton>
                    </Col>     
                </Row> */}
                  <br></br>

                <Form>
                <FormGroup row>
                                <Label htmlFor="from" md={1}><h4>From</h4></Label>
                                <Col md={2}>
                                    <Input type="date" id="firstname" name="firstname"
                                        required
                                        placeholder="First Name"
                                        />
                                </Col>
                {/* </FormGroup>
                <FormGroup row> */}
                <Col md={2}></Col>
                                <Label htmlFor="To" md={1}><h4>To</h4></Label>
                                <Col md={2}>
                                    <Input type="date" id="firstname" name="firstname"
                                        required
                                        placeholder="First Name"
                                        />
                                </Col>
                </FormGroup>
                <FormGroup row>
                                <Col md={{size: 10, offset: 4}}>
                                    <Button type="submit" color="primary">
                                        Get Data
                                    </Button>
                                </Col>
                            </FormGroup>
                </Form>

                 
                </Container>
                <br></br><br></br>
                <Container>
        <Chart
            data={data}>   
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries valueField="value" argumentField="argument" />
        </Chart>
        </Container>

    </div>
)
    }
export default Sales