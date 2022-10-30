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
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';

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



function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function ReserveTable() {
    const [show, setshow] = useState(false);
    const handleClose = () => {
        setshow(false);
        getseats();
        gettables();
    }
    const handleShow = () => {
        setshow(true);
    }
    const theme = useTheme();
    const [checkin, setcheckin] = React.useState([]);
    const [checkout, setcheckout] = React.useState([]);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [table, settable] = useState("");
    
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
    //const [details, setdetails] = useState([value, checkin, checkout]);
    const [details] = useState([value, checkin, checkout]);
    const [booked, setbooked] = useState([]);
    const [mytables, setmytables] = useState([]);
    const today = new Date();
    //var sno = 1;
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
    // const setdeafult = () => {
    //     settb1(white5)
    //     // console.log("setting defult tb1")
    //     settb2(white5)
    //     settb3(white4)
    //     settb4(white4)
    //     settb5(white4)
    //     settb6(whiteh2)
    //     settb7(white2)
    //     settb8(white2)
    //     settb9(white8)
    //     settb10(white8)
    // }
    // console.log(localStorage.getItem("mail"))
    const gettables = async() => {
        // fetch(`${process.env.REACT_APP_API_URL}/reserve/mytables`).then(data => data.json()).then(data => {
        //     let d = data.data
        //     let i = 0
        //     for (i = 0; i < d.length; i++) {
        //         d[i] = { ...d[i], "sno": i + 1 }
        //     }
        //     console.log("curr tables", d)
        //     setmytables(d)
        // })




        try {
            let countRes = await axios.get(`${process.env.REACT_APP_API_URL}/reserve/mytables`);
            let d=countRes.data;
            console.log(d,"res data");
            let i = 0;
            console.log(d.data.length,"mylength");
            for (i = 0; i < d.data.length; i++) {
                d.data[i] = { ...d.data[i], "sno": i + 1 }
            }
            console.log("curr tables", d);
            setmytables(d.data);
            } 
        catch (e) {
            console.log("Error");
        }

        console.log(mytables);
    }
    console.log(mytables)
    // React.useEffect(gettables, [])

    useEffect(()=>{
        gettables()
    },[]);
        //React.useEffect(getseats, [details])
    useEffect(()=>{
        getseats()
    },[details]);
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
                        console.log("data", data)
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
                                if (i === 1) { settb1(white5); console.log("setting tb1 white") }
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
        console.log("tstr", time)
        let t = time.toString().split("");
        console.log("tstr", t)
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
            body: JSON.stringify({ name: name, email: email, phone: phone, table: table, date: value, checkin: parseInt(checkin[0].split(":").join("")), checkout: parseInt(checkout[0].split(":").join("")) })
        }).then(data => data.json()).then(data => {
            console.log("booked")
            gettables()
            getseats()
        }
        )
    }
    const cancel = (id) => {
        console.log("cancelled ")
        fetch(`${process.env.REACT_APP_API_URL}/reserve/cancel/${id}`, {
            method: "DELETE"
        }).then(data => data.json()).then(data => {
            console.log("del data",data)
            if(data.status === 200){
                console.log("updating tables and setting Table")
                getseats()
                gettables()
            }
        })
    }
    return (
        <div>
            {/* {
                getseats()
            } */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                {
                    // console.log("datda",{value,checkin,checkout})
                }
                {
                    value !== "" && checkin.length !== 0 && checkout.length !== 0 ?
                        parseInt(checkin[0].split(":").join("")) < parseInt(checkout[0].split(":").join("")) ?
                            booked.includes(table) ?
                            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                                        <Modal.Header>
                                        <Modal.Title>Table Reserved</Modal.Title>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={e=>{getseats();gettables();handleClose()}}></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h5>!!!Oops table already reserved</h5>
                                        </Modal.Body>

                            </Modal> :
                                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                                        <Modal.Header>
                                        <Modal.Title>Please fill your details</Modal.Title>
                                            <button type="button" className="btn-close" onClick={e=>{getseats();gettables();handleClose()}} data-bs-dismiss="modal" aria-label="Close"></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {/* {
                                                show ?
                                                    <div className="mt-2 mb-2">
                                                        <h4 style={{ color: "red", fontWeight: "bold" }}>Please Fill all fields</h4>
                                                    </div>
                                                    :
                                                    null

                                            } */}
                                            <Form>
                                            <FormGroup row>
                                            <Label htmlFor="name" md={2}>Name</Label>
                                                <Col md={6}>
                                                    <Input type="text" id="name" name="name"
                                                        required
                                                        placeholder="Enter Your Name"
                                                        value={name}
                                                        onChange={e => setname(e.target.value)} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                            <Label htmlFor="email" md={2}>Email</Label>
                                                <Col md={6}>
                                                     <Input type="email" id="email" name="email"
                                                        required
                                                        placeholder="Enter a Valid email address"
                                                        value={email}
                                                        
                                                        onChange={e => setemail(e.target.value)} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                            <Label htmlFor="telephone" md={2}>Telephone</Label>
                                                <Col md={6}>
                                                    <Input type='tel' id="telephone" name="telephone"
                                                        placeholder="Enter Your Mobile Number"
                                                        value={phone}
                                                        onChange={e => setphone(e.target.value)} />
                                                </Col>
                                            </FormGroup>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={e=>{getseats();gettables();handleClose()}}>Close</button>
                                            {
                                                name !=="" && email !=="" && phone !==""?
                                                
                                                    <button type="button" data-bs-dismiss="modal" onClick={e => {

                                                        bookseat(table);
                                                        handleClose()

                                                    }} className="btn btn-primary">Book Seat</button>
                                                    :
                                                    null
                                                    // <h5 style={{color:"red"}}>
                                                    //     Fill Details
                                                    // </h5>
                                            }

                                        </Modal.Footer>
                                    </Modal>
                            :
                            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                                    <Modal.Header>
                                        <Modal.Title>Error in date or time</Modal.Title>
                                        <button type="button" onClick={e=>{getseats();gettables();handleClose()}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h5>invalid date or time</h5>
                                    </Modal.Body>
                            </Modal>
                        :
                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header>
                                <Modal.Title>Error</Modal.Title>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={e=>{getseats();gettables();handleClose()}} aria-label="Close"></button>
                                </Modal.Header>
                                <Modal.Body>
                                    <h5>Invalid date or time</h5>
                                </Modal.Body>
                        </Modal>

                }

            </div>
            <div className="container-fluid  mt-4">
                <h1 align="center">Reserve Table</h1>
            <div className="row col-12 col-md-12 col-xl-12 col-lg-12 mt-5 mb-4">
        <div className='d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-4 col-xl-4'>
            <h5>Date: </h5><input name="somedate" className='form-control-sm py-3 px-5 border' style={{ border: "2px solid pink" }} value={value} onChange={e => setvalue(e.target.value)} type="date" min={today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0')}></input>
        </div>
        <div className='d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-4 col-xl-4'>
        <h5>Check-In Time: </h5><FormControl sx={{ m: 1, width: 300 }}>
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
                            style={getStyles(name, checkin, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
        <div className='d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-4 col-xl-4'>
        <h5>Check-Out Time: </h5><FormControl sx={{ m: 1, width: 300 }}>
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
                            style={getStyles(name, checkout, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
        <div className="row">
            <div className='mt-4 d-flex justify-content-center align-items-center col-lg-12 col-md-12 col-12 col-xl-12'>
                <button className="btn"

                    style={{ backgroundColor: "gray", color: "white", fontWeight: "bold6" }} onClick={e => {
                        getseats();
                        gettables();
                    } }>
                    Show Tables
                </button>
            </div>
        </div>
           </div>
                <div className="square bg-warning rounded-pill">
                    {/* row1 */}
                <div className="row col-12 col-md-12 col-xl-12 col-lg-12 ">
                    {/* <div className='d-flex justify-content-center align-items-center'>  */}
                    <div className='col-lg-3 col-md-4 col-12 mt-3 d-flex justify-content-center align-items-center'>
                        <div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <h4>Table 1</h4>
                            </div>
                            <button className="btn"
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={e => {

                                    // $(document).ready(function () {
                                    //     $(".opan").click(function () {
                                    //         $("#staticBackdrop").modal('show');
                                    //     });
                                    // });
                                    handleShow()
                                    settable(1)
                                    console.log("setting tb1 green")
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
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={e => {
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
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"

                                onClick={e => {
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
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={e => {
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
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={e => {
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
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={e => {
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
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={e => {
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
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={e => {
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
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={e => {
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
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={e => {
                                    handleShow()
                                    settable(10)
                                    settb10(green8)

                                }}>
                                <img src={tb10} title="Table 10 - 8 Seater" alt="Table 10 - 8 Seater"/>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                {/* <div className="square border border-3"> */}
                <div className="row col-12 col-md-12 col-xl-12 col-lg-12 mt-5 mb-4">
                    <div className="row row-content">
                        <h2>Reservations</h2>
                    
                    <div className="container-fluid">
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
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {mytables &&
                                    mytables.map(item =>
                                        <tr key={item._id}>
                                            <th scope="row">{item.sno}</th>
                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.table}</td>
                                            <td>{item.date}</td>
                                            <td>{processtime(item.checkin)}</td>
                                            <td>{processtime(item.checkout)}</td>
                                            <td>
                                                <div className="d-flex">
                                                    <h4 className="p-2 bg-success text-light">confirmed</h4> 
                                                </div>
                                            </td>
                                            <td><button className="btn btn-info" onClick={async (e) => {
                                                       await cancel(item._id)
                                                        await gettables()
                                                        await getseats()
                                                    }}>cancel</button>
                                                    </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                    </div>
                </div>
                {/* </div> */}
            </div>


        </div>
    )
}