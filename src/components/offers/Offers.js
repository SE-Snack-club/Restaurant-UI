import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import img1 from './Images/vegbiryani.jpg'
import Figure from 'react-bootstrap/Figure';
const offers=()=> {


    return (
<>
        <Container>
            <Row>
                <div>
                <h4>
                    <marquee behavior="scroll" direction="left" scrollamount="10">Welcome these are the available offers now!</marquee>
                </h4>
                </div>
            </Row>
            <Row>
                <Carousel>
                <Carousel.Item interval={2000}>
                    {/* <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    style={{ width: '18rem' }}
                    /> */}
                    <Figure>
                        <Figure.Image
                            width={1000}
                            height={100}
                            alt="171x180"
                            src={img1}
                        />
                        </Figure>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src="C:\Users\navee\Discounts page\Restaurant-UI\src\components\offersvegbiriyani.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img 
                    className="d-block w-100"
                    src="C:\Users\navee\Discounts page\Restaurant-UI\src\components\offersvegbiriyani.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </Row>
            <Row>
                    <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
            </Row>
        </Container>


            
</>
    )
}

export default offers;