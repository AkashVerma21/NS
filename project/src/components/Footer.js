import React,{Component} from 'react';
import "../styles/Footer.css";
import img1 from '../images/wave.svg';
import {Link} from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return(
            <>         
            <div className="footer" id="myfooter">
            <img src={img1} className="footer-wave" alt="footer wave"/>
                    <div className="footer1">
                    <Link to="/Services"><h6>About Us</h6>
                        <div className="footer1-cont content">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Emma_Watson_interview_in_2017.jpg" alt="developer" width="150px" height="150px" className="myimg"/>
                        <p>Developer: Deepti Verma</p>
                        </div>
                    </Link>
                    </div>
                    <div className="footer2">
                    <h6>Our Services</h6>
                        <div className="content">
                        <p>Find Best Tutor</p>
                        <p>Book a Tutor</p>
                        <p>Request for Demo Lecture</p>
                        <p>Employability for Teachers</p>
                        </div>
                    </div>
                    <div className="footer3">
                        <h6>Need Help</h6>
                        <div className="content">
                        <p><i className="fa fa-mobile fa-2x"></i>7607531308</p>
                        <p><i className="fa fa-envelope fa-lg"></i>deeptiverma455@gmail.com</p>
                        <p><i className="fa fa-linkedin-square fa-lg"></i>verma-deepti</p>
                        </div>
                    </div>
                <div className="para">
                <p>&copy; Copyright 2020.</p>
                <p>All rights reserved. Developed by Deepti Verma</p>
                </div>
            </div>
            </>
    );
}}