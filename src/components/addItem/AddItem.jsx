import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

const AddItem = () => {

  const [validated, setValidated] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemImage, setItemImagePath] = useState(null);
  const [itemPrepTime, setItemPrepTime] = useState("");
  const [itemCookTime, setItemCookTime] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemCalories, setItemCalories] = useState(0);
  const [itemIngredients, setItemIngredients] = useState("");
  const [successMessage,setSuccessMsg] = useState(false);
  const [errorMsg,setErrorMsg] = useState(false);

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
        itemName,
        itemDescription,
        itemPrice,
        itemImage,
        itemCalories,
        itemCategory,
        itemCookTime,
        itemIngredients,
        itemPrepTime,
      }

      axios.post(`${process.env.REACT_APP_API_URL}/menu/insertItem`, reqObj, {
        headers: { "Content-Type": "multipart/form-data" }
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
    <Col> <h2> Add Item </h2></Col>
    
    </Row>
    </Container>
      <Container className='mt-3'>
        <Form noValidate validated={validated} onSubmit={onSubmitItem}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => { setItemName(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">Item name is required</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Item Price</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Item Price"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={itemPrice}
                  onChange={(e) => { setItemPrice(e.target.value) }}
                />
                <Form.Control.Feedback type="invalid">
                  Please mention price of the item
                </Form.Control.Feedback>
              </InputGroup>


            </Form.Group>
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Item Description</Form.Label>
              <Form.Control as="textarea"
                required
                type="text"
                placeholder="Item Description"
                value={itemDescription}
                onChange={(e) => { setItemDescription(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">Description is required</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Item Preparation Time</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Item Preparation Time"
                value={itemPrepTime}
                onChange={(e) => { setItemPrepTime(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">Item Preparation Time is required</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Item Cooking Time</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Item Cooking Time"
                value={itemCookTime}
                onChange={(e) => { setItemCookTime(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">Item Cooking Time is required</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} md="6" controlId="validationCustom06">
              <Form.Label>Calories</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Calories present"
                value={itemCalories}
                onChange={(e) => { setItemCalories(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">Item calories is required</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom07">
              <Form.Label>Category</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Category of Item"
                value={itemCategory}
                onChange={(e) => { setItemCategory(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">Item Category is required</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Ingredients Used</Form.Label>
              <Form.Control as="textarea"
                required
                type="text"
                placeholder="Enter Ingredients"
                value={itemIngredients}
                onChange={(e) => { setItemIngredients(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">Item Ingredients are required</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="itemImage"

              onChange={(e) => { setItemImagePath(e.target.files[0]) }}

            />
            <Form.Control.Feedback type="invalid" tooltip>
              Upload the image
            </Form.Control.Feedback>
          </Form.Group>



          <Button type="submit">Add Item</Button>
        </Form>


      </Container>

      <Container className='mt-2'>
      <Row>
      <Col>
      {(successMessage===true)?<Alert  variant="info">Item is successfully added</Alert>:null}
      {(errorMsg===true)?<Alert  variant="warning">Failed to add item</Alert>:null}
      </Col>
      </Row>
      </Container>


    </>
  )
}

export default AddItem;