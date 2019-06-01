import React from 'react';
import './FloatingLabelInput.css';

class FloatingLabelInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "off"
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(evt) {
        if(evt.target.value !== ""){
            this.setState({
                class:"on"
            });
        }else{
            this.setState({
                class:"off"
            });
        }
    }
    render() {
        return (
            <div>
                <label className={this.state.class}>{this.props.placeholder}</label>
                <input placeholder={this.props.placeholder} onChange={this.handleInput} className="inputText" />
            </div>
        )
    }
}

export default FloatingLabelInput;