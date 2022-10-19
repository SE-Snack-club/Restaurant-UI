import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const ToastMessageExample = ({ itemName, show, isError }) => {
    console.log(itemName,show,isError);
    const [showToast,setShowToast]=useState(show);
    return (
        <>
           {itemName? <Container>
                <Row>
                    <Col xs={6}>
                        <Toast show={showToast} onClose={()=>{setShowToast(false)}} delay={1000} autohide>
                            <Toast.Header>

                                <strong className="me-auto">Cart</strong>
                                <small>1 sec ago</small>
                            </Toast.Header>
                            <Toast.Body> 
                            {isError===false?
                            <span>{itemName} is added to cart</span> 
                            :<span> Failed to add the {itemName} to cart </span> }
                            </Toast.Body>
                        </Toast>
                    </Col>
                </Row>
            </Container>:null}
        </>
    );
}

export default ToastMessageExample;