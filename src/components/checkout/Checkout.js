import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import visapic from './cred_debit.jpg';
import Alert from 'react-bootstrap/Alert';
import paypal from './paypal.png';
import axios from "axios";
import { setLiveTrack } from "../../redux-part/reducers/loginReducer";
const Checkout = () => {

    const checkoutInfo = useSelector(state => state.loginReducer.checkoutInfo);
    let navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState(false);
    const [paymentType, setPaymentType] = useState("credit/debit");
    const [transactionData, setTransactionData] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState();
    const [purchaseBtnStatus, setBtnStatus] = useState(false);

    const dispatch = useDispatch();
    // console.log(checkoutInfo);

    useEffect(() => {
        if (!checkoutInfo.userId) {
            navigate("/cart");
        }

        return () => {

        };
    }, []);

    const handleCreditDebit = (e) => {
        setSelectedPayment(true);
        setPaymentType("credit/debit");
    }

    const handlePaypal = (e) => {
        setSelectedPayment(true);
        setPaymentType("paypal");
    }

    const handleFinalPurchase = async (e) => {
        console.log(paymentType);
        console.log(checkoutInfo);
        setBtnStatus(true);
        // for(let item of checkoutInfo.cartItems){
        let transactionObj = {
            userId:checkoutInfo.userId,
            transactionTotal: checkoutInfo.totalBill,
            transactionItems: checkoutInfo.cartItems,
            transactionType: paymentType,
        }
        //}
        try {
            let transactionProc = await axios.post(`${process.env.REACT_APP_API_URL}/transaction/addtotransaction`,  transactionObj );
            console.log(transactionProc.data, "transaction resp");
            setPaymentSuccess(true);
            setBtnStatus(true);
            dispatch(setLiveTrack(true));
        }
        catch (e) {
            setPaymentSuccess(false);
            setBtnStatus(false);
            console.log("transaction error", e);
            dispatch(setLiveTrack(false));
        }

    }

    return (<>
        <Container>
            <Row className="text-center">
                <Col><h1>Checkout </h1></Col>
            </Row>
            <Row className="text-center mt-3">
                <Col> <h3>  Total Bill: $ {checkoutInfo.totalBill}</h3> </Col>
            </Row>
            <Row className="text-center mt-4"><Col> <h3>Choose your payment type</h3>  </Col></Row>

            <Row className="text-center mt-3">
                <Col onClick={(e) => { handleCreditDebit(e) }}>
                    <h5> Credit/Debit </h5>
                    <img src={visapic} alt="visa" height={100} width="50%"></img>
                </Col>
                <Col onClick={(e) => { handlePaypal(e) }}>
                    <h5> Paypal </h5>
                    <img src={paypal} alt="paypal" height={100} width="50%"  ></img>
                </Col>
            </Row>
            {selectedPayment === true ? <div>
                <Row className="mt-3">
                    {paymentType === "credit/debit" ? <Col className="text-center"> <h4>  Credit/ Debit Information</h4></Col>
                        : <Col className="text-center"> <h4> Enter Paypal Information </h4>  </Col>}

                </Row>

                {paymentType === "credit/debit" ? <Form>
                    <Row>
                        <Col lg={{ span: 7, offset: 2 }} >
                            <Form.Group className="mt-1" controlId="exampleForm.ControlInput1">
                                <Form.Label>Card Number </Form.Label>
                                <Form.Control type="number" placeholder="Enter card number" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 7, offset: 2 }}>
                            <Form.Group className="mt-1" controlId="exampleForm.ControlInput1">
                                <Form.Label>Cardholder's Name </Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 3, offset: 2 }}>
                            <Form.Group className="mt-1" controlId="exampleForm.ControlInput1">
                                <Form.Label> Expire </Form.Label>
                                <Form.Control type="text" placeholder="MM/YY" />
                            </Form.Group>
                        </Col>
                        <Col lg="4">
                            <Form.Group className="mt-1" controlId="exampleForm.ControlInput1">
                                <Form.Label> CVV </Form.Label>
                                <Form.Control type="text" placeholder="CVV" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="text-center mt-4 mb-2">
                        <Col lg={{ span: 7, offset: 2 }} >

                            <Button className="btn btn-primary" disabled={purchaseBtnStatus} onClick={(e) => { handleFinalPurchase(e) }}>Pay now</Button>

                        </Col>
                    </Row>
                </Form> :

                    <Form>
                        <Row>
                            <Col lg={{ span: 7, offset: 2 }} >
                                <Form.Group className="mt-1" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email Address </Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{ span: 3, offset: 2 }}>
                                <Form.Group className="mt-1" controlId="exampleForm.ControlInput1">
                                    <Form.Label> First Name </Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                            </Col>
                            <Col lg="4">
                                <Form.Group className="mt-1" controlId="exampleForm.ControlInput1">
                                    <Form.Label> Last Name </Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="text-center mt-4 mb-2">
                            <Col lg={{ span: 7, offset: 2 }} >

                                <Button className="btn btn-primary" disabled={purchaseBtnStatus} onClick={(e) => { handleFinalPurchase(e) }}>Pay now</Button>

                            </Col>
                        </Row>

                    </Form>}
            </div> : null}

            {paymentSuccess === true ? <Container className='text-center mt-3'>
                <Row>
                    <Col>
                        <Alert variant='success'>
                            <h3>  Your Order is placed. <span onClick={()=>{navigate("/status")}}><u> Click here</u></span> for delivery status</h3>
                        </Alert>
                    </Col>
                </Row>
            </Container> :  paymentSuccess === false ? <Container className='text-center mt-3'>
                <Row>
                    <Col>
                        <Alert variant='danger'>
                            <h4>  Transaction failed. Please try again</h4>
                        </Alert>
                    </Col>
                </Row>
            </Container> : null}

        </Container>
    </>)

}

export default Checkout;