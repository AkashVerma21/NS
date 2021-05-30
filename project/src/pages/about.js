import React,{Component} from 'react';
import './styles/About.css';
import Carousel from "../components/carousel";

export default class Services extends Component{
    // componentDidMount() {
    //     document.getElementById("navbar").style.visibility = "visible";
    //     document.getElementById("myfooter").style.display = "block";
    //   }
    constructor(props){
        super();
    }
    render(){
        return(
        <>
            <div className="myfirst-image">
                <p className="p1">Join Us here</p>
                <p className="p2">&amp;</p>
                <p className="p3">Find the Tutor of Your Choice With Demo Lectures.</p>
                <p className="p4">Easily get Tutor</p>
            </div>
            <div className="container ourServices">
                <h1>Our Services</h1>
                <div className="row">
                    <div className="col-lg col-sm teacher">
                        <h3>Who want to Teach</h3>
                        <ul className="teacher-content">
                            <li>Let's Make a Account and build your own opportunity towards your first job.</li>
                            <li>Easily can Signup and show the existence of your's in teaching.</li>
                            <li>No Tension to tell others to get the Students for teaching.</li>
                            <li>You can make your own teaching experience according to have free time.</li>
                            <li>Yes This is plateform only for you.!!!!!</li>
                        </ul>
                        <img src="https://i.pinimg.com/originals/6d/30/80/6d308025f1af25af52086ee0002fefda.jpg" alt="information about teacher"/>
                    </div>
                    <div className="col-lg col-sm student">
                        <h3>Who want to Study</h3>
                        <ul className="student-content">
                            <li>SigUp and Search the tutors easily.</li>
                            <li>Request for Demo Lecture before Book a tutor.</li>
                            <li>Book the best tutor that you find out.</li>
                            <li>No Tension to search the tutions from outside.</li>
                            <li>Get the tution in your home.</li>
                            <li>Hurry Up! Let's Study and Make future Bright!!!!</li>
                        </ul>
                        <img src="https://webstockreview.net/images/clipart-math-high-school-4.jpg" alt="tution need for student"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid our-aim">
                <h2>Our Aim</h2>
                <div className="row">
                    <p>To provide You the best plateform which help to find tutor easily..... You can find the tutor by searching the tutors here. With the huge choice of tutors, you find the right tutor for you and learn at the comfort of your own home.</p>
                    <p>Tutor can get the job according to their availability of time. Can find the Part time job also.</p>
                </div>
            </div>
            <Carousel/>
        </>
        );
    }
}