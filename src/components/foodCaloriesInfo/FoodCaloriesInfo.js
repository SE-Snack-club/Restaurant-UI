import React,{useEffect, useState} from "react";
import "./CaloriesInfo.css";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ErrorDisplayComp from '../common/errordisplaycomp/ErrorDisplayComp';

const FoodCaloriesInfo = () => {
    const [menuData, setMenuData] = useState(null);
    const [activePage, setActivePage] = useState(0);
    const [error, setError] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const [pagesNum, setPagesNum] = useState(0);
    // const dispatch = useDispatch();

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

    return (<>
        <Container className='mt-2'>
            <Row className='menu-center-text'>
                <Col>
                    <h2> To Check Item Information Please Provide Item Name </h2>
                </Col>
            </Row>
            <Row className='menu-center-text mt-3'>
                <Col>
                    <InputGroup className="mb-3"  >
                        <Form.Control
                            value={searchItem}
                            onChange={(e) => { searchItemByName(e.target.value) }}
                            id="search-name"
                            placeholder="Search for Item"
                            aria-label="Search for Item"
                            aria-describedby="basic-addon2"
                        />
                        <Button type="submit" variant="outline-primary" id="button-addon2" onClick={(e) => { retreiveItems(e) }}>
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

        <Container className='mt-3'>
            <Row  >
                {
                    menuData && menuData.map(eachItem => { return ( 
                                <Container fluid>                      
                                    <Row key={eachItem.itemId}>
                                            <Col xs={3}>
                                                <Card >   
                                                    <Card.Img height={200} width={200}  src={eachItem.itemImage} />
                                                </Card>
                                            </Col>

                                            <Col lg={9}>

                                                <h3>{eachItem.itemName}</h3>
            
                                                <p><b>
                                                Total Calories:</b> {eachItem.itemCalories}
                                                </p>
                                            
                                                <p> 
                                                <b>
                                                Ingredients: </b> {eachItem.itemIngredients}
                                                </p>

                                                <p> 
                                                <b>
                                                Allergen Info: </b> {eachItem.itemAllergenInfo}
                                                </p>
                                            </Col>
                                        
                                    </Row>
                                    <br></br>
                                </Container>
                            )
                        })
                    }
            </Row>
        </Container>
        

    </>)
}

export default FoodCaloriesInfo;