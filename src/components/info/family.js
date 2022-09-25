import React from "react";
import Img30 from './Images/good.jpg';
import Card from 'react-bootstrap/Card';
import { MdLabelImportant } from 'react-icons/md';
const Family=()=>{
    return(
<div>
<Card className="bg-dark text-white">
      <Card.Img src={Img30} height={675} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><center><h1 style={{color:'black' , fontWeight: "bold"}}>Family Events Information</h1></center><br></br></Card.Title>
        <Card.Text>
        <h4><p style={{color:'black'}}>
        <MdLabelImportant />&nbsp;&nbsp;Our Restaurant frequently celebrate and offer special meals for Mother's Day, Father's Day, and Children's Day.<br></br><br></br><br></br>
        <MdLabelImportant />&nbsp;&nbsp;Here, we offer a variety of meals inspired by various occasions.
<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;So celebrate your Family Events with our restuarent.<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;In our restuarent for a Family we are offering upto 20% off on your total bill.<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;We are also providing some special items for you at that event.
</p></h4>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    
</div>
    );}
    export default Family;