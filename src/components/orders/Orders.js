import { useState } from 'react';
import ReactDOM from 'react-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import biryani from './11.webp'
import biryani1 from './2.webp'
import biryani2 from './3.webp'
import pic4 from './1.png'
import pic5 from './2.png'
import pic6 from './3.png'
import pic1 from './4.png'
import pic2 from './5.png'
import pic7 from './7.png'
import pic8 from './8.png'
import './Orders.css'
import {Helmet} from 'react-helmet';
import { useEffect } from 'react';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";




const Orders=()=>{
  let navigate = useNavigate();
  const showPurchaseReceipt=(e)=>{
    e.preventDefault();
        console.log("clicked me");
        navigate('/PurchaseReceipt');

  }
    
    return(<>
        <h1>Orders</h1>
        <button onClick="hello">Filter</button>
        <br></br>
        <br></br>

        
        <Container>
        <div class="row mb-1">
        <div class="col-md-10">
          <div class="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div class="card-body d-flex flex-column align-items-start" >
              <h5>
              <strong class="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6>
               Order ID -564786
               <br></br>Order name -chicken pesto
               <br></br>
                Price -$22
              </h6>
              <div class="mb-1 text-muted">Sep 12,2021</div>
            </div>
            <img src={pic1}/>
        </div>
        </div>
        </div>
        </Container>
        <Container>
        <div class="row mb-1">
        <div class="col-md-10">
          <div class="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div class="card-body d-flex flex-column align-items-start">
              <h5>
              <strong class="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 class="mb-2">
               Order ID -5646755
               <br></br>Order name - Parmesan crusted fish
               <br></br>
                Price -$22 
              </h6>
              <div class="mb-1 text-muted">Oct 12,2021</div>
            </div>
            <img src={pic2}/>
        </div>
        </div>
        </div>
        </Container>
        <Container>
        <div class="row mb-1">
        <div class="col-md-10">
          <div class="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div class="card-body d-flex flex-column align-items-start">
              <h5>
              <strong class="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 class="mb-0">
               Order ID -5645456
               <br></br>Order name - Biryani
               <br></br>
                Price -$22
              </h6>
              <div class="mb-1 text-muted">Nov 12,2021</div>
            </div>
            <img src={biryani}/>
        </div>
        </div>
        </div>
        </Container>
        <Container>
        <div class="row mb-1">
        <div class="col-md-10">
          <div class="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div class="card-body d-flex flex-column align-items-start">
              <h5>
              <strong class="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 >
               Order ID -5456555
               <br></br>Order name -chicken crockpot
               <br></br>
                Price -$22
              </h6>
              <div class="mb-1 text-muted">Dec 12,2021</div>
            </div>
            <img src={pic4}/>
        </div>
        </div>
        </div>
    

        </Container>
        <Container>
        <div class="row mb-1">
        <div class="col-md-10">
          <div class="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div class="card-body d-flex flex-column align-items-start">
              <h5>
              <strong class="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 class="mb-0">
               Order ID -5458456
               <br></br>Order name - chicken roast
               <br></br>
                Price -$22
              </h6>
              <div class="mb-1 text-muted">Jan 12,2022</div>
            </div>
            <img src={pic5}/>
        </div>
        </div>
        </div>
    

        </Container>
        <Container>
        <div class="row mb-1">
        <div class="col-md-10">
          <div class="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div class="card-body d-flex flex-column align-items-start">
              <h5>
              <strong class="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 class="mb-0">
               Order ID -565656
               <br></br>Order name -chicken fricasse
               <br></br>
                Price -$22
              </h6>
              <div class="mb-1 text-muted">Feb 12,2022</div>
            </div>
            <img src={pic6}/>
        </div>
        </div>
        </div>
    

        </Container>
        <Container>
        <div class="row mb-1">
        <div class="col-md-10">
          <div class="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div class="card-body d-flex flex-column align-items-start">
              <h5>
              <strong class="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6>
               Order ID -5645656
               <br></br>Order name - Mutton Curry Thumb
               <br></br>
                Price - $22
              </h6>
              <div class="mb-1 text-muted">Mar 12,2022</div>
            </div>
            <img src={pic7}/>
        </div>
        </div>
        </div>
    

        </Container>
        <Container>
        <div class="row mb-1">
        <div class="col-md-10">
          <div class="card flex-md-row mb-4 box-shadow h-md-250" onClick={showPurchaseReceipt}>
            <div class="card-body d-flex flex-column align-items-start">
              <h5>
              <strong class="d-inline-block mb-2 text-primary">Order Details</strong>
              </h5>
              <h6 class="mb-0">
               Order ID - 5683458
               <br></br>Order name - Beef Wellington
               <br></br>
                Price - $22
              </h6>
              <div class="mb-1 text-muted">Apr 12,2022</div>
            </div>
            <img src={pic8}/>
        </div>
        </div>
        </div>
    

        </Container>
        
        

        </>)
        }


export default Orders;