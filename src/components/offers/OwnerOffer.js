import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const OwnerOffer = ()=>{

    const [offerName, setOfferName] = useState("");
    const [offerDescription, setOfferDescription] = useState("");
    const [offerpercentage, setOfferPercentage] = useState("");
    // const [offerImage, setOfferImage] = useState(null);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) 
        {
          event.preventDefault();
          event.stopPropagation();
          
        }
        else{
  
            let offerdetails = {
                offerName,
                offerDescription,
                offerpercentage,
                // offerImage,
            }

          axios.post(`${process.env.REACT_APP_API_URL}/offer/insertoffer`, offerdetails).then(
            res=>{
              console.log(res);
            }
          ).catch(err=>{
            console.log(err);
          })
        }
        setValidated(true);
      };
        
    return(
        <html>
            <Container className='d-flex justify-content-center mt-3'>
    <Row>
    <Col> <h2> Add Offer </h2></Col>
    
    </Row>
    </Container>
      <Container className='mt-3'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="offer Name"
                value={offerName}
                onChange={(e) => { setOfferName(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">offer name is required</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>offer percentage</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="offer percentage"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={offerpercentage}
                  onChange={(e) => { setOfferPercentage(e.target.value) }}
                />
                <Form.Control.Feedback type="invalid">
                  Please mention price of the item
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className='mb-3'>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Offer Description</Form.Label>
              <Form.Control as="textarea"
                required
                type="text"
                placeholder="Offer Description"
                value={offerDescription}
                onChange={(e) => { setOfferDescription(e.target.value) }}
              />
              <Form.Control.Feedback type="invalid">Description is required</Form.Control.Feedback>
            </Form.Group>
          </Row>

          {/* <Form.Group className="position-relative mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              required
              name="offerImage"
              onChange={(e) => { setOfferImage(e.target.files[0]) }}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Upload the image
            </Form.Control.Feedback>
          </Form.Group> */}

          <Button type="submit">Add Offer</Button>
        </Form>


      </Container>
        </html>
    );
}
export default OwnerOffer;