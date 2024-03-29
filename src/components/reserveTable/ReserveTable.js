import React, { useState, useEffect } from 'react'
import white8 from "./images/white8.png"
import green8 from "./images/green8.png"
import gray8 from "./images/gray8.png"
import white2 from "./images/white2.png"
import green2 from "./images/green2.png"
import gray2 from "./images/gray2.png"
import gray5 from "./images/gray5.png"
import gray4 from "./images/gray4.png"
import white4 from "./images/white4.png"
import white5 from "./images/white5.png"
import green5 from "./images/green5.png"
import green4 from "./images/green4.png"
import whiteh2 from "./images/whiteh2.png"
import greenh2 from "./images/greenh2.png"
import grayh2 from "./images/grayh2.png"
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Table from 'react-bootstrap/Table';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
// function getStyles(name, personName, theme) {
//     return {
//         fontWeight:
//             personName.indexOf(name) === -1
//                 ? theme.typography.fontWeightRegular
//                 : theme.typography.fontWeightMedium,
//     };
// }
export default function ReserveTable() {
    const [value, setvalue] = React.useState("");
    const [tb1, settb1] = useState(white5);
    const [tb2, settb2] = useState(white5);
    const [tb3, settb3] = useState(white4);
    const [tb4, settb4] = useState(white4);
    const [tb5, settb5] = useState(white4);
    const [tb6, settb6] = useState(whiteh2);
    const [tb7, settb7] = useState(white2);
    const [tb8, settb8] = useState(white2);
    const [tb9, settb9] = useState(white8);
    const [tb10, settb10] = useState(white8);
    const theme = useTheme();
    const [checkin, setcheckin] = React.useState([]);
    const [checkout, setcheckout] = React.useState([]);
    const [table, settable] = useState("");
    const loggedDetails = useSelector(state => state.loginReducer);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const date = new Date();
    const copyDate=addDays(date,30);
    let navigate = useNavigate();
    const [show, setshow] = useState(false);
    const [showTablesView, setshowTablesView] = useState(false);
    const [showFillDetails, setShowFillDetails] = useState(false);
    const [showCancelModel, setshowCancelModel] = useState(false);
    const [cancelId, setCancelId] = useState("");
    const [reason, setReason] = useState("");
    let userid = useSelector((state) => state.loginReducer.userInfo.userId);
    let userRole = useSelector((state) => state.loginReducer.userInfo.role);
    const getLoginInfo = async () => {
        try {
            if(!userid)
                {
                    if(localStorage.getItem("user"))
                    {
                    let tempUserid=JSON.parse(localStorage.getItem("user"));
                    userid=tempUserid.userId;
                    }
                }
                if(!userRole)
                {
                    if(localStorage.getItem("user"))
                    {
                        let tempUserRole=JSON.parse(localStorage.getItem("user"));
                        userRole=tempUserRole.role;
                    }
                }
            let info = await axios.post(`${process.env.REACT_APP_API_URL}/reserve/finduser`, {userid}, {
                
                headers: { "content-type": "application/json" }
              });
            setname(info.data[0].fname+" "+info.data[0].lname);
            setemail(info.data[0].email);
            setphone(info.data[0].phone);
        } catch (e) {
            console.log(e); 
        }
    }
    function addDays(date, days) {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + days)
        return copy
      }
    useEffect(() => {
        getLoginInfo();
    },[]);
    const handleClose = () => {
        getseats();
        gettables();
        setshow(false);
        setshowCancelModel(false);
    }
    const handleShow = () => {
        setshow(true);
    }
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setcheckin(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeout = (event) => {
        const {
            target: { value },
        } = event;
        setcheckout(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [details] = useState([value, checkin, checkout]);
    const [booked, setbooked] = useState([]);
    const [usertables, setusertables] = useState([]);
    const today = new Date();
    const checkintimes = [];
    checkintimes.push("7:00");
    checkintimes.push("7:30");
    for (let i = 8; i < 21; i++) {
        checkintimes.push(i.toString() + ":00")
        checkintimes.push(i.toString() + ":30")
    }
    const checkouttimes = [];
    checkouttimes.push("7:30");
    for (let i = 8; i < 22; i++) {
        checkouttimes.push(i.toString() + ":00")
        checkouttimes.push(i.toString() + ":30")
    } 
    const getUserTables = async() => {
        try{
            let userReservations = await axios.get(`${process.env.REACT_APP_API_URL}/reserve/usertables/${userid}`);
            let userd=userReservations.data;
            for (let i = 0; i < userd.data.length; i++) {
                userd.data[i] = { ...userd.data[i], "sno": i + 1 }
            }
            setusertables(userd.data);
        }
        catch (e) {
            console.log("Error");
        }
    }
    const gettables = async() => {
        try {
            let countRes = await axios.get(`${process.env.REACT_APP_API_URL}/reserve/mytables`);
            let d=countRes.data;
            let i = 0;
            let k=0
            let finalData={};
            for (i = 0; i < d.data.length; i++) {
                if(d.data.isActive===true)
                {
                    finalData[i] = { ...d.data[i], "sno": k + 1 }
                    k=k+1
                }
            }
           // setmytables(d.data);
            let userReservations = await axios.get(`${process.env.REACT_APP_API_URL}/reserve/usertables/${userid}`);
            let userd=userReservations.data;
            for (i = 0; i < userd.data.length; i++) {
                userd.data[i] = { ...userd.data[i], "sno": i + 1 }
            }
            setusertables(userd.data);
            } 
        catch (e) {
            console.log("Error");
        }
    }
    const getseats = () => {
        if (checkin.length !== 0 && checkout.length !== 0 && value !== "") {
            if (parseInt(checkin[0].split(":").join("")) < parseInt(checkout[0].split(":").join(""))) {
                let i = parseInt(checkin[0].split(":").join(""))
                let o = parseInt(checkout[0].split(":").join(""))
                fetch(`${process.env.REACT_APP_API_URL}/reserve/getseats/${value}/${i}/${o}`, {
                    headers: {
                        'ContentType': 'application/json',
                    }
                }
                ).then(data => data.json()).then(data => {
                    if (data.status === 200) {
                        data = data.data
                        let org = []
                        for (let i = 0; i < data.length; i++) {
                            let tab = data[i].table
                            if (tab === 1) { settb1(gray5); org.push(tab) }
                            if (tab === 2) { settb2(gray5); org.push(tab) }
                            if (tab === 3) { settb3(gray4); org.push(tab) }
                            if (tab === 4) { settb4(gray4); org.push(tab) }
                            if (tab === 5) { settb5(gray4); org.push(tab) }
                            if (tab === 6) { settb6(grayh2); org.push(tab) }
                            if (tab === 7) { settb7(gray2); org.push(tab) }
                            if (tab === 8) { settb8(gray2); org.push(tab) }
                            if (tab === 9) { settb9(gray8); org.push(tab) }
                            if (tab === 10) { settb10(gray8); org.push(tab) }
                        }
                        setbooked(org)
                        for (i = 1; i <= 10; i++) {
                            if (org.includes(i)) {

                            }
                            else {
                                if (i === 1) { settb1(white5) }
                                if (i === 2) { settb2(white5) }
                                if (i === 3) { settb3(white4) }
                                if (i === 4) { settb4(white4) }
                                if (i === 5) { settb5(white4) }
                                if (i === 6) { settb6(whiteh2) }
                                if (i === 7) { settb7(white2) }
                                if (i === 8) { settb8(white2) }
                                if (i === 9) { settb9(white8) }
                                if (i === 10) { settb10(white8) }
                            }
                        }
                    }
                })

            }
        }
        else {
            // console.log("no")
        }
    }
    const processtime = (time) => {
        let t = time.toString().split("");
        if (t.length === 1) {
            let hr = "00"
            let min = "00"
            return (hr + ":" + min)
        }
        if (t.length === 2) {
            let hr = "0" + t[0]
            let min = t[1] + "0"
            return (hr + ":" + min)
        }
        if (t.length === 3) {
            let hr = "0" + t[0]
            let min = t[1] + t[2]
            return (hr + ":" + min)
        }
        if (t.length === 4) {
            let hr = t[0] + t[1]
            let min = t[2] + t[3]
            return (hr + ":" + min)
        }
    }
    const bookseat = (table) => {
        console.log("booking...")
        fetch(`${process.env.REACT_APP_API_URL}/reserve/bookseat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: userid, name: name, email: email, phone: phone, status: 'confirmed', table: table, date: value, checkin: parseInt(checkin[0].split(":").join("")), checkout: parseInt(checkout[0].split(":").join("")) })
        }).then(data => data.json()).then(data => {
            console.log("booked")
            gettables()
            getUserTables()
            getseats()
        }
        )
    }
    const cancel = () => {
        console.log("cancelling...");
        fetch(`${process.env.REACT_APP_API_URL}/reserve/cancel`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ reserveId: cancelId, status: "cancelled", comments: reason})
        }).then(data => data.json()).then(data => {
            if(data.status === 200){
                console.log("updating tables and setting Table")
                getseats()
                gettables()
                getUserTables()
            }
        })
    }
    useEffect(()=>{
        gettables()
    },[]);
    useEffect(()=>{
        getseats()
    },[details]);
    useEffect(()=>{
        getUserTables()
    },[]);
    if (!loggedDetails.isLogged) 
    return (
                <Modal
                    show = {!loggedDetails.isLogged}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Login Required
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <p>
                            <Alert variant="warning"><h5>Please Login to access this page.</h5></Alert>
                        
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button  variant="primary" onClick={() =>navigate('/login') }>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
    
    );
    return (
        <div>
            <div className="modal fade" tabIndex="-1" aria-hidden="true">
                {
                    <>
                        <Modal show={showCancelModel} onHide={() => { handleClose() } } keyboard={false}>
                            <Modal.Header>
                                <Modal.Title>Comments</Modal.Title>
                                <button type="button" className="btn-close" aria-label="Close" onClick={e => { handleClose() } }></button>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <FormGroup row>
                                        <Label htmlFor="message" md={2}>Reason</Label>
                                        <Col md={10}>
                                            <Input type="textarea" id="message" name="message" className='contact-textarea'

                                                placeholder="Please specify reason for cancellation"
                                                rows={3}
                                                cols={5}
                                                value={reason}
                                                maxLength={10000}
                                                onChange={e => setReason(e.target.value)}></Input>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <button type="button" className="btn btn-secondary"  onClick={e => { getseats(); gettables(); handleClose() } }>Close</button>
                                <button type="button"  onClick={e => {
                                    cancel()
                                    getUserTables()
                                    handleClose()
                                } } className="btn btn-danger">Cancel</button>
                            </Modal.Footer>
                        </Modal>
                        {
                        (checkin!="" && checkout!="" && userRole=="Customer")?
                        (parseInt(checkout[0].split(":").join("")) - parseInt(checkin[0].split(":").join("")))>200?
                        <div>
                        <Modal show={show} onHide={() => { handleClose(); setshowTablesView(false) } } backdrop="static" keyboard={false}>
                            <Modal.Header>
                                <Modal.Title>Error</Modal.Title>
                                <button type="button" className="btn-close" onClick={e => { getseats(); getUserTables(); gettables(); handleClose(); setshowTablesView(false) } } aria-label="Close"></button>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>Time slot should not exceed 2 hours</h5>
                            </Modal.Body>
                        </Modal>
                        </div>:
                        void(0):void(0)
                            }
                        </>
                }
                {
                    value !== "" && checkin.length !== 0 && checkout.length !== 0 ?
                        parseInt(checkin[0].split(":").join("")) < parseInt(checkout[0].split(":").join("")) ?
                            booked.includes(table) ?
                            
                            <Modal show={show} onHide={()=>{handleClose();getseats();gettables();settable("")}} backdrop="static" keyboard={false}>
                                        <Modal.Header>
                                        <Modal.Title>Table Reserved</Modal.Title>
                                            <button type="button" className="btn-close" aria-label="Close" onClick={e=>{getseats();gettables();handleClose();settable("")}}></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h5>!!!Oops table already reserved</h5>
                                        </Modal.Body>

                            </Modal> :
                                <Modal show={show && showFillDetails && showTablesView} onHide={()=>{handleClose();setShowFillDetails(false);getseats();gettables();getUserTables()}} backdrop="static" keyboard={false}>
                                        <Modal.Header>
                                        <Modal.Title>Please fill your details</Modal.Title>
                                            <button type="button" className="btn-close" onClick={e=>{setShowFillDetails(false);getseats();gettables();handleClose();getUserTables()}} aria-label="Close"></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                            <FormGroup row>
                                            <Label htmlFor="name" md={3}>Name</Label>
                                                <Col md={7}>
                                                    <Input type="text" id="name" name="name"
                                                        required
                                                        placeholder="Enter Your Name"
                                                        value={name}
                                                        onChange={e => setname(e.target.value)} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                            <Label htmlFor="telephone" md={3}>Telephone</Label>
                                                <Col md={7}>
                                                    <Input type='tel' id="telephone" name="telephone"
                                                        placeholder="Enter Your Mobile Number"
                                                        value={phone}
                                                        onChange={e => setphone(e.target.value)} />
                                                </Col>
                                            </FormGroup>
                                            
                                            <FormGroup row>
                                            <Label htmlFor="email" md={3}>Email</Label>
                                                <Col md={7}>
                                                     <Input type="email" id="email" name="email"
                                                        required
                                                        // placeholder="Enter a Valid email address"
                                                        value={email}
                                                        readOnly = {true}
                                                        // onChange={e => setemail(e.target.value)} 
                                                        />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                            <Label htmlFor="date" md={3}>Date</Label>
                                                <Col md={7}>
                                                    <Input type='Date' id="date" name="date"
                                                        readOnly = {true}
                                                        value={value}
                                                         />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                            <Label htmlFor="time" md={3}>Time Slot</Label>
                                                <Col md={7}>
                                                    <Input type='text' id="time" name="time"
                                                        readOnly = {true}
                                                        value={checkin+" - "+checkout}
                                                         />
                                                </Col>
                                            </FormGroup>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button type="button" className="btn btn-secondary" onClick={e=>{setShowFillDetails(false);getseats();gettables();getUserTables(); handleClose()}}>Close</button>
                                            {
                                                name !=="" && email !=="" && phone !=="" && 
                                                    <button type="button" onClick={e => {
                                                        bookseat(table);
                                                        handleClose()
                                                    }} className="btn btn-primary">Book Seat</button>
                                            }

                                        </Modal.Footer>
                                    </Modal>
                            :
                            <Modal show={show} onHide={()=>{getseats();gettables();getUserTables();handleClose();setshowTablesView(false)}} backdrop="static" keyboard={false}>
                                    <Modal.Header>
                                        <Modal.Title>Error in date or time</Modal.Title>
                                        <button type="button" onClick={e=>{getseats();getUserTables();gettables();handleClose();setshowTablesView(false)}} className="btn-close" aria-label="Close"></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h5>invalid date or time</h5>
                                    </Modal.Body>
                            </Modal>
                        :
                        <Modal show={show} onHide={()=>{handleClose();setshowTablesView(false)}} backdrop="static" keyboard={false}>
                                <Modal.Header>
                                <Modal.Title>Error</Modal.Title>
                                    <button type="button" className="btn-close" onClick={e=>{getseats();getUserTables();gettables();handleClose();setshowTablesView(false)}} aria-label="Close"></button>
                                </Modal.Header>
                                <Modal.Body>
                                    <h5>Invalid date or time</h5>
                                </Modal.Body>
                        </Modal>
                }
            </div>
            <Container fluid>
            <h2 >Reserve Table</h2>
            <Card border="warning">
                <div className="row col-12 col-md-12 col-xl-12 col-lg-12 mt-5 mb-4">
                    <div className='d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-4 col-xl-4'>
                        <h5>Date: </h5>
                        <input name="somedate" className='form-control-sm py-3 px-5 border'
                            type="date"
                            style={{ border: "2px solid black" }}
                            onFocus={() => {setshowTablesView(false);settable("");setshow(false)}}
                            value={value}
                            onChange={e => setvalue(e.target.value)}
                            min={
                                userRole=="Admin"?
                                date.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0')
                                :
                                date.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()+1).padStart(2, '0')
                            }
                            max={
                                userRole=="Admin"?
                                null
                                :
                                copyDate.getFullYear() + "-" + String(copyDate.getMonth() + 1).padStart(2, '0') + "-" + String(copyDate.getDate()+1).padStart(2, '0')
                            }
                            >   
                        </input>
                    </div>
                    <div className='d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-4 col-xl-4'>
                        <h5>Check-In Time: </h5><FormControl onFocus={() =>{setshowTablesView(false); settable("");setshow(false)}} sx={{ m: 1, width: 300 }}>
                            <Select
                                displayEmpty
                                value={checkin}
                                onChange={handleChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Checkin Time</em>;
                                    }

                                    return selected.join(', ');
                                } }
                                MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value="">
                                    <em>Check In Time</em>
                                </MenuItem>
                                {checkintimes.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        //style={getStyles(name, checkin, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className='d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-4 col-xl-4'>
                        <h5>Check-Out Time: </h5><FormControl onFocus={() => {setshowTablesView(false);settable("");setshow(false)}} sx={{ m: 1, width: 300 }}>
                            <Select
                                displayEmpty
                                value={checkout}
                                onChange={handleChangeout}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <em>Checkout Time</em>;
                                    }
                                    return selected.join(', ');
                                } }
                                MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value="">
                                    <em>Check Out Time</em>
                                </MenuItem>
                                {checkouttimes.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        // style={getStyles(name, checkout, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="row">
                        <div className='mt-4 d-flex justify-content-center align-items-center col-lg-12 col-md-12 col-12 col-xl-12'>
                            <button className="btn" disabled={!(checkin.length !== 0 && checkout.length !== 0 && value !== "")}
                                style={{ backgroundColor: "orange", color: "black", fontWeight: "bold6" }} onClick={e => {
                                    setShowFillDetails(false);
                                    handleShow();
                                    getseats();
                                    gettables();
                                    getUserTables();
                                    {
                                        value !== "" && checkin.length !== 0 && checkout.length !== 0 ?
                                    parseInt(checkin[0].split(":").join("")) < parseInt(checkout[0].split(":").join("")) ?
                                        booked.includes(table)?
                                        void(0):
                                        setshowTablesView(true)
                                        :void(0):void(0)
                                    }
                                } }>
                                Show Tables
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        showTablesView ?
                        <div className="square bg-warning rounded-pill" >
                                {/* row1 */}
                            <div className="row col-12 col-md-12 col-xl-12 col-lg-12 ">
                                <div className='col-lg-3 col-md-4 col-12 mt-3 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h4>Table 1</h4>
                                        </div>
                                        <button className="btn"
                                            onClick={e => {
                                                setShowFillDetails(true)
                                                handleShow()
                                                settable(1)
                                                settb1(green5)
                                            }}>
                                            <img src={tb1} title="Table 1 - 5 Seater" alt="Table 1 - 5 Seater"/>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h4>Table 3</h4>
                                        </div>
                                        <button className="btn"
                                            onClick={e => {
                                                setShowFillDetails(true)
                                                handleShow()
                                                settable(3)
                                                settb3(green4)
                                            }}>
                                            <img src={tb3} title="Table 3 - 4 Seater" alt="Table 3 - 4 Seater"/>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h4>Table 5</h4>
                                        </div>
                                        <button className="btn"
                                            onClick={e => {
                                                setShowFillDetails(true)
                                                handleShow()
                                                settable(5)
                                                settb5(green4)
                                            }}>
                                            <img src={tb5} title="Table 5 - 4 Seater" alt="Table 5 - 4 Seater"/>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-1 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h4>Table 7</h4>
                                        </div>
                                        <button className="btn"
                                            onClick={e => {
                                                setShowFillDetails(true)
                                                handleShow()
                                                settable(7)
                                                settb7(green2)
                                            }}>
                                            <img src={tb7} title="Table 7 - 2 Seater" alt="Table 7 - 2 Seater"/>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-4 col-12 mt-2 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h4>Table 9 </h4>
                                        </div>
                                        <button className="btn"
                                            onClick={e => {
                                                setShowFillDetails(true)
                                                handleShow()
                                                settable(9)
                                                settb9(green8)
                                            }}>
                                            <img src={tb9} title="Table 9 - 8 Seater" alt="Table 9 - 8 Seater"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* row2 */}
                            <div className="row col-12 col-md-12 col-xl-12 col-lg-12">
                                <div className='col-lg-3 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h4>Table 2</h4>
                                        </div>
                                        <button className="btn"
                                            onClick={e => {
                                                setShowFillDetails(true)
                                                handleShow()
                                                settable(2)
                                                settb2(green5)
                                            }}>
                                            <img src={tb2} title="Table 2 - 5 Seater" alt="Table 2 - 5 Seater"/>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h4>Table 4</h4>
                                        </div>
                                        <button className="btn"
                                            onClick={e => {
                                                setShowFillDetails(true)
                                                handleShow()
                                                settable(4)
                                                settb4(green4)
                                            }}>
                                            <img src={tb4} title="Table 4 - 4 Seater" alt="Table 4 - 4 Seater"/>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-4 col-12 mt-3 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h4>Table 6</h4>
                                        </div>
                                        <button className="btn"
                                            onClick={e => {
                                                setShowFillDetails(true)
                                                handleShow()
                                                settable(6)
                                                settb6(greenh2)
                                            }}>
                                            <img className="mt-5" src={tb6} title="Table 6 - 2 Seater" alt="Table 6 - 2 Seater"/>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-1 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h4>Table 8</h4>
                                        </div>
                                        <button className="btn"
                                            onClick={e => {
                                                setShowFillDetails(true)
                                                handleShow()
                                                settable(8)
                                                settb8(green2)
                                            }}>
                                            <img src={tb8} title="Table 8 - 2 Seater" alt="Table 8 - 2 Seater"/>
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-4 col-12 mt-2 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <h4>Table 10</h4>
                                        </div>
                                        <button className="btn"
                                            onClick={e => {
                                                setShowFillDetails(true)
                                                handleShow()
                                                settable(10)
                                                settb10(green8)
                                            }}>
                                            <img src={tb10} title="Table 10 - 8 Seater" alt="Table 10 - 8 Seater"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> : null
                    }
                </div>
            </Card>
            <br></br>
            <br></br>
            <h2>Reservations</h2>
            <Card border="warning">
                    <div className='container-fluid table-bordered'>
                    <div className="row row-content">
                    <div className="container-fluid table-bordered">
                        <Table striped>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Table No</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Check In</th>
                                    <th scope="col">Check Out</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Comments</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {usertables &&
                                    usertables.map(item =>
                                        <tr key={item.reserveId}>
                                            <th scope="row">{item.sno}</th>
                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.table}</td>
                                            <td>{item.date}</td>
                                            <td>{processtime(item.checkin)}</td>
                                            <td>{processtime(item.checkout)}</td>
                                            <td>
                                                <div className="d-flex">
                                                    {item.status==='confirmed' && <h6 className="p-2 bg-success text-light">Confirmed</h6>}
                                                    {item.status==='cancelled' && <h6 className="p-2 bg-danger text-light">Cancelled</h6>}
                                                </div>
                                            </td>
                                            <td>{item.comments}</td>
                                            <td>
                                                {
                                                 item.status==='confirmed' &&    
                                                <button className="btn btn-info" onClick={async (e) => {
                                                       //await cancel(item._id)
                                                       await setCancelId(item.reserveId)
                                                       await setshowCancelModel(true)
                                                        await gettables()
                                                        await getUserTables()
                                                        await getseats()
                                                    }}>cancel</button>
                                                }
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                    </div>
                </div>
            </Card>
            </Container>
        </div>
    );
}