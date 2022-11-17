import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Form } from 'react-bootstrap';



const Sales = () => {
  const [offerdata, setOfferData] = useState(null);
  const [transactionDetails, setITransactionDetails] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [errmessage, seterrmessage] = useState(null);
  const [dispalyData, setDisplayData] = useState([]);

  const handleSelect = (e) => {
    console.log(month, year);
    console.log(year);
    let obj = {
      month,
      year
    }
    obj.month = Number(obj.month);
    obj.year = Number(obj.year);
    console.log(obj.month, obj.year);
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
        if (modifiedData.length === 0) {
          seterrmessage(true);
          console.log(modifiedData, "Cant find any data");
        }
        else {
          seterrmessage(false);
        }
      }
    ).catch(err => {
      console.log(err);
      seterrmessage(true);
      setOfferData(null);
    })


  }

  return (
    <div className="card">
      {/* {transactionDetails[0].date} */}
      {
        (errmessage === true) ?
          <div>
            <Alert variant="danger">OOPS! No sales found for selected Month and year!</Alert>
          </div> : <div></div>
      }
      <h3>
        <marquee behavior="scroll" direction="left" scrollamount="11" >
          <b> <p color='red'>Please Select month and year to view the sales!</p></b></marquee>
      </h3>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>
                    Year
                  </Form.Label>

                  <Form.Select title="year" onChange={(e) => { setYear(e.target.value) }}>
                    <option value={""} >Select year</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">year is required</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Form>
          </Col>

          <Col xs lg="4" md={{ span: 4, offset: 2 }}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>
                    Month
                  </Form.Label>

                  <Form.Select title="Item Name" onChange={(e) => { setMonth(e.target.value) }}>
                    <option value={""}>Select month</option>
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">october</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">Month is required</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Form>
          </Col>

        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
          <button className="btn btn-primary" type="submit" onClick={handleSelect}> get sales data</button>
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