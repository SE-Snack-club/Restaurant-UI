import React, { useState, useEffect } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./AddReviews.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

function AddReviews() {
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");
  const [names, setName] = useState("");
  const [fullReview, setFullReview] = useState([{
    name:"Bharath",
    text:"Spacious restaurant with delicious food: perfect for dine in and parties of all size. Lots of delicious options! A variety of curries, meats and veggies. ",
    star:4,
    id:1
  }]);

  function getStars(event) {
    setStars(Number(event.target.value));
  }

  function getReview(event) {
    setReview(event.target.value);
  }

  function getNames(event) {
    setName(event.target.value);
  }

  function addReview() {
    if (stars === 0 || review === "") {
      alert("You should submit a real feedback review");
    } else {
      setFullReview((fullReview) =>
        fullReview.concat({
          name: names,
          text: review,
          star: stars,
          id: Math.random() * 100,
        })
      );
      setName("");
      setReview("");
      setStars(0);
    }
  }

  useEffect(() => {
    console.log('fullReview', fullReview)
}, [fullReview])

  useEffect(() => {
    const fullReview = JSON.parse(localStorage.getItem('fullReview'));
    if (fullReview) {
     setFullReview(fullReview);
    }
  }, []);

  useEffect(() =>{
    window.localStorage.setItem('fullReview',JSON.stringify(fullReview));
  },[fullReview]);

  
  return (
    <React.Fragment>
      <Container>
    <Row>
      <Col>
        
      <h1 className="review-h1">Please give us the Feedback</h1>
      <br></br>
      <Row></Row>
      </Col>
      </Row>
      <Row>
        <Col>
          <input type="text"
          onChange={getNames}
          placeholder = "name"
          value = {names} ></input>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
        <select onChange={getStars} className="select-stars" value={stars}>
          <option value="0">✰✰✰✰✰</option>
          <option value="1">⭐✰✰✰✰</option>
          <option value="2">⭐⭐✰✰✰</option>
          <option value="3">⭐⭐⭐✰✰</option>
          <option value="4">⭐⭐⭐⭐✰</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
        </Col>
        </Row>
        <Row className="mt-3">
          <Col md={{ span: 6 }}>
        <textarea
        className="form-control"
          onChange={getReview}
          placeholder="leave a review"
          value={review} >
        </textarea>
        </Col>
        </Row>
        <Row className="mt-5">
          <Col>
        <button onClick={addReview} className="submit-review">
          {" "}
          Submit a review
        </button>
        </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Row xs="auto" >
        <Col>
        <Figure className="fig1">
                  <Figure.Image
                    width={100}
                    height={15}
                    alt="171x180"
                    src="https://thumbs.dreamstime.com/b/red-thumbtack-round-metal-pushpin-attach-memo-pinned-documents-isolated-vector-pin-realistic-plastic-161714018.jpg"
                    />
                    Pinned Reviews
        </Figure>
        </Col>
        </Row>
        <card>
          {fullReview.map(
            review=><><Row key={review.id} xs="auto" >
            <Col>
            
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </Col>
            <Col>
                {review.name}
              <br></br>
              <Figure >
                <span className="review-star"> 
              <Rater  rating={Number(review.star)} total={5} interactive={false} />
              </span>2 days ago
              </Figure>
            </Col>
          </Row>
            <Row>
            <Col md={5}>
            <p>{review.text}</p>
            </Col>
          </Row></>
          )}
            
           
           
          
            
           
            </card>
      </Container>
     
    </React.Fragment>
  );
}

export default AddReviews;