import React,{useEffect, useState} from "react";
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
// import "./styles/BookTutor.css";

export default function TutorList(props){ 
    const [err, setError] = useState("");
    // useEffect(() => {
    //     fetch("http://localhost:9999/tutorRegister", { credentials: "include"  })
    //       .then((r) => r.json())
    //       .then((arr) => {
    //         const sortedArr = arr.sort((a, b) => {
    //             const aDateNumeric = new Date(a.creationTime).valueOf();
    //             const bDateNumeric = new Date(b.creationTime).valueOf();
    //             return aDateNumeric - bDateNumeric;
    
    //         }); // sorts in ascending order of id - timestamp
    //         // const taskArr = sortedArr.map((item) => item.task); // gets the task for each item to create a strig array
    //         setTutor(sortedArr); // sets the array of { id, task }
    //       });
    //   }, []);
    const bookTutor=()=>{
            fetch("http://localhost:9999/book",{
            method: "POST",
            body: JSON.stringify({name: props.item.name,email: props.item.email,mobile: props.item.mobile,bookedBy:props.userEmail}),
            headers:{"Content-Type": "application/json"},
            credentials: "include"})
            // .then(r=>r.json())
            .then((r) =>{
                if(r.ok)
                    return {success: true};
                else{
                    console.log("error in tutor booking",r);
                    return r.json();
                }
               })
              .then((resp) => {
                  if(resp.success===true){
                    console.log("Got data from POST backend", resp);
                  }else{
                        setError(resp.err);
                  }});
        
                // items.push(resp);
                // setItems([...items]);
                // setNewItem("");
    }
        return (
            <div className=" col-md-4 book-tutor" key={props.key}> 
                        <Card>
                        <CardBody>
                        <CardTitle tag="h5">{props.item.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{props.item.teaching}</CardSubtitle>
                        <CardText>
                            <p>{props.item.experience}</p>
                            <p>{props.item.mode}</p>
                        </CardText>
                        <Button onClick={bookTutor}>Book</Button>
                        <Button>Request Demo</Button>
                        </CardBody>
                        </Card> 
                        </div>                      
        );
    
}