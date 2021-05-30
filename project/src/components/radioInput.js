import React from "react";
import "../styles/UserInput.css";

export default class RadioInput extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <>
            <label htmlFor={this.props.labelName} className="radioInput-label">{this.props.labelName}
            <input type={this.props.type} name={this.props.name} className="radioInput-input"/></label>
            </>
        );
    }
}