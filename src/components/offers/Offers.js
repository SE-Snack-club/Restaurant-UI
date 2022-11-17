import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import img3 from './Images/veg-noodles.jpg';
import img4 from './Images/vegbir1.jpg';
import img5 from './Images/chickenBiryani.jpg';
import img6 from './Images/chinese-chicken-salad.jpg';
import img7 from './Images/Beverage.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Offers = () => {
    const [offerdata, setOfferData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [tempdata, setTempData] = useState(null);
    const [offerid, setofferid]=useState(null);


    // const [modalShow, setModalShow] = useState(false);
    let userRole = useSelector((state) => state.loginReducer.userInfo.role);
    let navigate = useNavigate();
    useEffect(() => {
        setOfferData(null);
        axios.post(`${process.env.REACT_APP_API_URL}/offer/getalloffers`).then(
            res => {
                console.log(res.data);
                setOfferData(res.data);
            }
        ).catch(err => {
            console.log(err);
        })
    }, []);

    function MyVerticallyCenteredModal(props) {
        console.log(props, "props");
        // e.preventDefault();

        return (
            <div>
                {tempdata && tempdata != null ?
                    <Modal
                        show={true}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                <b>{tempdata.offerName}</b>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <b>Offer Description:</b>&nbsp;{tempdata.offerDescription}<br></br>
                            <b>Actual price:</b>&nbsp;{tempdata.offerPrice}<br></br>
                            <b>Offer :</b>&nbsp;{tempdata.offerpercentage}%

                            <img
                                className="d-block w-100 Offers-img"
                                src={tempdata.offerImage}
                                height={300}
                                alt="cant load immage"
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={(e) => { setShowModal(false) }}>Close</Button>
                        </Modal.Footer>
                    </Modal> : null}
            </div>
        );
    }


      
  
      const deleteoffer =(p)=>{
        console.log("deleting offerss");
        setofferid(p);
        // const offerid="cc95152c-a523-446b-87a4-e54c288464f1";
      console.log(p);
        axios.delete(`${process.env.REACT_APP_API_URL}/offer/deleteoffer/${p}`).then(
          res=>{
            console.log(res.data);
            setOfferData(res.data);
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
                </Row>
            </Container> : null}
            <Container>
                <br></br>
                <Row calss="mt-1">
                    <h3>
                        <marquee behavior="scroll" direction="left" scrollamount="11" >
                            <b> <p color='red'>WELCOME THESE ARE THE OFFERS AVAILABLE NOW!</p></b></marquee>
                    </h3>
                </Row>

                <Row calss="mt=2">
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

           

            {showModal === true ? <MyVerticallyCenteredModal /> : null}
            <Container className='mt-3'>
                <Row  >
                    {
                        // (menuData && menuData.length > 0) ?

                        offerdata && offerdata.map(eachItem => {
                            // console.log("exe");

                            return (

                                <Col className='mb-3 card-group' xs={12} lg={4} md={6} key={eachItem.offerId}>
                                    <Card border="info"  >
                                        <div className='bg-image hover-zoom'>
                                            <Card.Img height={200} variant="top" src={eachItem.offerImage} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{eachItem.offerName}</Card.Title>
                                            <Card.Text>
                                                {eachItem.offerDescription}
                                            </Card.Text>
                                            <Card.Text>
                                                <b>offer:  {eachItem.offerpercentage}%</b>
                                            </Card.Text>

                                        </Card.Body>
                                        <Card.Footer className='remove-footer-prop'>
                                            <Button variant="primary" onClick={(e) => {
                                                setTempData({
                                                    offerName: eachItem.offerName,
                                                    offerDescription: eachItem.offerDescription, offerImage: eachItem.offerImage,
                                                    offerpercentage: eachItem.offerpercentage,
                                                    offerPrice: eachItem.offerPrice
                                                    
                                                })
                                                setShowModal(true);
                                            }}
                                            > View offer
                                            </Button>
                                            
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {userRole && userRole === 'Admin' ?
                                            
                                            <Button variant="danger" value={eachItem.offerId} onClick={(e) => { deleteoffer(e.target.value)}}> delete</Button>
                                             : null}
                                        </Card.Footer>

                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </>
    )
}

export default Offers;