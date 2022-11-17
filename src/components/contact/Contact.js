import React, { Component } from 'react';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'font-awesome/css/font-awesome.min.css';
import "./Contact.css"
/*const Contact=()=>{
    return(
        <div>
        </div>
    )
}*/
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            telephone:'',
            message: '',
            show: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
          [name]: value
        });
    }
    handleClose(event){
        this.setState({
            show: false
          });
    }
    handleShow(event){
        this.setState({
            show: true
          });
    }
    handleSubmit(event) {
        //event.preventDefault();
        //console.log('Current State is: ' + JSON.stringify(this.state));
        //alert('Current State is: ' + JSON.stringify(this.state));
        const { firstname, lastname, email, telephone, message } = this.state;
        let templateParams = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            telephone: telephone,
            message: message,
           }
           emailjs.send('service_3efa5h5', 'template_ecs55hr', templateParams, 'Du6l3nJc-xfXaeaF1')
            .then(function(response) {
                    //console.log('SUCCESS!', response.status, response.text);
                    }, function(error) {
                    //console.log('FAILED...', error);
            });
            
               this.setState({firstname:''});
                this.setState({lastname:''});
               this.setState({email:''});
               this.setState({telephone:''});
               this.setState({message:''});
            
        alert('Form submitted');
        

    }
    render() {
        return (
        <>
        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Other Locations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="col-12 col-sm-7 offset-sm-1">
                        <h5>Location 1</h5>
                        <address>
                        787 Woodside Street<br />
                        Brooklyn, NY 11211<br />
                        United States<br />
                        </address>
            </div>
            <div className="col-12 col-sm-7 offset-sm-1">
                        <h5>Location 2</h5>
                        <address>
                        8525 Vernon St.<br />
                        Lindenhurst, NY 11757<br />
                        United States<br />
                        </address>
            </div>
            <div className="col-12 col-sm-7 offset-sm-1">
                        <h5>Location 3</h5>
                        <address>
                        8779 Lower River Drive<br />
                        Ithaca, NY 14850<br />
                        United States<br />
                        </address>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        25 Homestead Avenue<br />
                        Albany, NewYork<br />
                        United States<br />
                        <i className="fa fa-phone"></i>: +838 200 7171<br />
                        <i className="fa fa-fax"></i>: +518 495 9613<br />
                        <i className="fa fa-envelope"></i>: <a href="GRP-SE_Fall22_Team1_SnackClub@albany.edu">GRP-SE_Fall22_Team1_SnackClub@albany.edu</a>
                        </address>
                        <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-danger" href="https://www.instagram.com/snackclub_se/"><i className="fa fa-instagram"></i>Instagram</a>
                        <a role="button" className="btn btn-success" href="mailto:GRP-SE_Fall22_Team1_SnackClub@albany.edu"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                    
                </div>
                <div className="col-8">
                <Button variant="link" size="lg" onClick={this.handleShow}>Other Locations</Button>
                </div>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <div className="mapouter"><div className="gmap_canvas"><iframe title='maps' width="389" height="266" id="gmap_canvas" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=25%20homestead%20avenue+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                </div>
                
            </div>
        </div>    

                 <div className="container">
                <div className="row row-content">
                   <div className="col-12">
                      <h3>Post your queries</h3>
                   </div>
                    <div className="contact-feedBackFormApp">
                        <Form onSubmit={this.handleSubmit}>
                       
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        required
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                           
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        required
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange} />
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        required
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telephone" md={2}>Telephone</Label>
                                <Col md={10}>
                                    <Input type='tel' id="telephone" name="telephone"
                                        placeholder="Telephone Number"
                                        value={this.state.telephone}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" className='contact-textarea'
                                        required
                                        placeholder="Your Query"
                                        rows={8}
                                        cols={10}
                                        value={this.state.message}
                                        maxLength={10000}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>
               </div>
               </div>
             </>  
        );
    }
  
  }

export default Contact;