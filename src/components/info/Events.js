import React from "react";
import Img8 from './Images/bithday.jpg';
import Img25 from './Images/events.jpg';
import Img9 from './Images/marriage.jpg';
import Img6 from './Images/PartyFood.jpg';
import Img26 from './Images/newyear.png';
import Img27 from './Images/valentine.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
const Events=()=>{
  let navigate = useNavigate();
  const Birthday12 = () => {
    navigate('/info/Events/Birthday');
}

let navigate1= useNavigate();
  const Marriage12 = () => {
    navigate1('/info/Events/Marriage');
}
let navigate2= useNavigate();
  const Working12 = () => {
    navigate2('/info/Events/Working');
  }
  let navigate3= useNavigate();
  const Family12 = () => {
    navigate3('/info/Events/Family');
  }
  let navigate4= useNavigate();
  const Resolution12 = () => {
    navigate4('/info/Events/Resolution');
  }
  let navigate5= useNavigate();
  const Valentine12 = () => {
    navigate4('/info/Events/Valentine');
  }
    return(
        <div style={{ backgroundImage: `url(${Img25})`}} >
            <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img8} height={200}/>
      <Card.Body>
        <Card.Title>Birthday Celebrations</Card.Title>
        <Card.Text>
          Celebrating birthday at our restaurent offers you 20% discount <br></br>T&C apply
        </Card.Text>
        <Button onClick={Birthday12}  variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img9} height={200}/>
      <Card.Body>
        <Card.Title>Marriage Celebrations</Card.Title>
        <Card.Text>
          Celebrating Marriage events at our restaurent offers you 25% discount <br></br>T&C apply
        </Card.Text>
        <Button onClick={Marriage12}variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img6} height={200}/>
      <Card.Body>
        <Card.Title>Working Events</Card.Title>
        <Card.Text>
          Celebrating working events at our restaurent offers you 20% discount <br></br>T&C apply
        </Card.Text>
        <Button onClick={Working12} variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container>
      <Container className="mt-3">
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img6} height={200}/>
      <Card.Body>
        <Card.Title>Family Events</Card.Title>
        <Card.Text>
     Mother's and Father's Day events offers you 20% discount <br></br>
     T&C apply
        </Card.Text>
        <Button onClick={Family12} variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img26} height={200}/>
      <Card.Body>
        <Card.Title>Resolution Ruiners</Card.Title>
        <Card.Text>
        Resolution Ruiner parties at our restaurent offers you 20% discount<br></br>T&C apply
        </Card.Text>
        <Button onClick={Resolution12} variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img27} height={200}/>
      <Card.Body>
        <Card.Title>Valentine's Day</Card.Title>
        <Card.Text>
          Celebrating Valentine's Day at our restaurent offers you 20% discount <br></br>T&C apply
        </Card.Text>
        <Button onClick={Valentine12}variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
        </Row>
    </Container>

        </div>
    )}
    export default Events;