import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from './Images/vegbiryani.jpg';
import img2 from './Images/vegfried-rice.jpg';
import img3 from './Images/veg-noodles.jpg';
import img4 from './Images/vegbir1.jpg';
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
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Offers=()=> {
    const [modalShow, setModalShow] = useState(false);
    let userRole = useSelector((state) => state.loginReducer.userInfo.role);
    let navigate = useNavigate();
    useEffect(() => {
    
      axios.post(`${process.env.REACT_APP_API_URL}/offer/getalloffers`).then(
        res=>{
          console.log(res.data);  
        }
      ).catch(err=>{
        console.log(err); 
      })
  
    }, []);
      
      const deleteoffer =()=>{
        console.log("deleting offerss");
        const offerid="cc95152c-a523-446b-87a4-e54c288464f1";
        axios.delete(`${process.env.REACT_APP_API_URL}/offer/deleteoffer/${offerid}`).then(
          res=>{
            console.log(res.data);
          }
        ).catch(err=>{
          console.log(err);
        })
      }

      const addoffer =()=>{
          console.log("adding offers");
          navigate('/owneroffer');
      }
       
    return (
        <>
        {userRole && userRole === 'Admin' ?
            <Container className='mt-3 menu-right-text'>
                <Row>
                    <Col>
                      <Button variant="primary" onClick={addoffer}>
                          Add new offer
                      </Button>
                    </Col>
                    <Col>
                      <Button variant="primary" onClick={deleteoffer}>
                          Delete new offer
                      </Button>
                    </Col>
                </Row>
            </Container> : null}
        <Container>
            <br></br>
            <Row calss= "mt-1">
            
                <h3>
                    <marquee behavior="scroll" direction="left" scrollamount="11" >
                       <b> <p color='red'>WELCOME THESE ARE THE OFFERS AVAILABLE NOW!</p></b></marquee>
                </h3>
              
            </Row>           
            <Row calss= "mt=2">
            <Carousel>
                    <Carousel.Item interval={1500}>
                
                <img 
                    className="d-block w-100 Offers-img"   
                    src={img4}
                    height={400}
                    alt="1st slide"
                    />
                    <Carousel.Caption>
                    <h3>Veg Biryani</h3>
                    <p>Biryani is a rice dish made with layers of rice, spices</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img 
                    className="d-block w-100 Offers-img"   
                    src={img3}
                    height={400}
                    alt="2nd slide"
                    />
                    <Carousel.Caption>
                    <h3>Veg Noodles</h3>
                    <p>Veg Noodles is an Indo-Chinese dish, made with Noodles, some basic Vegetables, 
                        a hint of black pepper and your favourite sause.
                    </p>
                    </Carousel.Caption>
                    </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <img 
                    className="d-block w-100 Offers-img"   
                    src={img5}
                    height={400}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Chicken Biryani</h3>
                    <p>Traditional chicken Biryani is made by layering marinated  chicken at the bottom 
                        of the pot followed by another layer of par cooked rice , herbs and ghee.
                    </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                    <img 
                    className="d-block w-100 Offers-img"   
                    src={img6}
                    height={400}
                    alt="4th slide"
                    />
                    <Carousel.Caption>
                    <h3>chinese-chicken-salad</h3>
                    <p>Made with cabbage, carrots, green onions and chicken, 
                        finished with sesame seeds, this is terrific for packed lunches as it keeps well for days!
                    </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                    <img 
                    className="d-block w-100 Offers-img"   
                    src={img7}
                    height={400}
                    alt="4th slide"
                    />
                    <Carousel.Caption>
                    <h3>Beverages</h3>
                    <p>
                    </p>
                    </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            </Row>
            </Container>
</>)
}
export default Offers;