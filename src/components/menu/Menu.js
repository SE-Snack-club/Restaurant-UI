
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Buffer } from 'buffer';
import { useNavigate } from "react-router-dom";
import './Menu.css';
import reactlogo from '../../logo.svg';
import axios from "axios";
import { useState, useEffect } from "react";

import Loader from '../loader/Loader';

const Menu = () => {
    const [menuData, setMenuData] = useState([]);
    let navigate = useNavigate();

    // const API_URL = "http://localhost:1111"

    const onAddNewItem = (e) => {
        e.preventDefault();
        console.log("clicked me");
        navigate('/addmenuitem');
    }

    function utfDecodeString(array) {
        return btoa(
            array.reduce((data, byte) => data + String.fromCharCode(byte), '')
         );
      }

    useEffect(
        () => {

            const getMenuItems = async () => {
                let resp = await axios.get(`${process.env.REACT_APP_API_URL}/menu/allitems`);
                setMenuData(resp.data);
            }

            getMenuItems();

        }, []);


        const handleAddTocart=(item_Id)=>{
            console.log(item_Id, "selected");
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
                {
                    (menuData.length>0 && menuData)? menuData.map(eachItem => {
                        const base64String = utfDecodeString(eachItem.itemImage.data.data);
                        return (
                            <Col className='mb-3' xs={12} lg={3} md={6} key={eachItem.itemId}>
                                <Card border="info" >
                                    <Card.Img height={200} variant="top" src={`data:image/png;base64,${base64String}`} />
                                    <Card.Body>
                                        <Card.Title>{eachItem.itemName}</Card.Title>
                                        <Card.Text>
                                            {eachItem.itemDescription}
                                        </Card.Text>
                                        <Card.Text>
                                            {eachItem.itemPrice}
                                        </Card.Text>
                                        <Button variant="primary" onClick={(e)=>{handleAddTocart(eachItem.itemId)}}>
                                        Add Item
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                :<Loader/>}
            </Row>
        </Container>
    </>)
}

export default Menu;