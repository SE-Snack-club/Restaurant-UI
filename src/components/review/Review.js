import React, { useState, useEffect } from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./AddReviews.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddReviews() {
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");
  const [fullReview, setFullReview] = useState([]);

  function getStars(event) {
    setStars(Number(event.target.value));
  }

  function getReview(event) {
    setReview(event.target.value);
  }

  function addReview() {
    if (stars === 0 || review === "") {
      alert("You should submit a real feedback review");
    } else {
      setFullReview((fullReview) =>
        fullReview.concat({
          text: review,
          star: stars,
          id: Math.random() * 100,
        })
      );
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
        
      <h1>Please give us the Feedback</h1>
      </Col>
      </Row>
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
        <Row className="mt-3">
          <Col>
        <button onClick={addReview} className="submit-review">
          {" "}
          Submit a review
        </button>
        </Col>
        </Row>
      </Container>
      <Container>
      <div>
  
      {fullReview.map(({ id, text, star }) => (
          <ul key={id}>
            <li>
              <Rater rating={Number(star)} total={5} interactive={false} />
            </li>
            <li>
              <span>Feedback: {text}</span>
            </li>
          </ul>
        ))}
      </div>
      </Container>
    </React.Fragment>
  );
}

export default AddReviews;