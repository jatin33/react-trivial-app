import React from 'react';
import { Link } from 'react-router-dom';

class UserComponent extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <div>
                    <span>
                        {this.props.name === "First Name" ? localStorage.getItem("fname") : localStorage.getItem("lname")}
                    </span>
                    <span>
                        <Link to={`/edituser/${this.props.name === "First Name" ? localStorage.getItem("fname") : localStorage.getItem("lname")}`}>Edit</Link>
                    </span>
                </div>
            </div>
        );
    }
}
export default UserComponent;