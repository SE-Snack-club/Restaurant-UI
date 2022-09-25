import calendar from 'react-calendar';
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
const Events=()=>{
    return(
        <div style={{
            backgroundImage: {Img25},
            height: "300px",
            backgroundRepeat: "no-repeat"
          }} >
            <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img8} />
      <Card.Body>
        <Card.Title>Birthday Celebrations</Card.Title>
        <Card.Text>
          Celebrating birthday at our restaurent offers you 20% discount <br></br>T&C apply
        </Card.Text>
        <Button variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img9} />
      <Card.Body>
        <Card.Title>Marriage Celebrations</Card.Title>
        <Card.Text>
          Celebrating Marriage events at our restaurent offers you 25% discount <br></br>T&C apply
        </Card.Text>
        <Button variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img6} />
      <Card.Body>
        <Card.Title>Working Events</Card.Title>
        <Card.Text>
          Celebrating working events at our restaurent offers you 20% discount <br></br>T&C apply
        </Card.Text>
        <Button variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container>
      <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img6} />
      <Card.Body>
        <Card.Title>Family Events</Card.Title>
        <Card.Text>
     Mother's and Father's Day events offers you 20% discount <br></br>
     T&C apply
        </Card.Text>
        <Button variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img26} />
      <Card.Body>
        <Card.Title>Resolution Ruiners</Card.Title>
        <Card.Text>
        Resolution Ruiner parties at our restaurent offers you 20% discount<br></br>T&C apply
        </Card.Text>
        <Button variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img27} />
      <Card.Body>
        <Card.Title>Valentine's Day</Card.Title>
        <Card.Text>
          Celebrating working events at our restaurent offers you 20% discount <br></br>T&C apply
        </Card.Text>
        <Button variant="primary">view more</Button>
      </Card.Body>
    </Card>
        </Col>
        </Row>
    </Container>

        </div>
    )}
    export default Events;