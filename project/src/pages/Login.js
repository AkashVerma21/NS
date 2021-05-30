import React, { useEffect, useState } from "react";
import "./styles/Login.css";
import loginbg from "../images/login-bg.png";
import img1 from "../images/book.svg";
import avatar from "../images/avatar.svg";
import { Link } from "react-router-dom";

export default function Login(props) {
  // useEffect(() => {
  //   document.getElementById("navbar").style.visibility = "hidden";
  //   document.getElementById("myfooter").style.display = "none";
  // }, []);
  const [error, setError] = useState(props.error);
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginPage">
      <img className="wave" src={loginbg} alt="wave" />
      <div className="container loginpage-container">
        <div className="img">
          <img src={img1} alt="login-book" />
        </div>
        <div className="login-container">
          <div className="myForm" method="post">
            <img className="avatar" src={avatar} alt="avatar" />
            <h2>Welcome</h2>
            <div className="form-group one focus">
              <i className="fa fa-user fa-lg"></i>
              <input
                type="text"
                className="myInput login-input"
                placeholder="email"
                name="email"
                onChange={e =>{ setError(""); setUserName(e.target.value)}}
                value={email}
                required
              />
            </div>

            <div className="form-group two">
              <i className="fa fa-lock fa-lg"></i>
              <input
                type="password"
                className="myInput login-input"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            {error ? <div className="error">{error}</div> : null}
            <input
              type="submit"
              className="myButton login-input"
              onClick={() => {
                // const name=userName;
                // const pass=password;
                // setUserName("");
                // setPassword("");
                return props.loginHandler(email, password);
              }}
              value="Login"
            />
            {/* <BrowserRouter> */}
            <Link className="signup" to="/signup">
              Create Your Account
            </Link>
            {/* <Route exact path="/signup" component={Signup}/> */}
            {/* </BrowserRouter> */}
          </div>
        </div>
      </div>
      {/* <div className="container">
      <div class="myCard">
        <div className="row">
          <div className="col-md-6">
            <div className="myLeftCtn">
              <form className="myForm text-center">
                <header>Welcome Back</header>
                <div className="form-group">
                  <i className="fa fa-user"></i>
                  <input
                    type="text"
                    className="myInput"
                    placeholder="Enter UserName"
                    id="userName"
                    required
                  />
                </div>

                <div className="form-group">
                  <i className="fa fa-lock"></i>
                  <input
                    type="password"
                    className="myInput"
                    placeholder="Enter Password"
                    id="password"
                    required
                  />
                </div>

                <input type="submit" className="myButton" value="Login" />
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="myRightCtn">
              <div className="box">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div> */}
    </div>
  );
}
