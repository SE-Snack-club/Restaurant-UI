import React, { Component } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Breadcrumb, BreadcrumbItem,
            Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
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
            message: ''
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
          [name]: value
        });
    }
    
    handleSubmit(event) {
        //event.preventDefault();
        //console.log('Current State is: ' + JSON.stringify(this.state));
        //alert('Current State is: ' + JSON.stringify(this.state));
        const { firstname, lastname, email, message } = this.state;
        let templateParams = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            message: message,
           }
           emailjs.send('service_3efa5h5', 'template_ecs55hr', templateParams, 'Du6l3nJc-xfXaeaF1')
            .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    }, function(error) {
                    console.log('FAILED...', error);
            });
            this.state = {
                firstname: '',
                lastname: '',
                email: '',
                message: ''
            };
        alert('Form submitted');
        

    }
    render() {
        return (
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
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <div class="mapouter"><div class="gmap_canvas"><iframe width="389" height="266" id="gmap_canvas" src="https://maps.google.com/maps?q=25%20Homestead&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                </div>
                
            </div>
        </div>    

                 <div className="container">
                <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
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
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" className='contact-textarea'
                                        required
                                        placeholder="Your Feedback"
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
        );
    }
  
  }

export default Contact;