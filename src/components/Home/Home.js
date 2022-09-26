import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from './Images/Vegbiryani.jpg';
import img2 from './Images/vegfried-rice.jpg';
import img4 from './Images/mainimage.jpg';
import img3 from './Images/vegbir1.jpg';
import img5 from './Images/chickenBiryani.jpg';
import img6 from './Images/chinese-chicken-salad.jpg';
import img7 from './Images/Beverage.jpg';
import img8 from './Images/chickenwings.jpg';
import img9 from './Images/chicken-65.jpg';
import img10 from './Images/chickenDUMbiryani.jpg';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "./Home.css"


const Home=()=>{
    return(
        <div>
            <Container>
            <br></br>
            <Row calss= "mt-1">
            
                <h3>
                    <marquee behavior="scroll" direction="left" scrollamount="11" >
                       <b> <p color='red'>WELCOME TO SNACKCLUB</p></b></marquee>
                </h3>
              
            </Row>
            
            <Row calss= "mt=2">
            <Carousel>
                    <Carousel.Item interval={1500}>
                
                <img 
                    className="d-block w-100"
                    class="slideimages"   
                    src={img4}

                    alt="1st slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img 
                    className="d-block w-100"
                    class="slideimages" 
                    src={img3}

                    alt="2nd slide"
                    />
                    </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <img 
                    className="d-block w-100" 
                    class="slideimages"   
                    src={img5}

                    alt="Third slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                    <img 
                    className="d-block w-100"  
                    class="slideimages"  
                    src={img6}

                    alt="4th slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                    <img 
                    className="d-block w-100"  
                    class="slideimages"  
                    src={img7}

                    alt="4th slide"
                    />
                    </Carousel.Item>
            </Carousel>
            </Row>
            </Container>
            <section class='public-content'>
            <h3>Dining at the SnackClub is one of the most pleasurable activities one can register as customer of the Snack Club.</h3>
            <br></br>
            <p>Whether in the main dining room or a private meeting area, the personal service, attention to detail and exquisite cuisine turns any meal into a celebration. Featuring only the finest quality ingredients, our world-class chefs prepare sumptuous dishes that entice and delight the senses. </p>
            <br></br>
            <p>To complement your meal, choose from one of the many fine wines found in the Club's exclusive wine cellar which is stocked with only the finest of domestic and international wines to accommodate all tastes and price ranges. </p>
            <br></br>
            <p>Personal wine closets may also be reserved by members wishing to maintain their own collection. Personal closets store up to one dozen bottles and may contain specialty vintage wines not included in the Club’s inventory, or may be used to reserve select wines from our collection.  </p>
            <br></br>
            <br></br>
            <h3>MAIN DINING ROOM HOURS</h3>
            <br></br>
            <p>Monday - Friday&nbsp;<br></br>
                Breakfast: 7:00 a.m. - 10:00 a.m.&nbsp;<br></br>
                Lunch: Beginning at 11:30 a.m.&nbsp;<br></br>
                Dinner: 5:30 p.m. - 9:00 p.m.&nbsp;<br></br>
                <br></br>
                <em>Reservations are suggested.&nbsp;</em>
                <br></br>
                <br></br>
                </p>
            <img src={img1} width="200" height="200" alt="Girl in a jacket"></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <img src={img10} width="200" height="200" alt="Girl in a jacket"></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={img8} width="200" height="200" alt="Girl in a jacket"></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={img9} width="200" height="200" alt="Girl in a jacket"></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={img2} width="200" height="200" alt="Girl in a jacket"></img>
            
            </section>
        </div>
        )
}

export default Home;