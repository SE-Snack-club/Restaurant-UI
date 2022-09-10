
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import './Menu.css';
import reactlogo from '../../logo.svg';

const Menu = () => {

    let navigate = useNavigate();

    const onAddNewItem = (e) => {
        e.preventDefault();
        console.log("clicked me");
        navigate('/addmenuitem');
    }

    return (<>
        <Container className='mt-3 menu-right-text'>
            <Row>
                <Col>
                    <Button variant="primary" onClick={onAddNewItem}   >
                        Add new Item
                    </Button>
                </Col>
            </Row>
        </Container>
        <Container className='mt-5'>
            <Row className='menu-center-text'>
                <Col>
                    Today's Menu
                </Col>
            </Row>
            <Row className='menu-center-text mt-3'>
                <Col>
                    some thing
                </Col>
                <Col> Nothing</Col>
            </Row>

        </Container>

        <Container className='mt-5'>
            <Row>
                <Col>
                    <Card border="info" >
                        <Card.Img height={200} variant="top" src={reactlogo} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="info" >
                        <Card.Img height={200} variant="top" src={reactlogo} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="info" >
                        <Card.Img height={200} variant="top" src={reactlogo} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border="info" >
                        <Card.Img height={200} variant="top" src={reactlogo} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>)
}

export default Menu;