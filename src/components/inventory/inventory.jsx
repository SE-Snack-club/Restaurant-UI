import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const AddInvenItem = () => {

    const [validated, setValidated] = useState(false);
    const [itemname, setitemname] = useState("");
    const [category, setcategory] = useState("");
    const [measurement, setmeasurement] = useState("");
    const [quantity, setquantity] = useState("");
    const [successMessage,setSuccessMsg] = useState(false);
    const [errorMsg,setErrorMsg] = useState(false);
    const [InvenData, setInvenData] = useState([]);

    useEffect(
        () => {
            setInvenData(null);


            const getInvenItems = async () => {
                try {
                    let resp = await axios.get(`${process.env.REACT_APP_API_URL}/inventory/getinvenitems`);
                    setInvenData(resp.data);
                    console.log(resp.data);
                }
                catch (err) {
                    console.log(err);
                }
            }
            getInvenItems();
        }, []);
      
      
  
    // const API_URL = "http://localhost:1111/menu/insertItem";
  
    const onSubmitItem = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      else {
        setSuccessMsg(false);
        setErrorMsg(false);
        
        let reqObj = {
          itemname,
          category,
          measurement,
          quantity,
        }
  
        axios.post(`${process.env.REACT_APP_API_URL}/inventory/insertitem`, reqObj, {
          headers: { "Content-Type": "application/json" }
        }).then(
          res => {
            console.log(res);
            setSuccessMsg(true);
          }
        ).catch(err => {
          console.log(err);
          setErrorMsg(true);
        })
      }
      setValidated(true);
    }

    return (
        <>
        <Container className='d-flex justify-content-center mt-3'>
        <Row>
        <Col> <h2> Add Inventory Item </h2></Col>
        
        </Row>
        </Container>
          <Container className='mt-3'>
            <Form noValidate validated={validated} onSubmit={onSubmitItem}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Inventory Item Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Item Name"
                    value={itemname}
                    onChange={(e) => { setitemname(e.target.value) }}
                  />
                  <Form.Control.Feedback type="invalid">Inventory Item name is required</Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                  <Form.Label>Inventory Item Category</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={category}
                    onChange={(e) => { setcategory(e.target.value) }}>
                    <option>Category</option>
                <option value="veg">Veg</option>
                <option value="nonveg">Non Veg</option>
                <option value="both">Both</option>
                </Form.Select>
                  </InputGroup>
    
    
                </Form.Group>
              </Row>
    
              <Row className='mb-3'>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Item Measurement</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Item Description"
                    value={measurement}
                    onChange={(e) => { setmeasurement(e.target.value) }}
                  />
                  <Form.Control.Feedback type="invalid">Measurement is required</Form.Control.Feedback>
                </Form.Group>
              </Row>
    
              <Row className='mb-3'>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Item Quantity</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Item Quantity"
                    value={quantity}
                    onChange={(e) => { setquantity(e.target.value) }}
                  />
                  <Form.Control.Feedback type="invalid">Item Quantity is required</Form.Control.Feedback>
                </Form.Group>

              </Row>    
    
              <Button type="submit">Add Item</Button>
            </Form>
    
    
          </Container>
    
          <Container className='mt-2'>
          <Row>
          <Col>
          {(successMessage===true)?<Alert  variant="info">Inventory Item is successfully added</Alert>:null}
          {(errorMsg===true)?<Alert  variant="warning">Failed to add item</Alert>:null}
          </Col>
          </Row>
          </Container>

          <Container>
            <div>
          <table className="table table-stripped">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Category</th>
            <th>Measurement</th>
            <th>Quantity</th>
          </tr>
        </thead>
       <tbody>
       {InvenData && InvenData.map((data, index)=>{
                    return <tr key={index}>
                            <td>{data.itemname}</td>
                            <td>{data.category}</td>
                            <td>{data.measurement}</td>
                            <td>{data.quantity}</td>
                        </tr>
                    
                })}

       </tbody>
      </table>
      
    </div>
          </Container>
    
    
        </>
      )
    }
    
    export default AddInvenItem;
