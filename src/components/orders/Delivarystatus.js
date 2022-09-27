import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Delivarystatus=()=>{


    return(<>
<section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <Container className="py-5 h-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col>
              <Card
                className="card-stepper"
                style={{ borderRadius: "10px" }}
              >
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <span className="lead fw-normal">
                        Your order has been delivered
                      </span>
                      <span className="text-muted small">
                         on 10 sep, 2021
                      </span>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
                    <span className="dot"></span>
                    <hr className="flex-fill track-line" />
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
                    <div className="d-flex flex-column justify-content-center">
                      <span>10 sep</span>
                      <span>Being Prepared</span>
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


    </>
    )
}
export default Delivarystatus;