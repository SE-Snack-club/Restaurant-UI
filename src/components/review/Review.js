// import React, { useState, useEffect } from "react";
// import Rater from "react-rater";
// import "react-rater/lib/react-rater.css";
// import "./AddReviews.css";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Figure from 'react-bootstrap/Figure';

// function AddReviews() {
//   const [stars, setStars] = useState(0);
//   const [review, setReview] = useState("");
//   const [names, setName] = useState("");
//   const [fullReview, setFullReview] = useState([{
//     name:"Bharath",
//     text:"Spacious restaurant with delicious food: perfect for dine in and parties of all size. Lots of delicious options! A variety of curries, meats and veggies. ",
//     star:4,
//     id:1
//   }]);

//   function getStars(event) {
//     setStars(Number(event.target.value));
//   }

//   function getReview(event) {
//     setReview(event.target.value);
//   }

//   function getNames(event) {
//     setName(event.target.value);
//   }

//   function addReview() {
//     if (stars === 0 || review === "") {
//       alert("You should submit a real feedback review");
//     } else {
//       setFullReview((fullReview) =>
//         fullReview.concat({
//           name: names,
//           text: review,
//           star: stars,
//           id: Math.random() * 100,
//         })
//       );
//       setName("");
//       setReview("");
//       setStars(0);
//     }
//   }

//   useEffect(() => {
//     console.log('fullReview', fullReview)
// }, [fullReview])

//   useEffect(() => {
//     const fullReview = JSON.parse(localStorage.getItem('fullReview'));
//     if (fullReview) {
//      setFullReview(fullReview);
//     }
//   }, []);

//   useEffect(() =>{
//     window.localStorage.setItem('fullReview',JSON.stringify(fullReview));
//   },[fullReview]);

  
//   return (
//     <React.Fragment>
//       <Container>
//     <Row>
//       <Col>
        
//       <h1 className="review-h1">Please give us the Feedback</h1>
//       <br></br>
//       <Row></Row>
//       </Col>
//       </Row>
//       <Row>
//         <Col>
//           <input type="text"
//           onChange={getNames}
//           placeholder = "name"
//           value = {names} ></input>
//         </Col>
//       </Row>
//       <br></br>
//       <Row>
//         <Col>
//         <select onChange={getStars} className="select-stars" value={stars}>
//           <option value="0">✰✰✰✰✰</option>
//           <option value="1">⭐✰✰✰✰</option>
//           <option value="2">⭐⭐✰✰✰</option>
//           <option value="3">⭐⭐⭐✰✰</option>
//           <option value="4">⭐⭐⭐⭐✰</option>
//           <option value="5">⭐⭐⭐⭐⭐</option>
//         </select>
//         </Col>
//         </Row>
//         <Row className="mt-3">
//           <Col md={{ span: 6 }}>
//         <textarea
//         className="form-control"
//           onChange={getReview}
//           placeholder="leave a review"
//           value={review} >
//         </textarea>
//         </Col>
//         </Row>
//         <Row className="mt-5">
//           <Col>
//         <button onClick={addReview} className="submit-review">
//           {" "}
//           Submit a review
//         </button>
//         </Col>
//         </Row>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <Row xs="auto" >
//         <Col>
//         <Figure className="fig1">
//                   <Figure.Image
//                     width={100}
//                     height={15}
//                     alt="171x180"
//                     src="https://thumbs.dreamstime.com/b/red-thumbtack-round-metal-pushpin-attach-memo-pinned-documents-isolated-vector-pin-realistic-plastic-161714018.jpg"
//                     />
//                     Reviews
//         </Figure>
//         </Col>
//         </Row>
//         <card>
//           {fullReview.map(
//             review=><><Row key={review.id} xs="auto" >
//             <Col>
            
//                 <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
//                   <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
//                   <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
//                 </svg>
//             </Col>
//             <Col>
//                 {review.name}
//               <br></br>
//               <Figure >
//                 <span className="review-star"> 
//               <Rater  rating={Number(review.star)} total={5} interactive={false} />
//               </span>2 days ago
//               </Figure>
//             </Col>
//           </Row>
//             <Row>
//             <Col md={5}>
//             <p>{review.text}</p>
//             </Col>
//           </Row></>
//           )}
            
           
           
          
            
           
//             </card>
//       </Container>
     
//     </React.Fragment>
//   );
// }

