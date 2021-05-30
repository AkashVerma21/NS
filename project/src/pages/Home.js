import React,{Component} from "react";
import '../pages/styles/Home.css';
import {Link} from 'react-router-dom';
import img1 from "../images/banner-pic.svg";
import img2 from "../images/wavesNegative.svg";
import img3 from "../images/home-img.svg";
import Carousel from '../components/carousel';

export default class Home extends Component{
  // componentDidMount() {
  //   document.getElementById("navbar").style.visibility = "visible";
  //   document.getElementById("myfooter").style.display = "block";
  // }
    render(){
        return (
            <>
  <div id="banner">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className="promo-title">Best Tutor Finder</p>
          <p>Find a tutor with the skills you need. You can save your time to find the best tutor through this....Tutors also feel free to register for teaching.</p>
          <Link to="/bookTutor"><button type="button" className="btnsuccess">Find A Tutor</button></Link>
          <Link to="/aboutUs"><button type="button" className="btninfo">Read More</button></Link>
        </div>
        <div className="col-md-6 text-center banner-img">
          <img src={img1} alt="header" className="img-fluid "/>
        </div>
      </div>
    </div>
    <img src={img2} alt="Negative wave" className="bottom-img"/>
  </div>
  <div className="home-page">
              <div className="container">
                <div className="row">
                  <div className="col home-img">
                    <img src={img3} alt="laptop"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col find-tutor">
                    <h2>Find a Tutor And Learn</h2>
                    <p>Tutoring is a great way for students to get their questions answered and improve their grades. Tutors work at your pace and tailor their teaching to meet your learning needs. Access the one-on-one tuition you need to build confidence and be successful.</p>
                    <h4>Why We are Here?</h4>
                    <ul>
                      <li>Need a good tutor at your home?</li>
                      <li>Looking for an expert tutor to teach online?</li>
                      <li>Search tutor as per your need</li>
                      <li>Wasting your time in going to coaching centres and not getting individual attention?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    <Carousel/>
           </>
        );
    }
}