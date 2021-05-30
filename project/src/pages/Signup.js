import React,{useEffect, useState} from 'react';
import './styles/Signup.css';
import SignupImg from '../images/signup.svg';

export default function Signup(props){
  // useEffect(() => {
  //   document.getElementById("navbar").style.visibility = "visible";
  //   document.getElementById("myfooter").style.display = "block";
  // }, []);
    
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [gender,setGender]=useState("male");
  const [password,setPassword]=useState("");
  const [error, setError] = useState(props.error);

        return(
            <div className="sigup-page">
              <div className="container signuppage-container">
              <div className="img">
                <img src={SignupImg} alt="student reading a book"/>
            </div>
                <div className="mysignup">
                <div className="myForm">
                {/* <img className="avatar" src={SignupImg} /> */}
                <h2>Welcome</h2>
                <div className="form-group one focus">
                  <i className="fa fa-user fa-lg"></i>
                  <input
                    type="text"
                    className="myInput"
                    placeholder="First Name"
                    name="firstName"
                    onChange={e=>{setError(""); setFirstName(e.target.value)}}
                    value={firstName}
                    required
                  />
                </div>
                <div className="form-group one focus">
                  <i className="fa fa-user fa-lg"></i>
                  <input
                    type="text"
                    className="myInput"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={e=>setLastName(e.target.value)}
                    value={lastName}
                    required
                  />
                </div>
                <div className="form-group one focus">
                  <i className="fa fa-envelope fa-signup fa-lg"></i>
                  <input
                    type="email"
                    className="myInput"
                    placeholder="Email"
                    name="email"
                    onChange={e=>setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="signup-gender">
                  <label>Gender</label><br/>
                  <input type="radio" checked={gender==="male"} value="male" onChange={e=>setGender(e.target.value)}/>
                        <label htmlFor="male">Male</label><br/>
                  <input type="radio" checked={gender==="female"} value="female" onChange={e=>setGender(e.target.value)}/>
                        <label htmlFor="female">Female</label><br/>
                </div>
                {/* <div className="form-group one focus">
                  <i className="fa fa-user fa-lg"></i>
                  <input type="radio" id="student" name="profession" value="male"/>
                        <label htmlFor="male">Student</label><br/>
                  <input type="radio" id="teacher" name="profession" value="female"/>
                        <label htmlFor="female">Teacher</label><br/>
                </div> */}
                <div className="form-group two">
                  <i className="fa fa-lock fa-lg"></i>
                  <input
                    type="password"
                    className="myInput"
                    placeholder="Password"
                    name="password"
                    onChange={e=>setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  </div>
                  {error?<div className="error">{error}</div>: null}
                <input type="submit" className="myButton" onClick={()=>props.signupHandler(firstName,lastName,email,gender,password)} value="Sign Up" />
              </div>
                </div>
                </div>
            </div>
        );
}