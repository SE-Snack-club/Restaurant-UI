import React from "react";
import Img30 from './Images/good.jpg';
import Card from 'react-bootstrap/Card';
import { MdLabelImportant } from 'react-icons/md';
const Working=()=>{
    return(
<div>
<Card className="bg-dark text-white">
      <Card.Img src={Img30} height={675} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><center><h1 style={{color:'black', fontWeight: "bold"}}>Working Events Information</h1></center><br></br></Card.Title>
        <Card.Text>
        <h4><p style={{color:'black'}}>
        <MdLabelImportant />&nbsp;&nbsp; Events at your restaurant are a wise marketing strategy. Restaurants are typically the first venue that come to mind when planning <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;an event ,
        whether it be a business conference, wedding reception or rehearsal dinner, charity benefit, or holiday and birthday <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;parties.

<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;So celebrate your Marriage with our restuarent.<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;In our restuarent for a Marriage we are offering upto 20% off on your total bill.<br></br>
<br></br>
<br></br>
<MdLabelImportant />&nbsp;&nbsp;We are also providing some special items for you at that event.
</p></h4>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
</div>
    );}
    export default Working;