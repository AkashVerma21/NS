import React,{useState,useEffect} from 'react';
import '../styles/App.css';
import {Route, Switch} from 'react-router-dom';
import MyNavbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/about';
import Login from '../pages/Login';
import Footer from './Footer';
import Signup from '../pages/Signup';
import Tutor from "../pages/Tutor";
import BookTutor from '../pages/BookTutor';



function App(props) {

  const [loggedIn, setLoggedIN] = useState(false);
  const [error, setError]=useState(undefined);
  const [userName, setUserName]=useState(undefined);
  const [email, setEmail] = useState(undefined);
 

  const getUserName = () => {
      return fetch("http://localhost:9999/userInfo", {credentials: "include" })
        .then(r => {
          if (r.ok) return r.json();
          else {
            setLoggedIN(false);
            setUserName(undefined);
            setEmail(undefined);
            return { success: false };
          }
        })
        .then(r => {
          if (r.success !== false) {
            setLoggedIN(true);
            setUserName(r.firstName);
            setEmail(r.email);
          }
        });
    };
    const loginHandler = (email, password) => {
      fetch("http://localhost:9999/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials:"include"
      })
        .then((r) => {
          if(r.ok) {
            return { success: true };
          } else {
            return r.json()
          }
        })
        .then((r) => {
          if(r.success === true) {
            return getUserName();
          } else {
            setError(r.err);
          }
        });
    };

    useEffect(() => {
      getUserName();
    }, []);

  const signupHandler = (firstName,lastName,email,gender,password) => {
      fetch("http://localhost:9999/signup",{
          method: "POST",
          body: JSON.stringify({firstName,lastName,email,gender,password}),
          headers: {"Content-Type": "application/json"},
          credentials: "include"
      })
      .then(r=>{
          if(r.ok){
              return {success: true};
          }else{
            console.log("some error");
              return r.json();
          }
      })
      .then(r=>{
          if(r.success===true){
              getUserName();
          }else{
              setError(r.err);
          }
      })
    };

    const logOutHandler = () => {
      return fetch("http://localhost:9999/logout", {
        credentials: "include"
      }).then(r => {
        if (r.ok) {
          setLoggedIN(false);
          setUserName(undefined);
          setEmail(undefined);
        }
      });
    };

  return (
    <>
      <MyNavbar userName={userName} loggedIn={loggedIn} logOutHandler={logOutHandler}/> 
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/tutorRegister"><Tutor email={email} loggedIn={loggedIn}/></Route>
        <Route exact path="/aboutUs"><About/></Route>
        <Route exact path="/bookTutor"><BookTutor email={email} loggedIn={loggedIn}/></Route>
        <Route exact path="/login"><Login error={error} loginHandler={loginHandler}/></Route>
        <Route exact path="/Signup"><Signup error={error} signupHandler={signupHandler}/></Route>
      </Switch>   
      <Footer/>
   </> 
  );
}

export default App;
