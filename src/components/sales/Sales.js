import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';



const Sales = () => {
  const [offerdata, setOfferData] = useState(null);
  const [transactionDetails, setITransactionDetails] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [startdate, setStartDate] = useState(null);
  const [enddate, setEndDate] = useState(null);
  const [datestr, setDateStr] = useState(null);
  const [errmessage, seterrmessage] = useState(null);

  const [dispalyData, setDisplayData] = useState([]);

  const [value, setValue] = useState('');
  const handleSelect = (e) => {
    // const count = Number(e);
    
    
    // setYear(count);
    console.log(month);
    let obj = {
      month,
      year
    }
    obj.month = Number(obj.month);
    axios.post(`${process.env.REACT_APP_API_URL}/transaction/gettransactions`, obj).then(

      res => {
        console.log(res.data);
        setITransactionDetails(res.data);
        setOfferData(res.data);
        seterrmessage(false);
        let newArr = {};
        
        for (let obj of res.data) {
          if (newArr[obj.date]) {
            newArr[obj.date] += parseInt(obj['price']);
          } else {
            newArr[obj.date] = parseInt(obj['price']);
          }
        }

        let modifiedData = [];
        for (let [k, v] of Object.entries(newArr)) {
          let newObj = { date: null, price: null };
          newObj.date = k;
          newObj.price = v;
          modifiedData.push(newObj)

        }
        console.log(modifiedData, "modified data");
        setDisplayData(modifiedData);
        if (modifiedData.length == 0) {
          seterrmessage(true);
          console.log(modifiedData, "Cant find any data");
        }
      }
    ).catch(err => {
      console.log(err);
      seterrmessage(true);
    })

  }

  function validatedate(props) {
    const dateStr = '10/21/2022';
    // console.log(props.datestr);
    const [month1, day1, year1] = dateStr.split('/');
    const date = new Date(+year1, month1 - 1, +day1);

    const startStr = '03/24/2022';
    console.log(props.startdate);
    const [month2, day2, year2] = startStr.split('/');
    const startDate = new Date(+year2, month2 - 1, +day2);

    const endStr = '11/28/2022';
    console.log(props.enddate);
    const [month3, day3, year3] = endStr.split('/');
    const endDate = new Date(+year3, month3 - 1, +day3);

    if (date > startDate && date < endDate) {
      console.log('✅ date is between start and end dates');
    } else {
      console.log('⛔️ date is NOT between start and end dates');
    }
  }

  return (
    <div className="card">
      {/* {transactionDetails[0].date} */}
      {
        (errmessage === true)? 
        <div>
          <Alert variant="danger">invalid month or year</Alert>
        </div>:<div></div>
      }
      <h3>
        <marquee behavior="scroll" direction="left" scrollamount="11" >
          <b> <p color='red'>Please Select month and year to view the sales!</p></b></marquee>
      </h3>
      {/* <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="3">
            From  <input type='date' startdate={value} />
          </Col>
          <Col md={{ span: 3, offset: 2 }}>To
            <input type='date' enddate={value} />
          </Col>

        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <button color='green' variant="primary" onClick={() => {
              validatedate({
                setEndDate(enddate) { },
                setStartDate(startdate) { }

              })

            }} > Get Data
            </button>
          </Col>
        </Row>
      </Container> */}


      {/* <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <h5>Select Month</h5>
          </Col>
          <Col md="auto">
            <DropdownButton
              title="Month"
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="0">January</Dropdown.Item>
              <Dropdown.Item eventKey="1">February</Dropdown.Item>
              <Dropdown.Item eventKey="2">March</Dropdown.Item>
              <Dropdown.Item eventKey="3">April</Dropdown.Item>
              <Dropdown.Item eventKey="4">May</Dropdown.Item>
              <Dropdown.Item eventKey="5">June</Dropdown.Item>
              <Dropdown.Item eventKey="6">July</Dropdown.Item>
              <Dropdown.Item eventKey="7">August</Dropdown.Item>
              <Dropdown.Item eventKey="8">September</Dropdown.Item>
              <Dropdown.Item eventKey="9">october</Dropdown.Item>
              <Dropdown.Item eventKey="10">November</Dropdown.Item>
              <Dropdown.Item eventKey="11">December</Dropdown.Item>
            </DropdownButton>

          </Col>

        </Row>

      </Container> */}
      <Container>
        <Row className="justify-content-md-center" >
          <Col xs lg="2">
          <b>select year</b>
            <DropdownButton
              title="year"
              id="dropdown-menu-align-right"
              // onSelect={handleSelect}
              onSelect={(e) => { setYear(e)}}
            >
              <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
              <Dropdown.Item eventKey="2023">2023</Dropdown.Item>
              <Dropdown.Item eventKey="2024">2024</Dropdown.Item>
              <Dropdown.Item eventKey="2025">2025</Dropdown.Item>

            </DropdownButton>
            
          </Col>
          <Col md={{ span: 2, offset: 3 }}> 
          <b>select month</b>

            <DropdownButton
              title="Month"
              id="dropdown-menu-align-right"
              // onSelect={handleSelect}
              onSelect={(e) => { setMonth(e)}}
            >
              <Dropdown.Item eventKey="0">January</Dropdown.Item>
              <Dropdown.Item eventKey="1">February</Dropdown.Item>
              <Dropdown.Item eventKey="2">March</Dropdown.Item>
              <Dropdown.Item eventKey="3">April</Dropdown.Item>
              <Dropdown.Item eventKey="4">May</Dropdown.Item>
              <Dropdown.Item eventKey="5">June</Dropdown.Item>
              <Dropdown.Item eventKey="6">July</Dropdown.Item>
              <Dropdown.Item eventKey="7">August</Dropdown.Item>
              <Dropdown.Item eventKey="8">September</Dropdown.Item>
              <Dropdown.Item eventKey="9">october</Dropdown.Item>
              <Dropdown.Item eventKey="10">November</Dropdown.Item>
              <Dropdown.Item eventKey="11">December</Dropdown.Item>
            </DropdownButton>
          </Col>

        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <button class="btn btn-primary" type="submit" onClick={handleSelect}> get data</button>

          </Col>
        </Row>
      </Container>




      {
        offerdata && <Chart
          data={dispalyData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries valueField="price" argumentField="date" />
        </Chart>
      }
    </div>
  )
};
export default Sales