// export default AddReviews;
import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Review() {
  const [name, setname] = useState("")
  const [description, setdescription] = useState("")
  const [img, setimg] = useState("")
 
  const [trating, settrating] = React.useState(0)
  const [param, setparam] = useState("null")
  const [open, setOpen] = React.useState(false);
  const [reviews, setreviews] = useState([])
  const handleClose = () => setOpen(false)
  function rating(star) {
    star = parseInt(star)
    let s = []
    if (star > 5) {
      star = 5
    }
    for (let i = 1; i <= star; i++) {
      s.push(<i id={i} onClick={e => settrating(e.target.id)} class="fa-solid fa-star"></i>)
    }
    for (let i = star + 1; i <= 5; i++) {
      console.log("adding")
      s.push(<i id={i} onClick={e => settrating(e.target.id)} class="fa-regular fa-star"></i>)
    }
    console.log(s.length);
    return s
  }
  const bfimage = (im) => {
    if (im) {
      // console.log(im.data.data[10])
      const base64String = btoa(
        String.fromCharCode(...new Uint8Array(im.data.data))
      )
      return (<img className="border rounded" src={`data:image/png;base64,${base64String}`} width="120px" height="120px" />)
    }
    else {
      console.log("no image")
    }
  }
  const addReview = () => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('stars', trating);
    formData.append('description', description);
    formData.append('image', img);
    console.log("fdata", formData)
    axios.post(`${process.env.REACT_APP_API_URL}/review/addreviews`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(data => { console.log(data); getReviews() })
  }
  const getReviews = (param) => {
    if (param === null)
      param = "null"
    console.log("param ", param)
    axios.get(`${process.env.REACT_APP_API_URL}/review/getreviews/${param}`).then(data => { console.log(data.data.items); setreviews(data.data.items) })
  }
  React.useEffect(getReviews, [])

  // console.log("img",img)
  return (
    <Container fluid>
      <Row>
        <Col style={{ display: "flex", justifyContent: "center", marginTop: "40px" }} xs={12} sm={12} md={12} lg={12} xl={12} xxl={!2}>
          <Button onClick={e => {
            setOpen(true)
            setname("")
            settrating(0)
            setdescription("")
          }}>Write Review</Button>
        </Col>
      </Row>
      <Row>
        <Col style={{ display: "flex", justifyContent: "center", marginTop: "40px" }} xs={12} sm={12} md={12} lg={12} xl={12} xxl={!2}>

          <Button style={{ backgroundColor: "white", color: "black", border: "1px solid pink" }} className="me-1" onClick={async e => { await setparam("newest"); await getReviews(param) }}>Newest</Button>
          <Button style={{ backgroundColor: "white", color: "black", border: "1px solid pink" }} className="me-1" onClick={async e => { await setparam("lowrating"); await getReviews(param) }}>Low Rated</Button>
          <Button style={{ backgroundColor: "white", color: "black", border: "1px solid pink" }} className="me-1" onClick={async e => { await setparam("highrating"); await getReviews(param) }}>Top Rated</Button>

        </Col>
      </Row>
      <Row>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Row>
                <Col>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="me-3" >Name</Form.Label>
                      <Form.Control type="text" value={name} onChange={e => setname(e.target.value)} placeholder='Enter Your Name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="me-3">Rating</Form.Label>
                      {
                        console.log("rating ", trating)
                      }
                      {
                        rating(trating).map((item, index) =>
                          <Button id={index} variant="flat" style={{ color: "black" }}
                          //  onClick={e => settrating(parseInt(e.target.id))}
                          >{item}</Button>
                        )
                      }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTextArea">
                      <Form.Control
                        rows="10"
                        cols="50"
                        // as="textarea"
                        value={description}
                        onChange={e => setdescription(e.target.value)}
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      {/* <Form.Label>Add Image</Form.Label> */}
                      <input accept=".png, .jpg, .jpeg, .gif" name="image" id="image" type="file" onChange={e => setimg(e.target.files[0])} placeholder="" />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <Button className="me-2" style={{ fontWeight: "bold" }} onClick={e => {
                    setOpen(false)
                    setname("")
                    settrating(0)
                    setdescription("")
                  }}>close</Button>
                  {
                    (name !== "" && trating !== 0 && description !== "") ?
                      <Button style={{ fontWeight: "bold", backgroundColor: "gray" }} onClick={e => {
                        addReview()
                        setOpen(false)
                      }}>Submit Review</Button>
                      :
                      null
                  }
                </Col>
              </Row>
            </Box>
          </Fade>
        </Modal>
      </Row>
      <Container>
        <Row className="mt-3"><h3>Comments & Ratings</h3></Row>
        {
          reviews.map(item =>
            <Row className="mt-4 mb-4">
              <Row><Col ><h5 style={{ display: "flex" }}>{item.name}</h5><p style={{ color: "gray" }}>Posted on {item.createdAt.split("T")[0].split("-").join("/")} at {item.createdAt.split("T")[1].split(".")[0].split(":")[0]}:{item.createdAt.split("T")[1].split(".")[0].split(":")[1]}</p></Col></Row>
              <Row></Row>
              <Row>
                <Col xs="12" md="12" sm="12" xxl="12" style={{ display: "flex", justifyContent: 'start' }}>{rating(item.stars)}</Col>
              </Row>
              <Row className="ms-1 mb-1 mt-1">{item.description}</Row>
              <Row>
                <Col>
                  {
                    bfimage(item.image)
                  }
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={e => {
                    axios.delete(`${process.env.REACT_APP_API_URL}/review/deletereview/${item._id}`).then(data => { console.log(data.data.items); getReviews() })
                  }
                  }>Delete</Button>
                </Col>
              </Row>
            </Row>
          )
        }
      </Container>
    </Container>
  )
}

