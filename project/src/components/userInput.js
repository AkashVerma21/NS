import React from "react";
import "../styles/UserInput.css";

export default class UserInput extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <>
            <label htmlFor={this.props.labelName} className="userInput-label">{this.props.labelName}</label>
            <input type={this.props.type} name={this.props.name} className="userInput-input"/>
            </>
        );
    }
}