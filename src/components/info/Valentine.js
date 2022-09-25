import React from "react";
import Card from 'react-bootstrap/Card';
import Img30 from './Images/good.jpg';
import { MdLabelImportant } from 'react-icons/md';
const Valentine=()=>{
    return(
<div>
<Card className="bg-dark text-white">
      <Card.Img src={Img30} height={675} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><center><h1 style={{color:'black', fontWeight: "bold"}}>Valentine's Day Information</h1></center></Card.Title><br></br>

        <Card.Text>
<h4><p style={{color:'black'}}>
<MdLabelImportant />&nbsp;&nbsp;Valentine's Day is a perfect time for events that can have a romantic theme or can host a singles night in place of the traditional <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;singles celebration ,
You can still treat your better half to a genuinely romantic evening of gastronomic treats since Valentine's Day is <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;still happening (pandemic be darned). <br></br>
<br></br><br></br>
<MdLabelImportant />&nbsp;&nbsp;Numerous delectable dishes created especially for lovers will be created by some of Boston, Cambridge, and other cities' top chefs.<br></br>
<br></br><br></br>
<MdLabelImportant />&nbsp;&nbsp;In our restuarent for a Valentine's Day we are offering upto 20% off on your total bill.<br></br>
<br></br><br></br>
<MdLabelImportant />&nbsp;&nbsp;We are also providing some special items for you at that event.
</p></h4>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
</div>
    );}
    export default Valentine;
