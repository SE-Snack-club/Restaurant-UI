// import { useState } from 'react';
// import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
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
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";




const Orders = () => {

  const [OrdersMsg, setOrdersMsg] = useState(false);

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
        setOrdersMsg(false);
      }
      catch (err) {
        console.log(err.response.data.message);
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

  return (<>
    <h1 className='orders-h1'>Orders</h1>


    <br></br>
    <br></br>
    {
      OrdersMsg === true ?
        <h1>No Orders</h1> :
        <div>
          {orderdata && orderdata.map((n, i) =>
            <Container key={i}>
              <div className="row mb-1">
                <div className="col-md-10">
                  <div className="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
                    <div className="card-body d-flex flex-column align-items-start">
                      <h5>
                        <strong className="d-inline-block mb-2 text-primary">Order Details</strong>
                      </h5>
                      <h6 className="mb-2">
                        Order ID - {n.purchaseId}
                        <br></br>Order deliveredDate - {n.purchaseDate}
                        <br></br>Order name - {n.itemName} x {n.itemsQntity}
                        <br></br>Payment Type:{n.paymentType}
                        <br></br>
                        Total Price -${n.totalCost}
                      </h6>
                      <div className="mb-1">{n.deliveredDate}</div>
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