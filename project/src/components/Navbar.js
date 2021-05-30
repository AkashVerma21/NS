import React,{useState,useEffect} from 'react';
import '../styles/Navbar.css';

import {Link} from 'react-router-dom';

export default function MyNavbar(props){
    
    return(  
        <nav className="tutor-navbar" id="navbar">
            <input id="tutor-nav-toggle" type="checkbox"/>
            <Link to="/"> <div className="tutor-logo"><strong>Tutor</strong>World</div></Link>
                <ul className="tutor-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tutorRegister">Register As Tutor</Link></li>
                    <li><Link to="/bookTutor">Book A Tutor</Link></li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    {props.loggedIn?<><div className="loguser">Hello {props.userName}</div><li className="logout" onClick={props.logOutHandler}>Logout</li></> : <li><Link to="/login">Login/SignUp</Link></li>}
                </ul>
                
                <label htmlFor="tutor-nav-toggle" className="tutor-icon-burger">
                    <div className="lines"></div>
                    <div className="lines"></div>
                    <div className="lines"></div>
                </label> 
        </nav>
    
    );
}
