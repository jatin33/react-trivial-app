import React from 'react';
import './FloatingLabelInput.css';

class FloatingLabelInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "off",
            inputVal:""
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(evt) {
        if(evt.target.value !== ""){
            this.setState({
                class:"on",
                inputVal:evt.target.value
            });
        }else{
            this.setState({
                class:"off"
            });
        }
    }


    componentWillUnmount(){
        if(this.props.componentId === "fname"){
            localStorage.setItem("fname",this.state.inputVal);
        }else{
            localStorage.setItem("lname",this.state.inputVal);
        }
    }

    render() {
        return (
            <div>
                <label className={this.state.class}>{this.props.placeholder}</label>
                <input placeholder={this.props.placeholder} onChange={this.handleInput} className="inputText" value={this.state.inputVal}/>
            </div>
        )
    }
}

export default FloatingLabelInput;