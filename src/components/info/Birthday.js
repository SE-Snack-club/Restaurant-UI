import React from "react";
import Card from 'react-bootstrap/Card';
import Img30 from './Images/good.jpg';
import { MdLabelImportant } from 'react-icons/md';

const Birthday=()=>{
    return(
<div>
<Card className="bg-dark text-white">
      <Card.Img src={Img30} height={675} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><center><h1 style={{color:'black', fontWeight: "bold"}}>Birthday Events Information</h1></center><br></br></Card.Title><br></br>

        <Card.Text>
<h4><p style={{color:'black'}}>
<MdLabelImportant />&nbsp;&nbsp;Your Birth Was Your Beginning,
Celebrating Is an Expression of Thanks,
It's a Great Opportunity to Bond With People....<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;So celebrate your birthday with our restuarent.<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;In our restuarent for a birthday we are offering upto 20% off on your total bill.<br></br>
<br></br><br></br>
<MdLabelImportant />&nbsp;&nbsp;We are also providing some special items for you at that event.
</p></h4>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
</div>
    );}
    export default Birthday;
