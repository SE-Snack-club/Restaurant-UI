import React, { useState, useEffect } from 'react'
import white8 from "./images/white8.png"
import gray8 from "./images/gray8.png"
import white2 from "./images/white2.png"
import gray2 from "./images/gray2.png"
import gray5 from "./images/gray5.png"
import gray4 from "./images/gray4.png"
import white4 from "./images/white4.png"
import white5 from "./images/white5.png"
import whiteh2 from "./images/whiteh2.png"
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
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import { FormGroup, Label, Input, Col, Button } from 'reactstrap';
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
    
    let navigate = useNavigate();
    const [show, setshow] = useState(false);
    const [showTablesView, setshowTablesView] = useState(false);
    const [showFillDetails, setShowFillDetails] = useState(false);
    const [showCancelModel, setshowCancelModel] = useState(false);
    const [cancelItem, setCancelItem] = useState({});
    const [reason, setReason] = useState("");
    let userid = useSelector((state) => state.loginReducer.userInfo.userId);
    let userRole = useSelector((state) => state.loginReducer.userInfo.role);
    const filterOptions = [{value: 'slot', text: 'Filter by Slot'}, {value: 'date', text: 'Filter by Date'}];
    const [filter, setFilter]=useState(filterOptions[0].value);
    const [showSlotView, setShowSlotView] = useState(true);
    const [showDateView, setShowDateView] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
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
        } catch (e) {
            console.log(e); 
        }
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
    const [mytables, setmytables] = useState([]);
    const [slotsData, setSlotsData] = useState([]);
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
    const gettables = async() => {
        try {
            let countRes = await axios.get(`${process.env.REACT_APP_API_URL}/reserve/mytables`);
            let d=countRes.data;
            let i = 0;
            for (i = 0; i < d.data.length; i++) {
                d.data[i] = { ...d.data[i], "sno": i + 1 }
            }
            setmytables(d.data);
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
                        setSlotsData(data);
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
        else if(showDateView && value!==""){
            fetch(`${process.env.REACT_APP_API_URL}/reserve/getseatsByDate/${value}`, {
                headers: {
                    'ContentType': 'application/json',
                }
            }
            ).then(data => data.json()).then(data => {
                if (data.status === 200) {
                    data = data.data
                    setSlotsData(data);
                }
            }
            )
        }
        else {}
    }
    const processtime = (time) => {
        if(time===null)
            return null;
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
    const cancel = () => {
        console.log("cancelling...");
        fetch(`${process.env.REACT_APP_API_URL}/reserve/cancel`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ reserveId: cancelItem.reserveId, status: "cancelled", comments: reason})
        }).then(data => data.json()).then(async(data) => {
            let info = await axios.post(`${process.env.REACT_APP_API_URL}/reserve/finduser`, {userid}, {
                
                headers: { "content-type": "application/json" }
              });
            cancelItem.email=info.data[0].email;
            cancelItem.comments=reason;
            cancelItem.checkin=processtime(cancelItem.checkin);
            cancelItem.checkout=processtime(cancelItem.checkout);
            emailjs.send('service_3efa5h5', 'template_pt4f2zl', cancelItem, 'Du6l3nJc-xfXaeaF1')
            .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    }, function(error) {
                    console.log('FAILED...', error);
            });
            if(data.status === 200){
                console.log("updating tables and setting Table")
                getseats()
                gettables()
            }
        })
    }
    useEffect(()=>{
        gettables()
    },[]);
    useEffect(()=>{
        getseats()
    },[details]);
    if (!loggedDetails.isLogged) 
    return (
      <Modal show = {!loggedDetails.isLogged} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
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
                                                required
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
                                <button type="button" className="btn btn-secondary" onClick={e => { getseats(); gettables(); handleClose() } }>Close</button>
                                
                                {
                                    reason && 
                                    <button type="submit" onClick={e => {

                                    cancel()
                                    handleClose()

                                } } className="btn btn-danger">Cancel</button>
                                }


                            </Modal.Footer>

                        </Modal>
                        </>
                }
                {
                    value !== "" && checkin.length !== 0 && checkout.length !== 0 ?
                        parseInt(checkin[0].split(":").join("")) < parseInt(checkout[0].split(":").join("")) ?
                            booked.includes(table) ?
                            <Modal show={show} onHide={()=>{handleClose();getseats();gettables();}} backdrop="static" keyboard={false}>
                                        <Modal.Header>
                                        <Modal.Title>Table Reserved</Modal.Title>
                                            <button type="button" className="btn-close" aria-label="Close" onClick={e=>{getseats();gettables();handleClose()}}></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h5>!!!Oops table already reserved</h5>
                                        </Modal.Body>

                            </Modal> :
                                <Modal show={show && showFillDetails && showTablesView} onHide={()=>{handleClose();getseats();gettables()}} backdrop="static" keyboard={false}>
                                        <Modal.Header>
                                        <Modal.Title>Please fill your details</Modal.Title>
                                            <button type="button" className="btn-close" onClick={e=>{setShowFillDetails(false);getseats();gettables();handleClose()}} aria-label="Close"></button>
                                        </Modal.Header>
                                </Modal>
                            :
                            <Modal show={show} onHide={()=>{getseats();gettables();handleClose();setshowTablesView(false)}} backdrop="static" keyboard={false}>
                                    <Modal.Header>
                                        <Modal.Title>Error in date or time</Modal.Title>
                                        <button type="button" onClick={e=>{getseats();gettables();handleClose();setshowTablesView(false)}} className="btn-close" aria-label="Close"></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h5>invalid date or time</h5>
                                    </Modal.Body>
                            </Modal>
                        :
                        <Modal show={show} onHide={()=>{handleClose();setshowTablesView(false)}} backdrop="static" keyboard={false}>
                                <Modal.Header>
                                <Modal.Title>Error</Modal.Title>
                                    <button type="button" className="btn-close" onClick={e=>{getseats();gettables();handleClose();setshowTablesView(false)}} aria-label="Close"></button>
                                </Modal.Header>
                                <Modal.Body>
                                    <h5>Invalid date or time</h5>
                                </Modal.Body>
                        </Modal>
                
                }

            </div>
            <Container fluid>
                <h2 >Filter Tables</h2>
                <Card border="warning">
                    <div className='d-flex justify-content-center col-lg-2 col-md-2 col-2 col-xl-2'>
                        <Form.Select aria-label="Default select example" value={filter} onChange={async (e)=>{
                            await setFilter(e.target.value);
                            if(e.target.value==='slot')
                            {
                                setSlotsData([]);
                                setShowAlert(false);
                                await setShowDateView(false);
                                await setShowSlotView(true);
                                
                            }
                            else
                            {
                                setSlotsData([]);
                                setShowAlert(false);
                                setcheckin("");
                                setcheckout("");
                                setvalue("");
                                await setShowSlotView(false);
                                await setShowDateView(true);
                            }
                            }}>
                        {filterOptions.map((option,i) => (
                                <option key={i} value={option.value}>
                                {option.text}
                                </option>
                            ))}
                        </Form.Select>
                    </div>
                    <div className="row col-12 col-md-12 col-xl-12 col-lg-12 mt-3 mb-4">
                        <div className='d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-4 col-xl-4'>
                            <h5>Date: </h5><input name="somedate" className='form-control-sm py-3 px-5 border' onFocus={() => {setShowAlert(false);setshowTablesView(false);setSlotsData([])}} style={{ border: "2px solid pink" }} value={value} onChange={e => setvalue(e.target.value)} type="date" min={today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0')}></input>
                        </div>
                            {
                            showSlotView?   
                                <div className='d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-4 col-xl-4'>
                                    <h5>Check-In Time: </h5><FormControl onFocus={() => setshowTablesView(false)} sx={{ m: 1, width: 300 }}>
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
                                                inputProps={{ 'aria-label': 'Without label' }}>
                                                    
                                                <MenuItem disabled value="">
                                                    <em>Check In Time</em>
                                                </MenuItem>
                                                {checkintimes.map((name,i) => (
                                                    <MenuItem
                                                        key={i}
                                                        value={name}
                                                        //style={getStyles(name, checkin, theme)}
                                                    >
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                </div>
                                : null
                            }
                            {
                            showSlotView? 
                            <div className='d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-4 col-xl-4'>
                                <h5>Check-Out Time: </h5><FormControl onFocus={() => setshowTablesView(false)} sx={{ m: 1, width: 300 }}>
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
                                            inputProps={{ 'aria-label': 'Without label' }}>

                                            <MenuItem disabled value="">
                                                <em>Check Out Time</em>
                                            </MenuItem>
                                            {checkouttimes.map((name,i) => (
                                                <MenuItem
                                                    key={i}
                                                    value={name}
                                                    //style={getStyles(name, checkout, theme)}
                                                    >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                            </div>
                            : null
                            }
                            <div className="row">
                                <div className='mt-4 d-flex justify-content-center align-items-center col-lg-12 col-md-12 col-12 col-xl-12'>
                                    <button className="btn" disabled={showSlotView?!(checkin.length !== 0 && checkout.length !== 0 && value !== ""):!(value !== "")}
                                        style={{ backgroundColor: "orange", color: "black", fontWeight: "bold6" }} onClick={e => {
                                            if(showSlotView)
                                            handleShow();
                                            if(slotsData.length==0)
                                                setShowAlert(true)
                                            getseats();
                                            gettables();
                                            if(showSlotView)
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
                                    showSlotView?
                                    showTablesView?
                                    <div className="square bg-warning rounded-pill" >
                                        {/* row1 */}
                                        <div className="row col-12 col-md-12 col-xl-12 col-lg-12 ">
                                            <div className='col-lg-3 col-md-4 col-12 mt-3 d-flex justify-content-center align-items-center'>
                                                <div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <h4>Table 1</h4>
                                                    </div>
                                                    <button className="btn">
                                                        <img src={tb1} title="Table 1 - 5 Seater" alt="Table 1 - 5 Seater"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                                <div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <h4>Table 3</h4>
                                                    </div>
                                                    <button className="btn">
                                                        <img src={tb3} title="Table 3 - 4 Seater" alt="Table 3 - 4 Seater"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                                <div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <h4>Table 5</h4>
                                                    </div>
                                                    <button className="btn" >
                                                        <img src={tb5} title="Table 5 - 4 Seater" alt="Table 5 - 4 Seater"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-lg-1 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                                <div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <h4>Table 7</h4>
                                                    </div>
                                                    <button className="btn" >
                                                        <img src={tb7} title="Table 7 - 2 Seater" alt="Table 7 - 2 Seater"/>
                                                    </button>

                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-4 col-12 mt-2 d-flex justify-content-center align-items-center'>
                                                <div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <h4>Table 9 </h4>
                                                    </div>
                                                    <button className="btn">
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
                                                    <button className="btn">
                                                        <img src={tb2} title="Table 2 - 5 Seater" alt="Table 2 - 5 Seater"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                                <div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <h4>Table 4</h4>
                                                    </div>
                                                    <button className="btn">
                                                        <img src={tb4} title="Table 4 - 4 Seater" alt="Table 4 - 4 Seater"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-4 col-12 mt-3 d-flex justify-content-center align-items-center'>
                                                <div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <h4>Table 6</h4>
                                                    </div>
                                                    <button className="btn">
                                                        <img className="mt-5" src={tb6} title="Table 6 - 2 Seater" alt="Table 6 - 2 Seater"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-lg-1 col-md-4 col-12 mt-4 d-flex justify-content-center align-items-center'>
                                                <div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <h4>Table 8</h4>
                                                    </div>
                                                    <button className="btn">
                                                        <img src={tb8} title="Table 8 - 2 Seater" alt="Table 8 - 2 Seater"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-4 col-12 mt-2 d-flex justify-content-center align-items-center'>
                                                <div>
                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <h4>Table 10</h4>
                                                    </div>
                                                    <button className="btn">
                                                        <img src={tb10} title="Table 10 - 8 Seater" alt="Table 10 - 8 Seater"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                
                                    </div>: null : null
                                }
                                    <br></br>
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
                                            {slotsData &&
                                                slotsData.map((item,i) =>
                                                    <tr key={i}>
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
                                                                await setCancelItem(item)
                                                                await setshowCancelModel(true)
                                                                    await gettables()
                                                                    await getseats()
                                                                }}>cancel</button>
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                    { slotsData.length==0 && showAlert &&
                                        <div>
                                        <Alert variant="warning" ><div className="d-flex justify-content-center"><h5>No reservations made on {new Date(value.replace(/-/g,'\/')).toLocaleDateString("en-us",{weekday:"long", month:"long", day:"numeric"})}</h5></div></Alert>
                                        </div>
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
                                    {mytables &&
                                        mytables.map((item,i) =>
                                            <tr key={i}>
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
                                                        await setCancelItem(item)
                                                        await setshowCancelModel(true)
                                                            await gettables()
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