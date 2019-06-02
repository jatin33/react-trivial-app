import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserComponent.css';

class UserComponent extends React.Component {
    render() {
        return (
            <div className="card-container">
                <p className="prop-name">{this.props.name}</p>
                <div className="user-details-container">
                    <span className="user-name">
                       <b>
                     {this.props.name === "First Name" ? localStorage.getItem("fname") : localStorage.getItem("lname")}
                     </b>
                    </span>
                    <span>
                        <Link className="user-edit-link" to={`/edituser/${this.props.name === "First Name" ? localStorage.getItem("fname") : localStorage.getItem("lname")}`}>Edit</Link>
                    </span>
                </div>
            </div>
        );
    }
}
export default UserComponent;