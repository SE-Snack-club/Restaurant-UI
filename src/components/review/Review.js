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
  const [fullReview, setFullReview] = useState([]);

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
        
      <h1>Please give us the Feedback</h1>
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
        <card>
            <Row xs="auto" >
              <Col>
              
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
              </Col>
              <Col>
                  Sai Ram
                <br></br>
                <Figure>
                  <Figure.Image
                    width={100}
                    height={15}
                    alt="171x180"
                    src="data:image/png;base64,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"
                  />
                 2 days ago
                </Figure>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
              <p>I had chicken 65 which was excellent taste and the
              curries are Delicious with good spice and flavor.
              It was the best restaurant ever I had.</p>
              </Col>
            </Row>
            <Row xs="auto" >
              <Col>
              
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
              </Col>
              <Col>
                  Martin
                <br></br>
                <Figure>
                  <Figure.Image
                    width={100}
                    height={15}
                    alt="171x180"
                    src="data:image/png;base64,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"
                  />
                 5 days ago
                </Figure>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
              <p>Enjoyed a lot. Must try restaurant for Indian Cuisine</p>
              </Col>
            </Row>
            <Row xs="auto" >
              <Col>
              
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
              </Col>
              <Col>
                  Catherine
                <br></br>
                <Figure>
                  <Figure.Image
                    width={100}
                    height={15}
                    alt="171x180"
                    src="https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg"
                  />
                 8 days ago
                </Figure>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
              <p>Spacious restaurant with delicious food: perfect for dine in and parties of all size. Had the dinner buffet here on a Saturday night. Lots of delicious options! A variety of curries, meats and veggies.</p>
              </Col>
            </Row>
            </card>
      </Container>
      <Container>
      <div>
  
      {fullReview.map(({ id, name, text, star }) => (
          <ul key={id}>
            <li>
              <span> {name}</span>
            </li>
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