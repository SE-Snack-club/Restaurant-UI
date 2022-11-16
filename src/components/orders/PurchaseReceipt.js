import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";



const PurchaseReceipt=()=>{
  let navigate = useNavigate();
  const showDelivarystatus=(e)=>{
    e.preventDefault();
        console.log("clicked me");
        navigate('/Delivarystatus');

       
        

  }

    return(<>
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <Container className="py-5 h-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col lg="8" xl="6">
              <Card className="border-top border-bottom border-3 border-color-custom">
                <Card.Body className="p-5">
                  <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>
                    Purchase Reciept
                  </p>

                  <Row>
                    <Col className="mb-3">
                      <p className="small text-muted mb-1">Purchased Date</p>
                      <p>10 Sep 2021</p>
                    </Col>
                    <Col className="mb-3">
                      <p className="small text-muted mb-1">Purchase Id</p>
                      <p>564656</p>
                    </Col>
                  </Row>

                  <div
                    className="mx-n5 px-5 py-4"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <Row>
                      <Col md="8" lg="9">
                        <p>Chicken Biryani:</p>
                      </Col>
                      <Col md="4" lg="3">
                        <p>$23.99</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8" lg="9">
                        <p className="mb-0">Quantity:</p>
                      </Col>
                      <Col md="4" lg="3">
                        <p className="mb-0">2</p>
                      </Col>
                    </Row>
                 
                 <br></br>
                 <br></br>

              
                 
                    <Row>
                      <Col md="8" lg="9">
                        <p className="lead fw-bold mb-4 pb-2">Total</p>
                      </Col>
                      <Col md="4" lg="3">
                        <p className="mb-0">$25.00</p>
                      </Col>
                    </Row>
                    </div>
                  <br></br>
                  <br></br>
                  

                  <p
                    className="lead fw-bold mb-4 pb-2"
                    style={{ color: "#f37a27" }}
                  >
                    Tracking Details
                  </p>
                 
                  

<div className="d-flex flex-row justify-content-between align-items-center align-content-center">
  <span className="dot"></span>
  <hr className="flex-fill track-line" />
  <span className="dot"></span>
  <hr className="flex-fill track-line" />
  <span className="d-flex justify-content-center align-items-center big-dot dot">
  </span>
</div>
<div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-start">
                      <span>10 sep</span>
                      <span>Order placed</span>
                    </div>


                    <div className="d-flex flex-column align-items-center">
                      <span>10 sep</span>
                      <span>Ready To Pickup</span>
                    </div>


                    <div className="d-flex flex-column align-items-end">
                      <span>10 sep</span>
                      <span>Pickedup</span>
                    </div>
                    </div>
                  <p className="mt-4 pt-2 mb-0">
                    Want any help?{" "}
                    <a href="#!" style={{ color: "#f37a27" }}>
                      Please contact us
                    </a>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

     
        </>)
        }

        export default PurchaseReceipt;
