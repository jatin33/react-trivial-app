import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';
import FloatingLabelInput from './FloatingLabelInput';

class Register extends React.Component {
    render() {
        return (
            <div>
                <h1>Hey! What should we call you?</h1>
                <FloatingLabelInput placeholder="First Name" componentId="fname" />
                <FloatingLabelInput placeholder="Last Name" componentId="lname" />
                
                    <Link
                        className='login-link' to='/home'>Continue</Link>
                
            </div>
        )
    }
}

export default Register;