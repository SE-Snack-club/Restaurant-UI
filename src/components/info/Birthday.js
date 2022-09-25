import React from "react";
import Card from 'react-bootstrap/Card';
import Img30 from './Images/plainb2.jpg';
const Birthday=()=>{
    return(
<div>
<Card className="bg-dark text-white">
      <Card.Img src={Img30} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><center><h1>Birthday Events Information</h1></center></Card.Title>
        <Card.Text>
        
Your Birth Was Your Beginning,
Celebrating Is an Expression of Thanks,
It's a Great Opportunity to Bond With People....<br></br>
So celebrate your birthday with our restuarent.<br></br>
In our restuarent for a birthday we are offering upto 20% off on yor total bill,And we are also providing some special items for you at that event.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
</div>
    );}
    export default Birthday;
