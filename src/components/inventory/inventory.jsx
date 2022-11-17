import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal'

const AddInvenItem = () => {

    const [validated, setValidated] = useState(false);
    const [itemname, setitemname] = useState("");
    const [category, setcategory] = useState("");
    const [measurement, setmeasurement] = useState("");
    const [quantity, setquantity] = useState("");
    const [successMessage,setSuccessMsg] = useState(false);
    const [successMessageUp,setSuccessMsgUp] = useState(false);
    const [errorMsg,setErrorMsg] = useState(false);
    const [InvenData, setInvenData] = useState([]);
    const [itemImage, setItemImagePath] = useState(null);
    const [id, setId] = useState(0);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showAddInventory, setShowAddInventory] = useState(false);
    const [updateQuantity, setUpdateQuantity] = useState(0);
    const handleCloseUpdate = () => 
    {
      setShowUpdate(false);
      // window.location.reload(false);
      };
    const handleShowUpdate = () => setShowUpdate(true);

    const getInvenItems = () =>{
      setInvenData(null);


      const getInvenItems = async () => {
          try {
              let resp = await axios.get(`${process.env.REACT_APP_API_URL}/inventory/getinvenitems`);
              setInvenData(resp.data);
              //console.log(resp.data);
          }
          catch (err) {
              //console.log(err);
          }
      }
      getInvenItems();
    }

    useEffect(
        () => {
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
          itemImage,
        }
  
        axios.post(`${process.env.REACT_APP_API_URL}/inventory/insertitem`, reqObj, {
          headers: { "Content-Type": "multipart/form-data" }
        }).then(
          res => {
           // console.log(res);
            setSuccessMsg(true);
            setSuccessMsgUp(false);
            getInvenItems();
          }
        ).catch(err => {
         // console.log(err);
          setErrorMsg(true);
        })
      }
      setValidated(true);
    }


    const updateItem = (id, quantity) => {
      var formData = { 'quantity': parseInt(quantity)};
      // console.log(formData)
      // console.log(id,"ItsmyID")

      axios.post(`${process.env.REACT_APP_API_URL}/inventory/updateitem/${id}`, formData, {
        headers: { "Content-Type": "application/json" }
      }).then(
        res => {
          //console.log(res);
          setSuccessMsgUp(true);
          setSuccessMsg(false);
        }
      ).catch(err => {
        //console.log(err);
        setErrorMsg(true);
      })

          // fetch(`${process.env.REACT_APP_API_URL}/inventory/updateitem/${id}`, {
          //     method: "POST",
          //     body: formData
          // }).then(data => data.json()).then(data => {
          //     console.log(data)
          // })
  }
    return (
        <>
        <Container className='d-flex justify-content-center mt-3'>

        <Modal show={showUpdate} onHide={()=>handleCloseUpdate()}>
        <Modal.Header closeButton>
          <Modal.Title>Update Quantity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
              <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Item Quantity</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Item Quantity"
                    value={updateQuantity}
                    onChange={(f) => { setUpdateQuantity(f.target.value) }}
                  />
                  <Form.Control.Feedback type="invalid">Item Quantity is required</Form.Control.Feedback>
                </Form.Group>
                </Row>
                </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(f) => {handleCloseUpdate(f,10)}}>
            Close
          </Button>
          <Button variant="primary" onClick={async (f)=>{
            await handleCloseUpdate(f, 10);
            await updateItem(id, updateQuantity);
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
            await getInvenItems()
              }}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showAddInventory} onHide={()=>setShowAddInventory(false)}>
      <Modal.Header>
          <Modal.Title>Add Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
            <Form noValidate validated={validated}>
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
                </Row>
                <Row>
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                  <Form.Label>Inventory Item Category</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Select aria-label="Default select example" value={category}
                    onChange={(e) => { setcategory(e.target.value) }}>
                    <option>Category</option>
                <option value="Veg">Veg</option>
                <option value="Non Veg">Non Veg</option>
                <option value="Others">Others</option>
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
              <Form.Group className="position-relative mb-3">
            <Form.Label>Item Image</Form.Label>
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
              
              
            </Form>
            
          </Container>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={()=>setShowAddInventory(false)}>Close</Button>
        <Button onClick={(e)=>{setShowAddInventory(false); onSubmitItem(e)}}>Add Item</Button>
        </Modal.Footer>
      </Modal>

        <Row>
        <Col > <h2> SnackClub Inventory</h2></Col>
        </Row>
        </Container>
    
          <Container className='mt-2'>
          <Row className="justify-content-center">
          <Col md={2}><Button onClick={()=>setShowAddInventory(true)}>Add Inventory</Button></Col>
        </Row>
          <Row>
          <Col>
          {(successMessage===true)?<Alert  variant="info">Inventory Item is successfully added</Alert>:null}
          {(successMessageUp===true)?<Alert  variant="info">Inventory Item is successfully Updated</Alert>:null}
          {(errorMsg===true)?<Alert  variant="warning">Failed to add item</Alert>:null}
          </Col>
          </Row>
          </Container>

          <Container>
            <div>
          <table className="table table-stripped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Item Name</th>
            <th>Item Category</th>
            <th>Measurement</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
       <tbody>
       {InvenData && InvenData.map((data, index)=>{
                    return <tr key={index}>
                            <td width="100"><Card border="info">
                                        <div className='bg-image hover-zoom'>
                                            <Card.Img height='70' variant="top" src={data.itemImage} />
                                        </div>
                                </Card>
                            </td>
                            <td>{data.itemname}</td>
                            <td>{data.category}</td>
                            <td>{data.measurement}</td>
                            <td>{data.quantity}</td>
                            <td><button className='btn btn-info' onClick={async (e)=>{
                              setUpdateQuantity(data.quantity)
                              setId(data._id)
                              handleShowUpdate()
                            }}>Update</button>
                            </td>
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
