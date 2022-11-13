import React, { useState, useEffect } from 'react'
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import profile from "./profile.jpg"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SettingsOverscanTwoTone } from '@mui/icons-material'

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
  const [openreply, setopenreply] = useState(false)
  const [name, setname] = useState("")
  const [stars, setstars] = useState(0)
  const [description, setdescription] = useState("")
  const [img, setimg] = useState("")
  const [nrating, setnrating] = useState("")
  const [modalShow, setModalShow] = React.useState(false);
  const [trating, settrating] = React.useState(0)
  const [param, setparam] = useState("null")
  const [open, setOpen] = React.useState(false);
  const [ropen, setrOpen] = React.useState(false);
  const [reviews, setreviews] = useState([])
  const [gotreplies, setgotreplies] = useState([]);
  const [replyid, setreplyid] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  const handlerOpen = () => setrOpen(true);
  const handlerClose = () => setrOpen(false)
  const [reply, setreply] = useState("")
  const [avgrating, setavgrating] = useState(0)
  let navigate=useNavigate();
  let userid = useSelector((state) => state.loginReducer.userInfo.userId);
  let userRole = useSelector((state) => state.loginReducer.userInfo.role);
  function rating(star) {
    star = parseInt(star)
    let s = []
    if (star > 5) {
      star = 5
    }
    for (let i = 1; i <= star; i++) {
      s.push(<i id={i} onClick={e => settrating(e.target.id)} className="fa fa-star" aria-hidden="false"></i>)
    }
    for (let i = star + 1; i <= 5; i++) {
      console.log("adding")
      s.push(<i id={i} onClick={e => settrating(e.target.id)} className="fa">&#xf006;</i>)
    }
    console.log(s.length);
    return s
  }
  const [base64String, setBase64String] = useState("");
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

  console.log("reviews - ", reviews);
  const getReplies = (id) => {
    axios.get(`${process.env.REACT_APP_API_URL}/review/getreplies/${id}`).then(data => { console.log("replies ", data); setgotreplies(data.data) })
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
  const postreply = (reply, id) => {
    axios.post(`${process.env.REACT_APP_API_URL}/review/addreply/${id}`, { reply: reply }).then(data => { console.log(data); getReviews() })

  }
  const getLoginInfo = async () => {
    try {
        if(!userid)
            {
                let tempUserid=JSON.parse(localStorage.getItem("user"));
                userid=tempUserid.userId;
            }
    } catch (e) {
        console.log(e); 
    }
}
  const getReviews = (param) => {
    if (param === null)
      param = "null"
    console.log("param ", param)
    axios.get(`${process.env.REACT_APP_API_URL}/review/getreviews/${param}`).then(data => {
      console.log(data.data.items,"Retreived reviews"); setreviews(data.data.items);
      let sum = 0;
      for (let i = 0; i < data.data.items.length; i++) {
        sum += data.data.items[i].stars
      }
      setavgrating(parseInt(sum / data.data.items.length));
    })

  }
  // const getrating = () => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/review/rating`).then(data => { console.log(data.data); setavgrating(data.data) })
  // }
  React.useEffect(()=>{getReviews()}, [])
  // React.useEffect(getrating, [])
  React.useEffect(()=>{getLoginInfo()},[])
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
                  {
                    !userid? <p>Please login to write review</p>:
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
                  }
                </Col>
              </Row>
              <Row>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  {
                   !userid?
                   <Button className="me-2" style={{ fontWeight: "bold" }} onClick={e => {
                    navigate('/login');
                  }}>Login</Button>
                   :
                    <Button className="me-2" style={{ fontWeight: "bold" }} onClick={e => {
                    setOpen(false)
                    setname("")
                    settrating(0)
                    setdescription("")
                  }}>close</Button>
                  }
                  {
                    userid?
                    (name !== "" && trating !== 0 && description !== "") ?
                      <Button style={{ fontWeight: "bold", backgroundColor: "gray" }} onClick={e => {
                        addReview()
                        setOpen(false)
                      }}>Submit Review</Button>
                      :
                      null
                      : null
                  }
                  
                </Col>
              </Row>
            </Box>
          </Fade>
        </Modal>
      </Row>
      {/* replymodal */}
      <Row>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={ropen}
          onClose={handlerClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={ropen}>
            <Box sx={style}>
              <Row>
                <Col>
                  <Form>
                    <div>
                      <h4>Reply</h4>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicTextArea">
                      <Form.Control
                        rows="10"
                        cols="50"
                        // as="textarea"
                        value={reply}
                        onChange={e => setreply(e.target.value)}
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                      />
                    </Form.Group>

                  </Form>
                </Col>
              </Row>
              <Row>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <Button className="me-2" style={{ fontWeight: "bold" }} onClick={e => {
                    setrOpen(false)
                    setname("")
                    settrating(0)
                    setdescription("")
                  }}>close</Button>
                  {
                    (reply !== "") ?
                      <Button style={{ fontWeight: "bold", backgroundColor: "gray" }} onClick={e => {
                        postreply(reply, replyid);
                        setrOpen(false)
                        // getReviews()
                      }}>Submit</Button>
                      :
                      null
                  }
                </Col>
              </Row>
            </Box>
          </Fade>
        </Modal>
      </Row>
      {/* replymodal */}
      <Container>
        <Row className="mt-3"><h3>Comments & Ratings</h3></Row>
        <Row className="mt-3"><h3>Overall Rating {rating(avgrating)} - {avgrating} stars</h3></Row>
        {
          reviews.map(item =>
            <Row className="mt-4 mb-4">
              
              <Row><Col >
              
              <h5 style={{ display: "flex" }}><img style={{marginRight:'5px'}} src={profile} width="30px" /> {item.name}</h5><p style={{ color: "gray" }}>Posted on &nbsp;
              {item.createdAt.split("T")[0].split("-").join("/")} at {item.createdAt.split("T")[1].split(".")[0].split(":")[0]}:{item.createdAt.split("T")[1].split(".")[0].split(":")[1]}
              
              </p></Col></Row>
              <Row></Row>
              <Row>
                <Col xs="12" md="12" sm="12" xxl="12" style={{ display: "flex", justifyContent: 'start' }}>{rating(item.stars)}</Col>
              </Row>
              <Row className="ms-1 mb-1 mt-1">{item.description}</Row>
              <Row>
              {
                console.log(item.createdAt)
              }
                <Col>
                  {
                    bfimage(item.image)
                  }
                  {/* {item.image && <img className="border rounded" src={`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(item.image.data.data)))}`} width="120px" height="120px" />} */}
                </Col>
              </Row>
              <Row>
                <a style={{ color: "violet", fontWeight: "bold" }} onClick={e => {
                  setopenreply(!openreply)
                  getReplies(item._id)
                }}>Replies</a>
              </Row>
              {
                openreply ? item.replies.map(itm =>
                  <Row>
                    <div className="ms-4 mt-2 mb-2">
                    <img style={{marginRight:'5px'}} src={profile} width="30px" /> {itm}
                    </div>
                  </Row>
                )
                  :
                  null
              }
              <Row style={{ display: "flex", justifyContent: "start" }}>
                <Col className="mt-2">
                  <Button className="me-2" onClick={e => {
                    setrOpen(true)
                    setreplyid(item._id)
                    getReplies(item._id);
                    // axios.delete(`${process.env.REACT_APP_API_URL}/review/deletereview/${item._id}`).then(data => { console.log(data.data.items); getReviews() })
                  }
                  }>Reply</Button>

                  <Button onClick={e => {
                    axios.delete(`${process.env.REACT_APP_API_URL}/review/deletereview/${item._id}`).then(data => { console.log(data.data.items); getReviews(reply, item._id) })
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
