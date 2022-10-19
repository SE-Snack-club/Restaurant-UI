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
import {useSelector} from "react-redux";




const Orders=()=>{

  let userId=useSelector((state)=> state.loginReducer.userInfo.userId);
  console.log(userId);

const [orderdata, setOrderData] = useState("");
useEffect(() => {
  
      const getOrderItems = async () => {
          try {
              let resp = await axios.post(`${process.env.REACT_APP_API_URL}/myorders/Purchaseitems`, {userId});
              console.log(resp.data);
              setOrderData(resp.data);
          }
          catch (err) {
              console.log(err.response.data.message);
              
          }
      }
      getOrderItems()
  }, []);



  let navigate = useNavigate();
  const showPurchaseReceipt=(e)=>{
    e.preventDefault();
        console.log("clicked me");
        navigate('/PurchaseReceipt');

  }
    
    return(<>
        <h1 className='orders-h1'>Orders</h1>
       



       
        <br></br>
        <br></br>

        
        {orderdata ? orderdata.map(n=>
        <Container>
        <div className="row mb-1">
        <div className="col-md-10">
          <div className="card flex-md-row mb-4 box-shadow h-md-250" >
            <div className="card-body d-flex flex-column align-items-start">
              <h5>
              <strong className="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 className="mb-2">
               Order ID - {n.purchaseId}
               <br></br>Order name - {n.itemname}
               <br></br>Order deliveredDate - {n.deliveredDate}
               <br></br>
                Price -${n.totalCost} 
              </h6>
              <div className="mb-1 text-muted">{n.PurchaseDate}</div>
            </div>
            <img className='contact-img' src={pic1} alt=" "/>
        </div>
        </div>
        </div>
        </Container>
         ):null}
        <Container>
        <div className="row mb-1">
        <div className="col-md-10">
          <div className="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div className="card-body d-flex flex-column align-items-start">
              <h5>
              <strong className="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 className="mb-2">
               Order ID -5646755
               <br></br>Order name - Parmesan crusted fish
               <br></br>
                Price -$22 
              </h6>
              <div className="mb-1 text-muted">Oct 12,2021</div>
            </div>
            <img className='contact-img' src={pic2} alt=" "/>
        </div>
        </div>
        </div>
        </Container>
        <Container>
        <div className="row mb-1">
        <div className="col-md-10">
          <div className="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div className="card-body d-flex flex-column align-items-start">
              <h5>
              <strong className="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 className="mb-0">
               Order ID -5645456
               <br></br>Order name - Mutton Curry Thumb
               <br></br>
                Price -$22
              </h6>
              <div className="mb-1 text-muted">Nov 12,2021</div>
            </div>
            <img className='contact-img' src={pic7} alt=" "/>
        </div>
        </div>
        </div>
        </Container>
        <Container>
        <div className="row mb-1">
        <div className="col-md-10">
          <div className="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div className="card-body d-flex flex-column align-items-start">
              <h5>
              <strong className="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 >
               Order ID -5456555
               <br></br>Order name -chicken crockpot
               <br></br>
                Price -$22
              </h6>
              <div className="mb-1 text-muted">Dec 12,2021</div>
            </div>
            <img className='contact-img' src={pic4} alt=" "/>
        </div>
        </div>
        </div>
    

        </Container>
        <Container>
        <div className="row mb-1">
        <div className="col-md-10">
          <div className="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div className="card-body d-flex flex-column align-items-start">
              <h5>
              <strong className="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 className="mb-0">
               Order ID -5458456
               <br></br>Order name - chicken roast
               <br></br>
                Price -$22
              </h6>
              <div className="mb-1 text-muted">Jan 12,2022</div>
            </div>
            <img className='contact-img' src={pic5} alt=" "/>
        </div>
        </div>
        </div>
    

        </Container>
        <Container>
        <div className="row mb-1">
        <div className="col-md-10">
          <div className="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div className="card-body d-flex flex-column align-items-start">
              <h5>
              <strong className="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 className="mb-0">
               Order ID -565656
               <br></br>Order name -chicken fricasse
               <br></br>
                Price -$22
              </h6>
              <div className="mb-1 text-muted">Feb 12,2022</div>
            </div>
            <img className='contact-img' src={pic6} alt=" "/>
        </div>
        </div>
        </div>
    

        </Container>
        <Container>
        <div className="row mb-1">
        <div className="col-md-10">
          <div className="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div className="card-body d-flex flex-column align-items-start">
              <h5>
              <strong className="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6>
               Order ID -5645656
               <br></br>Order name - Mutton Curry Thumb
               <br></br>
                Price - $22
              </h6>
              <div className="mb-1 text-muted">Mar 12,2022</div>
            </div>
            <img className='contact-img' src={pic7} alt=" "/>
        </div>
        </div>
        </div>
    

        </Container>
        <Container>
        <div className="row mb-1">
        <div className="col-md-10">
          <div className="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div className="card-body d-flex flex-column align-items-start">
              <h5>
              <strong className="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 className="mb-0">
               Order ID - 5683458
               <br></br>Order name - Beef Wellington
               <br></br>
                Price - $22
              </h6>
              <div className="mb-1 text-muted">Apr 12,2022</div>
            </div>
            <img className='contact-img' src={pic8} alt=" "/>
        </div>
        </div>
        </div>
    

        </Container>
        
        

        </>)
        }


export default Orders;