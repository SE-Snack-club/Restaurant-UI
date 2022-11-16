// import { useState } from 'react';
// import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import biryani from './11.webp'
// import biryani1 from './2.webp'
// import biryani2 from './3.webp'
import pic4 from './1.png'
import pic5 from './2.png'
import pic6 from './3.png'
import pic1 from './4.png'
import pic2 from './5.png'
import pic7 from './7.png'
import pic8 from './8.png'
import './Orders.css'
// import {Helmet} from 'react-helmet';
// import { useEffect } from 'react';
// import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";
import { Alert } from 'bootstrap';
import PurchaseReceipt from './PurchaseReceipt';
import Modal from 'react-bootstrap/Modal';
//import paginationFactory from 'react-bootstrap-table2-paginator';




const Orders = () => {

  const [OrdersMsg, setOrdersMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tempdata, setTempData] = useState(null);
  const [model, setModel] = useState(false);

  const [searchTerm,setsearchTerm] = useState("");

  let userId = useSelector((state) => state.loginReducer.userInfo.userId);
  console.log(userId);

  // console.log(userName)
  const [orderdata, setOrderData] = useState("");
  useEffect(() => {

    const getOrderItems = async () => {
      try {
        let resp = await axios.post(`${process.env.REACT_APP_API_URL}/myorders/Purchaseitems`, { userId });
        console.log(resp.data);
        setOrderData(resp.data);
        if (resp.data.length > 0) {
          setOrdersMsg(false);
        }
        else {
          setOrdersMsg(true);
        }
      }
      catch (err) {
        setOrdersMsg(true);

      }
    }
    getOrderItems()
  }, []);


  let navigate = useNavigate();
  const showPurchaseReceipt = (e) => {
    e.preventDefault();
    console.log("clicked me");
    navigate('/PurchaseReceipt');
  }


  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props) {
    console.log(props, "props");
    // e.preventDefault();

   

    return (
      <div>
        {tempdata && tempdata != null ?

        

          <Modal
            show={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
         
             <Row className="justify-content-center align-items-center h-100"/>
              <Col lg="8" xl="6"></Col> 
              <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <b>Purchase Receipt</b>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col className="mb-3">
                  <p className="lead fw-bold mb-4 pb-2">Purchased Date</p>
                  <p>{new Date(tempdata.purchaseDate).toDateString()}</p>
                </Col>
                <Col className="mb-3">
                  <p className="lead fw-bold mb-4 pb-2">Purchased Id</p>
                  <p>{tempdata.purchaseId}</p>
                </Col>
              </Row>

              <div
                className="mx-n5 px-5 py-4"
                style={{ backgroundColor: "#f2f2f2" }}
              >
                <Row>
                  <Col md="8" lg="9">
                    <p>{tempdata.itemName}:</p>
                  </Col>
                  <Col md="4" lg="3">
                    <p>${tempdata.totalCost}</p>
                  </Col>
                </Row>
                <Row>
                  <Col md="8" lg="9">
                    <p className="mb-0">Quantity:</p>
                  </Col>
                  <Col md="4" lg="3">
                    <p className="mb-0">{tempdata.itemsQntity}</p>
                  </Col>
                </Row>

                <br></br>

                <hr
                        className="mt-2 mb-4"
                        style={{
                          height: "0",
                          backgroundColor: "transparent",
                          opacity: ".75",
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      />

                
                <br></br>

                <Row>
                  <Col md="8" lg="9">
                    <p className="lead fw-bold mb-4 pb-2">Total:</p>
                  </Col>
                  <Col md="4" lg="3">
                    <p className="mb-0">${tempdata.totalCost}</p>
                  </Col>
                </Row>
              </div>
              <br></br>
              <br></br>


              <p
                className="lead fw-bold mb-4 pb-2"
                style={{ color: "#f37a27" }}
              >
                Tracking Details
              </p>



              <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                <span className="dot"></span>
                <hr className="flex-fill track-line" />
                <span className="dot"></span>
                <hr className="flex-fill track-line" />
                <span className="d-flex justify-content-center align-items-center big-dot dot">
                </span>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-column align-items-start">
                  <span>{new Date(tempdata.purchaseDate).toDateString()}</span>
                  <span>Order placed</span>
                </div>


                <div className="d-flex flex-column align-items-end">
                  <span>{new Date(tempdata.purchaseDate).toDateString()}</span>
                  <span>Pickedup</span>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={(e) => { setShowModal(false) }}>Close</Button>
            </Modal.Footer>
          </Modal> : null}
          
      </div>


    );
  }


  return (<>

 

    {showModal === true ? <MyVerticallyCenteredModal /> : null}

    {OrdersMsg === true ? <h1 className='orders-h1'> No Orders</h1> :

      <div>
        <h1 className='orders-h1'>Orders</h1>
        <Container>
          
          <Row>
            <Col></Col>
            <Col className="col-8">
        <input type="text" placeholder="Search.."
          className='form-control'
        style={{marginTop: 50, marginBottom: 20}}
          onChange = {(e) => {
           setsearchTerm(e.target.value);
           }}
           />
           </Col>
           <Col></Col>
           </Row>
          </Container>
           
           
        <br></br>
        {orderdata && orderdata.filter(val=>{
          if(searchTerm === ""){
          return val
          } else if (
            val.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.purchaseId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.paymentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.totalCost.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.purchaseDate.toLowerCase().includes(searchTerm.toLowerCase())
          ){
            return val;
          }
        }).map((n, i) =>
          <Container key={i}>
            <div className="row mb-1">
              <div className="col-md-10">
                <div className="card flex-md-row mb-4 box-shadow h-md-250" >
                  <div className="card-body d-flex flex-column align-items-start">
                    <h5>
                      <strong className="d-inline-block mb-2 text-primary">Order Details</strong>
                    </h5>
                    <h6 className="mb-2">
                      Order ID - {n.purchaseId}
                      
                      <br></br>Order DeliveredDate - {new Date(n.deliveredDate).toDateString()}
                      <br></br>Order Name - {n.itemName} x {n.itemsQntity}
                      <br></br>Payment Type - {n.paymentType}
                      <br></br>
                      Total Price -${n.totalCost}
                    </h6>
                    <br></br>
                    <Button variant="primary" onClick={(e) => {
                  setTempData({
                    purchaseId: n.purchaseId,
                    purchaseDate: n.purchaseDate,
                    totalCost: n.totalCost,
                    itemName:n.itemName,
                    itemsQntity:n.itemsQntity
                  })
                  setShowModal(true);
                }}
                > View Purchase Receipt
                </Button>
                  </div>
                  <img className='contact-img' src={n.itemImage} alt=" " />
                </div>

              </div>
            </div>
          </Container>
        )}
      </div>}


  </>)
}


export default Orders;