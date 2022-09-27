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
                      <p className="small text-muted mb-1">Date</p>
                      <p>10 Sep 2021</p>
                    </Col>
                    <Col className="mb-3">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>564656</p>
                    </Col>
                  </Row>

                  <div
                    className="mx-n5 px-5 py-4"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <Row>
                      <Col md="8" lg="9">
                        <p>Chicken Biryani</p>
                      </Col>
                      <Col md="4" lg="3">
                        <p>$23.99</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8" lg="9">
                        <p className="mb-0">Tax</p>
                      </Col>
                      <Col md="4" lg="3">
                        <p className="mb-0">$2.00</p>
                      </Col>
                    </Row>
                  </div>
                  <Row className="my-4">
                    <Col md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                      <p
                        className="lead fw-bold mb-0"
                        style={{ color: "#f37a27" }}
                      >
                        $25.99
                      </p>
                    </Col>
                  </Row>
                  

                  <p
                    className="lead fw-bold mb-4 pb-2"
                    style={{ color: "#f37a27" }}
                  >
                    Tracking Order
                  </p>

                  <Row>
                    <Col lg="12">
                      <div className="horizontal-timeline">
                        <ul className="list-inline items d-flex justify-content-between">
                          <li className="list-inline-item items-list" onClick={showDelivarystatus}>
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              Ordered
                            </p>
                          </li>
                          <li className="list-inline-item items-list" onClick={showDelivarystatus}>
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              Ready For Pickup
                            </p>
                          </li>
                          <li className="list-inline-item items-list"onClick={showDelivarystatus}>
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#f37a27" }}
                            >
                              Pickedup
                            </p>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
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
