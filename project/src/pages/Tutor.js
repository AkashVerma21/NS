import React,{useState} from "react";
import "./styles/Tutor.css";
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Tutor(props){
        const [name, setName] = useState("");
        const [gender, setGender] = useState("Male");
        const [city, setCity] = useState("");
        const [email, setEmail] = useState(props.email);
        const [mobile, setMobile] = useState("");
        const [qualification, setQualification] = useState("");
        const [teaching, setTeaching] = useState("Below 5th");
        const [experience, setExperience] = useState("");
        const [mode, setMode] = useState("Home Tutor");
        const [address, setAddress] = useState("");
        const [district, setDistrict] = useState("");
        const [state, setState] = useState("");
        const [area, setArea] = useState("");
        const [monthlyFee, setMonthlyFee] = useState("");
        const [perHourFee, setPerHourFee] = useState("");
        const [error, setError] = useState("");

        const addTutor = () => {
            // send data to backend
            fetch("http://localhost:9999/tutorRegister", {
              method: "POST",
              body: JSON.stringify({ name, gender, email, city, mobile, qualification, teaching, experience, mode, address, district, state, area, monthlyFee, perHourFee  }),
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include"  
            })
              .then((r) =>{
                if(r.ok)
                    return {success: true};
                else{
                    console.log("error in tutor registeration");
                    return r.json();
                }
               })
              .then((resp) => {
                  if(resp.success===true){
                    console.log("Got data from POST backend", resp);
                  }else{
                        setError(resp.err);
                  }
        
                // items.push(resp);
                // setItems([...items]);
                // setNewItem("");
              });
          };
    
        return(
            <>
                <div className="tutor-page">
                    <h2>Welcome As a Tutor</h2>
                    <div className="container tutor-register1">
                    <h3>Instructions</h3>
                        <div className="row">
                     <ul>
                        <li>Do you have a passion to teach?</li>
                        <li>Are you an expert in your field and passionate about sharing your expertise?</li>
                        <li>Register today to find tuition jobs online and off-line in your area.</li>
                        <li>Want to teach with us ? Register with your details now!</li>
                    </ul>
                    </div>
                    <div className="tutor-register2">
                        <div className="col">
                                <fieldset className="my-fieldset">
                                    <legend className="my-legend">Tutor Registration</legend>

                                    <label htmlFor="Name" className="userInput-label">Name</label>
                                    <input type="text" className="userInput-input" value={name} onChange={e=>{setError(""); setName(e.target.value)}}/>
            

                                    <label className="tutor-label">Gender</label>
                                    <div className="radio-buttons">
                                    <label htmlFor="Male" className="radioInput-label">Male
                                    <input type="radio" checked={gender==="Male"} value="Male" onChange={e=>setGender(e.target.value)} className="radioInput-input"/></label>
                                    <label htmlFor="Female" className="radioInput-label">Female
                                    <input type="radio" checked={gender==="Female"} value="Female" onChange={e=>setGender(e.target.value)} className="radioInput-input"/></label>
                                    </div>


                                    <label htmlFor="City Name" className="userInput-label">City Name</label>
                                    <input type="text" className="userInput-input" value={city} onChange={e=>setCity(e.target.value)}/>
                                    

                                    <label htmlFor="Email" className="userInput-label">Email</label>
                                    <input type="email" className="userInput-input" value={email} onChange={e=>setEmail(e.target.value)}/>


                                    <label htmlFor="Mobile No" className="userInput-label">Mobile No</label>
                                    <input type="number" className="userInput-input" value={mobile} onChange={e=>setMobile(e.target.value)}/>


                                    <label htmlFor="Qualification" className="userInput-label">Qualification</label>
                                    <input type="text" className="userInput-input" value={qualification} onChange={e=>setQualification(e.target.value)}/>


                                    <label className="tutor-label">Teaching upto</label>
                                    <div className="radio-buttons">
                                    <label htmlFor="Below 5th" className="radioInput-label">Below 5th
                                    <input type="radio" checked={teaching==="Below 5th"} value="Below 5th" onChange={e=>setTeaching(e.target.value)} className="radioInput-input"/></label>
                                    
                                    <label htmlFor="5th to 8th" className="radioInput-label">5th to 8th
                                    <input type="radio" checked={teaching==="5th to 8th"} value="5th to 8th" onChange={e=>setTeaching(e.target.value)} className="radioInput-input"/></label>
                                    
                                    <label htmlFor="9th to 10th" className="radioInput-label">9th to 10th
                                    <input type="radio" checked={teaching==="9th to 10th"} value="9th to 10th" onChange={e=>setTeaching(e.target.value)} className="radioInput-input"/></label>
                                    
                                    <label htmlFor="11th to 12th" className="radioInput-label">11th to 12th
                                    <input type="radio" checked={teaching==="11th to 12th"} value="11th to 12th" onChange={e=>setTeaching(e.target.value)} className="radioInput-input"/></label>
                                    </div>
                                    

                                    <label htmlFor="Write your self about your educational experience" className="userInput-label">Write your self about your educational experience</label>
                                    <input type="text" className="userInput-input" value={experience} onChange={e=>setExperience(e.target.value)}/>
                                   
                                    
                                    <label className="tutor-label">Registration For</label>
                                    <div className="radio-buttons">
                                    <label htmlFor="Home Tutor" className="radioInput-label">Home Tutor
                                    <input type="radio" checked={mode==="Home Tutor"} value="Home Tutor" onChange={e=>setMode(e.target.value)} className="radioInput-input"/></label>
                                    
                                    <label htmlFor="Online Tutor" className="radioInput-label">Online Tutor
                                    <input type="radio" checked={mode==="Online Tutor"} value="Online Tutor" onChange={e=>setMode(e.target.value)} className="radioInput-input"/></label>
                                   
                                    <label htmlFor="Both" className="radioInput-label">Both
                                    <input type="radio" checked={mode==="Online + Home"} value="Online + Home" onChange={e=>setMode(e.target.value)} className="radioInput-input"/></label>
                                    </div>
                                    

                                    <label htmlFor="Address" className="userInput-label">Address</label>
                                    <input type="text" className="userInput-input" value={address} onChange={e=>setAddress(e.target.value)}/>

                                    
                                    <label htmlFor="District Name" className="userInput-label">District Name</label>
                                    <input type="text" className="userInput-input" value={district} onChange={e=>setDistrict(e.target.value)}/>
                                    

                                    <label htmlFor="State Name" className="userInput-label">State Name</label>
                                    <input type="text" className="userInput-input" value={state} onChange={e=>setState(e.target.value)}/>

                                    
                                    <label htmlFor="Preference area in your city for Home Tutoring" className="userInput-label">Preference area in your city for Home Tutoring</label>
                                    <input type="text" className="userInput-input" value={area} onChange={e=>setArea(e.target.value)}/>
                                    

                                    <label htmlFor="Your tuition fee per month" className="userInput-label">Your tuition fee per month</label>
                                    <input type="number" className="userInput-input" value={monthlyFee} onChange={e=>setMonthlyFee(e.target.value)}/>
                                    
                                    
                                    <label htmlFor="Your tuition fee per hour" className="userInput-label">Your tuition fee per hour</label>
                                    <input type="number" className="userInput-input" value={perHourFee} onChange={e=>setPerHourFee(e.target.value)}/>
                                    
                                    {error?<p>{error}</p>:null}
                                    {props.loggedIn?<Button color="danger" onClick={addTutor} className="tutor-button">Submit</Button>:<Link to="/login"><Button color="danger" className="tutor-button">Submit</Button></Link>}
                                </fieldset>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        );
}