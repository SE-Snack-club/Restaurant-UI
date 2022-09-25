
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import './Menu.css';
// import { Buffer } from 'buffer';
// import reactlogo from '../../logo.svg';
import axios from "axios";
import { useState, useEffect } from "react";

import Loader from '../loader/Loader';
import ErrorDisplayComp from '../common/errordisplaycomp/ErrorDisplayComp';

const Menu = () => {
    const [menuData, setMenuData] = useState(null);
    let navigate = useNavigate();
    const [activePage, setActivePage] = useState(0);
    const [error, setError] = useState(false);
    const [searchItem, setSearchItem] = useState("");

    //on page loads
    useEffect(
        () => {
            setMenuData(null);
            const getMenuItems = async () => {
                try {
                    let resp = await axios.post(`${process.env.REACT_APP_API_URL}/menu/getItemByName`,{
                        pageNum:activePage,
                        searchItem:searchItem
                    });
                    setMenuData(resp.data);
                    setError(false);
                }
                catch (err) {
                    console.log(err.response.data.message);
                    setError(true);
                }
            }

            getMenuItems();

        }, [activePage]);


    const searchItemByName = (itemName) => {
        console.log(itemName);
        setSearchItem(itemName);
    }

    const retreiveItems = (e) => {
        e.preventDefault();
        
            setActivePage(0);
            setMenuData([]);
             axios.post(`${process.env.REACT_APP_API_URL}/menu/getItemByName`,{
                pageNum:activePage,
                searchItem:searchItem
             })
            .then(results=>{
            setMenuData(results.data);
            setError(false);
            // setSearchItem("");
            console.log(menuData);}
            )
        .catch (e=> {
            setError(true);
            // setSearchItem("");
        })
        
    }

    const getThatPage = (number) => {
        console.log(parseInt(number.target.innerText));
        let pageNo = parseInt(number.target.innerText);
        setActivePage(pageNo);
    }

    let items = [];
    for (let number = 0; number <= 4; number++) {
        items.push(
            <Pagination.Item key={number} onClick={(e) => { getThatPage(e) }} active={number === activePage}>
                {number}
            </Pagination.Item>,
        );
    }

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




    const handleAddTocart = (item_Id) => {
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
        <Container className='mt-2'>
            <Row className='menu-center-text'>
                <Col>
                    <h2> Today's Menu </h2>
                </Col>
            </Row>
            <Row className='menu-center-text mt-3'>
                <Col>
                    <InputGroup className="mb-3"  >
                        <Form.Control
                            value={searchItem}
                            onChange={(e) => { searchItemByName(e.target.value) }}
                            id="search-name"
                            placeholder="Search for receipe"
                            aria-label="Search for receipe"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-primary" id="button-addon2" onClick={(e) => { retreiveItems(e) }}>
                            Search
                        </Button>
                    </InputGroup>
                </Col>
            </Row>

        </Container>
        {(error===true)?<Container>
            <Row>
                <Col>
                    <ErrorDisplayComp  />
                </Col>
            </Row>
        </Container>:null
        }

        <Container className='mt-3'>
            <Row>
                {
                    (menuData && menuData.length > 0) ?

                        menuData.map(eachItem => {
                            console.log("exe");
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
                                                Price: $ {eachItem.itemPrice}
                                            </Card.Text>
                                            <Button variant="primary" onClick={(e) => { handleAddTocart(eachItem.itemId) }}>
                                                Add Item
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                        : <Loader />}
            </Row>
        </Container>
        <Container className='d-flex justify-content-center'>
            <Row>
                <Col>
                    <Pagination>{items}</Pagination>
                </Col>
            </Row>
        </Container>
      
    </>)
}

export default Menu;