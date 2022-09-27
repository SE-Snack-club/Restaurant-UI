import React from "react";
import Img30 from './Images/good.jpg';
import Card from 'react-bootstrap/Card';
import { MdLabelImportant } from 'react-icons/md';
const Marriage=()=>{
    return(
<div>
<Card className="bg-dark text-white">
      <Card.Img src={Img30} height={675} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><center><h1 style={{color:'black', fontWeight: "bold"}}>Marriage Events Information</h1></center><br></br></Card.Title>
        <Card.Text>
        <h4><p style={{color:'black'}}>
        <MdLabelImportant />&nbsp;&nbsp; Marriage refers to the joining of two distinct souls, each with its own fate and destiny, married to the timeless mysteries of the <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eternal soul, and wishing for the union of its hearts and minds.

<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;So celebrate your Marriage with our restuarent.<br></br>
 <br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;In our restuarent for a Marriage we are offering upto 25% off on your total bill.<br></br>
 <br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;We are also providing some special items for you at that event.
</p></h4>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
</div>
    );}
    export default Marriage;