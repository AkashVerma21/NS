import React,{useEffect, useState} from "react";
import "./styles/BookTutor.css";
import TutorList from '../components/TutorList.js';
import {Button} from 'reactstrap';

export default function BookTutor(props){ 
    const [tutor, setTutor] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/tutorRegister", { credentials: "include"  })
          .then((r) => r.json())
          .then((a) => {
            const arr=[...a];
            const sortedArr = arr.sort((a, b) => {
                const aDateNumeric = new Date(a.creationTime).valueOf();
                const bDateNumeric = new Date(b.creationTime).valueOf();
                return aDateNumeric - bDateNumeric;
    
            }); // sorts in ascending order of id - timestamp
            // const taskArr = sortedArr.map((item) => item.task); // gets the task for each item to create a strig array
            setTutor(sortedArr); // sets the array of { id, task }
          });
      },[]);
      const isNotNullorUndefined=(data)=>(data!==null && data!==undefined);
    const findEmail=(data)=>tutor.find((emaildata)=>emaildata.email===data);
    // console.log(findEmail(props.email));
    // console.log(tutor);
    
        return (
            <div className="book-tutor">
                <h1 className="book-tutor-heading">Book A Tutor</h1>
                <div className="tutor-data">{isNotNullorUndefined(findEmail(props.email))?<Button>Delete Your Data</Button>:null}</div>
                <div className="container">
                <div className="row">  
                {tutor.map((item, idx) => (       
                <TutorList
                    email={props.email}
                    item={item}
                    key={`tutor${item._id}`}
                    idx={idx}
                    userEmail={props.email}
                // editHandler={editHandler}
                // deleteHandler={deleteHandler}
        />
      ))}
      </div>
                    
                </div>
            </div>
        );
    
}