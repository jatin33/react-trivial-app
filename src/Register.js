import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import FloatingLabelInput from './FloatingLabelInput';

class Register extends React.Component {
    render() {
        return (
            <div>
                <h1>Hey! What should we call you?</h1>
                <FloatingLabelInput placeholder="First Name" />
                <FloatingLabelInput placeholder="Last Name" />
                <div className="login-strip">
                    <Link 
                    className='login-link' to='/home'>Continue</Link>
                </div>
            </div>
        )
    }
}

export default Register;