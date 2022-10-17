import React from 'react';
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
import ToastMessageExample from '../toast/ToastMessage';
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../loader/Loader';
import ErrorDisplayComp from '../common/errordisplaycomp/ErrorDisplayComp';
import { increaseCartCount } from '../../redux-part/reducers/loginReducer';

const Menu = () => {
    const [menuData, setMenuData] = useState(null);
    let navigate = useNavigate();
    const [activePage, setActivePage] = useState(0);
    const [error, setError] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const [pagesNum, setPagesNum] = useState(0);
    const [cartSuccess,setCartSuccess]= useState(true);
    const dispatch = useDispatch();
    let userId= useSelector((state) => state.loginReducer.userInfo.userId);
    //on page loads
    useEffect(
        () => {
            setMenuData(null);


            const getMenuItems = async () => {
                try {
                    let resp = await axios.post(`${process.env.REACT_APP_API_URL}/menu/getItemByName`, {
                        pageNum: activePage,
                        searchItem: searchItem
                    });
                    setMenuData(resp.data);
                    setError(false);
                }
                catch (err) {
                    console.log(err.response.data.message);
                    setError(true);
                }
            }
            getPagesCount();
            getMenuItems();

        }, [activePage]);

    const getPagesCount = async () => {
        try {
            let countRes = await axios.get(`${process.env.REACT_APP_API_URL}/menu/itemCount`);
            setPagesNum(countRes.data.count);
        } catch (e) {
            setPagesNum(0);
        }
    }

    const searchItemByName = (itemName) => {
        console.log(itemName);
        setSearchItem(itemName);
    }

    const retreiveItems = (e) => {
        e.preventDefault();
        getPagesCount();
        setActivePage(0);
        setMenuData([]);
        axios.post(`${process.env.REACT_APP_API_URL}/menu/getItemByName`, {
            pageNum: activePage,
            searchItem: searchItem
        })
            .then(results => {
                setMenuData(results.data);
                setError(false);
                // setSearchItem("");
                console.log(menuData);
            }
            )
            .catch(e => {
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
    for (let number = 0; number <= pagesNum - 1; number++) {
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


    const handleAddTocart =async (e,reqObj) => {
       console.log(e.target.innerText);
      
        if(userId){
            setCartSuccess(true);
            console.log(userId,"logged in userId");
            let reqobj={ userId:userId, itemId:reqObj.itemId,itemCartPrice:reqObj.itemCartPrice }
            
            console.log(reqobj);
            try{
            let isAddedtoCart = await axios.post(`${process.env.REACT_APP_API_URL}/cart/addtocart`,reqobj,{
                headers: { "Content-Type": "application/json" }
            })
            if(isAddedtoCart){
                console.log(isAddedtoCart);  
                e.target.innerText="Added to cart";
                setCartSuccess(true);
            }
        }
        catch(e){
            console.log(e);
            setCartSuccess(false);
        }


        }
        else{
            navigate('/login');
        }

        dispatch(increaseCartCount(1));
    }

    // <Container>
    //     <ToastMessageExample itemName={cartSuccess.itemName} show={cartSuccess.show} isError={cartSuccess.isError} >
    //     </ToastMessageExample>
    //     </Container>


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
        {(error === true) ? <Container>
            <Row>
                <Col>
                    <ErrorDisplayComp />
                </Col>
            </Row>
        </Container> : null
        }

        {cartSuccess===false? <Container className='text-center'>
            <Row>
                <Col>
                <Alert variant='danger'>
                 <h3>  Item already exists in cart</h3> 
                 </Alert>
                 </Col>
            </Row>
        </Container> : null }

        <Container className='mt-3'>
            <Row  >
                {
                    (menuData && menuData.length > 0) ?

                        menuData.map(eachItem => {
                            console.log("exe");

                            return (
                                <Col className='mb-3 card-group' xs={12} lg={3} md={6} key={eachItem.itemId}>
                                    <Card border="info"  >
                                        <div className='bg-image hover-zoom'>
                                            <Card.Img height={200} variant="top" src={eachItem.itemImage} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{eachItem.itemName}</Card.Title>
                                            <Card.Text>
                                                {eachItem.itemDescription}
                                            </Card.Text>
                                            <Card.Text>
                                                Price: $ {eachItem.itemPrice}
                                            </Card.Text>

                                        </Card.Body>
                                        <Card.Footer className='remove-footer-prop'>
                                            <Button variant="primary" onClick={(e) => { 
                                                handleAddTocart(e,{itemId:eachItem.itemId,
                                                                itemCartPrice:eachItem.itemPrice, itemName:eachItem.itemName })
                                             }}>
                                                Add to cart
                                            </Button>
                                        </Card.Footer>
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