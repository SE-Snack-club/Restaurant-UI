import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const AddItem = () => {

  const [validated, setValidated] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemImage, setItemImagePath] = useState(null);

  // const API_URL = "http://localhost:1111/menu/insertItem";

  const onSubmitItem = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    // ,itemDescription,itemPrice,itemImagePath);
    let reqObj = {
      itemName,
      itemDescription,
      itemPrice,
      itemImage
    }

    axios.post(`${process.env.REACT_APP_API_URL}/menu/insertItem`, reqObj, {
      headers: { "Content-Type": "multipart/form-data" }
    }).then(
      res=>{
        console.log(res);
      }
    ).catch(err=>{
      console.log(err);
    })



    // console.log(formData);

  }

  return (
    <>
      <Container className='mt-5'>
        <Form noValidate validated={validated} onSubmit={onSubmitItem}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Item Name"
                value={itemName}
                onChange={(e) => { setItemName(e.target.value) }}
              />
              <Form.Control.Feedback>Item name is required</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Item Description</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Item Description"
                value={itemDescription}
                onChange={(e) => { setItemDescription(e.target.value) }}
              />
              <Form.Control.Feedback>Description is required</Form.Control.Feedback>
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


    </>
  )
}

export default AddItem;