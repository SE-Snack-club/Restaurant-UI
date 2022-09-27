import React from "react";
import Img30 from './Images/good.jpg';
import Card from 'react-bootstrap/Card';
import { MdLabelImportant } from 'react-icons/md';
const Resolution=()=>{
    return(
<div>
<Card className="bg-dark text-white">
      <Card.Img src={Img30} height={675} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><center><h1 style={{color:'black', fontWeight: "bold"}}>Resolution Events Information</h1></center><br></br></Card.Title>
        <Card.Text>
        <h4><p style={{color:'black'}}>
        <MdLabelImportant />&nbsp;&nbsp;The time has come for "Resolution Ruiner" parties now that January has passed, where attendees are urged to eat and drink away  <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any New Year's resolutions they made a few weeks ago.
<br></br>
<br></br><br></br>
<MdLabelImportant />&nbsp;&nbsp;So celebrate your Resolution Events with our restuarent.<br></br>
<br></br><br></br>
<MdLabelImportant />&nbsp;&nbsp;In our restuarent for a Resolution Ruiners we are offering upto 20% off on your total bill.<br></br>
<br></br><br></br>
<MdLabelImportant />&nbsp;&nbsp;We are also providing some special items for you at that event.
</p></h4>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    
</div>
    );}
    export default Resolution;