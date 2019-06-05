import React from 'react';
import '../styles/FloatingLabelInput.css';

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
            });
        }else{
            this.setState({
                class:"off"
            });
        }
        this.setState({inputVal:evt.target.value});
    }

    componentDidMount(){
        if(this.props.componentId === "fname"){
            if(localStorage.key("fname")){
                this.setState({
                    inputVal : localStorage.getItem("fname")
                });
            }
        }else{
            if(localStorage.key("lname")){
                this.setState({
                    inputVal: localStorage.getItem("lname")
                });
            }
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