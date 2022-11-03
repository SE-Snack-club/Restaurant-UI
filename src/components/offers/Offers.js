
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

 

const Offers=()=> {
  const [offerdata, setOfferData] = useState("");
    useEffect(() => {
    axios.post(`${process.env.REACT_APP_API_URL}/offer/getalloffers`).then(
     res=>{
      console.log(res.data);  
      setOfferData(res.data);
        }
      ).catch(err=>{
        console.log(err);
      })
    }, []);
 
const [modalShow, setModalShow] = useState(false);
function MyVerticallyCenteredModal(props) {
        return (
          <Modal className='d-flex justify-content-center'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton >
              <Modal.Title id="contained-modal-title-vcenter" >
                <h3>Veg Biryani </h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body height={25}>
                <b>
                Actual price: &nbsp;$16
                <br></br>
                You saved: &nbsp;&nbsp;&nbsp; $3.2
                <br></br>
                Remaining:&nbsp;&nbsp;&nbsp; $12.8
                </b>
                <img
                    className="d-block w-100 Offers-img"  
                    src={img1}
                    height={300}
                    alt="cant load immage"
                    />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

 

      const [VegNoodlesShow, setvegnoodles] = useState(false);

      function VegNoodles(props) {

        return (

          <Modal className='d-flex justify-content-center'

            {...props}

            size="lg"

            aria-labelledby="contained-modal-title-vcenter"

            centered

          >

            <Modal.Header closeButton >

              <Modal.Title id="contained-modal-title-vcenter" >

                <h3>Veg Noodles </h3>

              </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <b>

                Actual price: &nbsp;$11

                <br></br>

                You saved: &nbsp;&nbsp;&nbsp; $1.1

                <br></br>

                Remaining:&nbsp;&nbsp;&nbsp; $9.9

                </b>

                <img

                    className="d-block w-100 Offers-img"  

                    src={img3}

                    height={300}

                    alt="2nd slide"

                    />

            </Modal.Body>

            <Modal.Footer>

              <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>

          </Modal>

        );

      }

 

      const [VegFriedRiceShow, setvegFriedRice] = useState(false);

      function VegFriedRice(props) {

        return (

          <Modal className='d-flex justify-content-center'

            {...props}

            size="lg"

            aria-labelledby="contained-modal-title-vcenter"

            centered

          >

            <Modal.Header closeButton >

              <Modal.Title id="contained-modal-title-vcenter" >

                <h3>Veg Fried Rice </h3>

              </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <b>

                Actual price: &nbsp;$13

                <br></br>

                You saved: &nbsp;&nbsp;&nbsp; $1.3

                <br></br>

                Remaining:&nbsp;&nbsp;&nbsp; $11.7

                </b>

                <img

                    className="d-block w-100 Offers-img"  

                    src={img2}

                    height={300}

                    alt="2nd slide"

                    />

            </Modal.Body>

            <Modal.Footer>

              <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>

          </Modal>

        );

      }

 

      const [ChickenDumBiryaniShow, setchickenDumBiryani] = useState(false);

      function ChickenDumBiryani(props) {

        return (

          <Modal className='d-flex justify-content-center'

            {...props}

            size="lg"

            aria-labelledby="contained-modal-title-vcenter"

            centered

          >

            <Modal.Header closeButton >

              <Modal.Title id="contained-modal-title-vcenter" >

                <h3>Chicken Dum Biryani </h3>

              </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <b>

                Actual price: &nbsp;$16

                <br></br>

                You saved: &nbsp;&nbsp;&nbsp; $4.8

                <br></br>

                Remaining:&nbsp;&nbsp;&nbsp; $11.2

                </b>

                <img

                    className="d-block w-100"  

                    src={img10}

                    height={300}

                    alt="2nd slide"

                    />

            </Modal.Body>

            <Modal.Footer>

              <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>

          </Modal>

        );

      }

 

      const [Chicken65Show, setchicken65] = useState(false);

      function Chicken65(props) {

        return (

          <Modal className='d-flex justify-content-center'

            {...props}

            size="lg"

            aria-labelledby="contained-modal-title-vcenter"

            centered

          >

            <Modal.Header closeButton >

              <Modal.Title id="contained-modal-title-vcenter" >

                <h3>Chicken 65 </h3>

              </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <b>

                Actual price: &nbsp;$12

                <br></br>

                You saved: &nbsp;&nbsp;&nbsp; $3

                <br></br>

                Remaining:&nbsp;&nbsp;&nbsp; $9

                </b>

                <img

                    className="d-block w-100 Offers-img"  

                    src={img9}

                    height={300}

                    alt="2nd slide"

                    />

            </Modal.Body>

            <Modal.Footer>

              <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>

          </Modal>

        );

      }

     

      const [TandooriWingsShow, setTandooriWings] = useState(false);

      function TandooriWings(props) {

        return (

          <Modal className='d-flex justify-content-center'

            {...props}

            size="lg"

            aria-labelledby="contained-modal-title-vcenter"

            centered

          >

            <Modal.Header closeButton >

              <Modal.Title id="contained-modal-title-vcenter" >

                <h3>Tandoori Chicken Wings </h3>

              </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <b>

                Actual price: &nbsp;$12

                <br></br>

                You saved: &nbsp;&nbsp;&nbsp; $1.8

                <br></br>

                Remaining:&nbsp;&nbsp;&nbsp; $10.2

                </b>

                <img

                    className="d-block w-100 Offers-img"  

                    src={img8}

                    height={300}

                    alt="2nd slide"

                    />

            </Modal.Body>

            <Modal.Footer>

              <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>

          </Modal>

        );

      }

 

      const [ChickenSaladShow, setchickensalad] = useState(false);

      function ChickenSalad(props) {

        return (

          <Modal className='d-flex justify-content-center'

            {...props}

            size="lg"

            aria-labelledby="contained-modal-title-vcenter"

            centered

          >

            <Modal.Header closeButton >

              <Modal.Title id="contained-modal-title-vcenter" >

                <h3>Chinese Chicken Salad</h3>

              </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <b>

                Actual price: &nbsp;$7

                <br></br>

                You saved: &nbsp;&nbsp;&nbsp; $0.7

                <br></br>

                Remaining:&nbsp;&nbsp;&nbsp; $6.3

                </b>

                <img

                    className="d-block w-100 Offers-img"  

                    src={img6}

                    height={300}

                    alt="2nd slide"

                    />

            </Modal.Body>

            <Modal.Footer>

              <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>

          </Modal>

        );

      }

 

      const [CoobSaladShow, setCobSalad] = useState(false);

      function CoobSalad(props) {

        return (

          <Modal className='d-flex justify-content-center'

            {...props}

            size="lg"

            aria-labelledby="contained-modal-title-vcenter"

            centered

          >

            <Modal.Header closeButton >

              <Modal.Title id="contained-modal-title-vcenter" >

                <h3>Cobb Salad</h3>

              </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <b>

                Actual price: &nbsp;$7

                <br></br>

                You saved: &nbsp;&nbsp;&nbsp; $0.7

                <br></br>

                Remaining:&nbsp;&nbsp;&nbsp; $6.3

                </b>

                <img

                    className="d-block w-100 Offers-img"  

                    src={img6}

                    height={300}

                    alt="2nd slide"

                    />

            </Modal.Body>

            <Modal.Footer>

              <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>

          </Modal>

        );

      }

 

      const [BeveragesShow, setBeverages] = useState(false);

      function Beverages(props) {

        return (

          <Modal className='d-flex justify-content-center'

            {...props}

            size="lg"

            aria-labelledby="contained-modal-title-vcenter"

            centered

          >

            <Modal.Header closeButton >

              <Modal.Title id="contained-modal-title-vcenter" >

                <h3>Beverages</h3>

              </Modal.Title>

            </Modal.Header>

            <Modal.Body>

                <b>

                <p>

                    You can save 10% for any Beverage you purchased.

                </p>

                </b>

                <img

                    className="d-block w-100 Offers-img"  

                    src={img7}

                    height={300}

                    alt="2nd slide"

                    />

            </Modal.Body>

            <Modal.Footer>

              <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>

          </Modal>

        );

      }

    return (
    <>
    {offerdata ? offerdata.map((n,i)=>
      <Container key={i}>
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

            <br></br>

            <Row calss="mt=2">
                <h3>
                    Veg Offers
                </h3>
            </Row>

            <Row>
                <Col>
                <Card style={{ width: '22rem' ,height:'30rem'}}>
                <Card.Img   className="Offers-img" variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>{n.Title}</Card.Title>
                    <Card.Text>
                       {n.desc} Biryani is a rice dish made with layers of rice, spices.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><b>{n.offerpercentage}% off  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Button type="submit"onClick={() => setModalShow(true)}>view offer</Button>{' '} </b>
                    </ListGroup.Item>
                </ListGroup>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '22rem' ,height:'30rem'}}>
                <Card.Img  className="Offers-img" variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>Veg Fried Rice</Card.Title>
                    <Card.Text>
                    Fried rice is an delicious meal, with fresh vegetables and
                     packed with flavours.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><b>10% off  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Button type="submit" onClick={() => setvegFriedRice(true)}>view offer</Button>{' '} </b>
                    </ListGroup.Item>
                </ListGroup>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '22rem' ,height:'30rem'}}>
                <Card.Img  className="Offers-img" variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>Veg Noodles</Card.Title>
                    <Card.Text>

                    It is an Indo-Chinese dish, made with Noodles, some basic Vegetables,

                        a hint of black pepper and your favourite sause.

                    </Card.Text>

                </Card.Body>

                <ListGroup className="list-group-flush">

                    <ListGroup.Item><b>10% off  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                        <Button type="submit" onClick={() => setvegnoodles(true)}>view offer</Button>{' '} </b>

                        </ListGroup.Item>

                </ListGroup>

                </Card>

                </Col>

            </Row>

 

            <br></br>

            <Row calss="mt=2">

                <h3>

                    Non-Veg Offers

                </h3>

            </Row>

 

            <Row>

                <Col>

                <Card style={{ width: '22rem' ,height:'30rem'}}>

                <Card.Img  variant="top" className="Offers-img" src={img10}/>

                <Card.Body>

                    <Card.Title>Chicken Dum Biryani</Card.Title>

                    <Card.Text>

                    Traditional chicken Biryani is made by layering marinated  chicken at the bottom

                        of the pot followed by another layer of par cooked rice , herbs and ghee.

                    </Card.Text>

                </Card.Body>

                <ListGroup className="list-group-flush">

                    <ListGroup.Item>

                        <b>30% off  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                        <Button type="submit" onClick={() => setchickenDumBiryani(true)}>view offer</Button>{' '} </b>

                    </ListGroup.Item>

                </ListGroup>

                </Card>

                </Col>

 

                <Col>

                <Card style={{ width: '22rem' ,height:'30rem'}}>

                <Card.Img  variant="top" className="Offers-img"src={img9} />

                <Card.Body>

                    <Card.Title>Chicken 65</Card.Title>

                    <Card.Text>

                    Chicken 65 recipe is fried, full of spice with the flavours of ginger, garlic and chillies.

                    </Card.Text>

                </Card.Body>

                <ListGroup className="list-group-flush">

                    <ListGroup.Item>

                        <b>25% off  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                        <Button type="submit" onClick={() => setchicken65(true)}>view offer</Button>{' '} </b>

                    </ListGroup.Item>

                </ListGroup>

                </Card>

                </Col>

 

                <Col>

                <Card style={{ width: '22rem' ,height:'30rem'}}>

                <Card.Img  variant="top" className="Offers-img" src={img8} />

                <Card.Body>

                    <Card.Title>Tandoori Chicken wings</Card.Title>

                    <Card.Text>

                    Boldy spiced tandoori chicken wings are served with cooling coriander-cumin spiced

                    yogurt or tangy blue cheese dressing these wings are a crowd-pleaser.

                    </Card.Text>

                </Card.Body>

                <ListGroup className="list-group-flush">

                    <ListGroup.Item>

                    <b>15% off  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                        <Button type="submit" onClick={() => setTandooriWings(true)}>view offer</Button>{' '} </b>

                    </ListGroup.Item>

                </ListGroup>

                </Card>

                </Col>

            </Row>

 

            <br></br>

            <Row calss="mt=2">

                <Col>

                <h3>

                    Salads

                </h3>

                </Col>

                <Col lg={{offset:4}}>

                <h3>

                Beverages

                </h3>

                </Col>

            </Row>

            <Row>

                <Col>

                <Card style={{ width: '22rem' ,height:'30rem'}}>

                <Card.Img  variant="top" className="Offers-img" src={img6}/>

                <Card.Body>

                    <Card.Title>chinese-chicken-salad</Card.Title>

                    <Card.Text>

                    Made with cabbage, carrots, green onions and chicken,

                        finished with sesame seeds, this is terrific for packed lunches as it keeps well for days!

                    </Card.Text>

                </Card.Body>

                <ListGroup className="list-group-flush">

                    <ListGroup.Item><b>10% off  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                        <Button type="submit" onClick={() => setchickensalad(true)}>view offer</Button>{' '} </b></ListGroup.Item>

                </ListGroup>

                </Card>

                </Col>

 

                <Col>

                <Card style={{ width: '22rem' ,height:'30rem'}}>

                <Card.Img  variant="top" className="Offers-img" src="https://www.2foodtrippers.com/wp-content/uploads/2015/09/Craft-Kitchen-Cobb-Salad.jpg.webp" />

                <Card.Body>

                    <Card.Title>Cobb Salad </Card.Title>

                    <Card.Text>

                    Cobb Saladis a protein-laden, filled with avocado, bacon, chicken breast, hard boiled egg slices and blue cheese.

                    </Card.Text>

                </Card.Body>

                <ListGroup className="list-group-flush">

                    <ListGroup.Item><b>10% off  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                        <Button type="submit" onClick={() => setCobSalad(true)}>view offer</Button>{' '} </b></ListGroup.Item>

                </ListGroup>

                </Card>

                </Col>

                <Col>

                <Card style={{ width: '22rem' ,height:'30rem'}}>

                <Card.Img  variant="top" className="Offers-img" src="https://us.123rf.com/450wm/monticello/monticello1804/monticello180400224/103002401-poznan-poland-apr-6-2018-bottles-of-global-soft-drink-brands-including-products-of-coca-cola-company.jpg?ver=6"/>

                <Card.Body>

                    <Card.Title>All kind Beverages</Card.Title>

                    <Card.Text>

                    alcoholic and non-alcoholic beverages including wine, soft drinks, fruit juices,

                     milk, liquid dietary supplements and packaged or bottled water

                    </Card.Text>

                </Card.Body>

                <ListGroup className="list-group-flush">

                    <ListGroup.Item><b>10% off  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                        <Button type="submit" onClick={() => setBeverages(true)}>view offer</Button>{' '} </b></ListGroup.Item>

                </ListGroup>

                </Card>

                </Col>

            </Row>

         

        </Container>
          ):null}

        <MyVerticallyCenteredModal show={modalShow}

        onHide={() => setModalShow(false)}>

        </MyVerticallyCenteredModal>

       

        <VegNoodles  show={VegNoodlesShow} onHide={() => setvegnoodles(false)} >

        </VegNoodles>

 

        <VegFriedRice show={VegFriedRiceShow} onHide={() => setvegFriedRice(false)}>

        </VegFriedRice>

        <ChickenDumBiryani show={ChickenDumBiryaniShow} onHide={() => setchickenDumBiryani(false)}>

        </ChickenDumBiryani>

        <Chicken65 show={Chicken65Show} onHide={() => setchicken65(false)}>

        </Chicken65>

        <TandooriWings show={TandooriWingsShow} onHide={() => setTandooriWings(false)}>

        </TandooriWings>

        <ChickenSalad show={ChickenSaladShow} onHide={() => setchickensalad(false)}>

        </ChickenSalad>

        <CoobSalad show={CoobSaladShow} onHide={() => setCobSalad(false)}>

        </CoobSalad>

        <Beverages show={BeveragesShow} onHide={() => setBeverages(false)}>

        </Beverages>

 

</>

    )

}

 

export default Offers;



 