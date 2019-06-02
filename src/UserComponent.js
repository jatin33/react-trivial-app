import React from 'react';
import {Link} from 'react-router-dom';

const UserComponent = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <div>
                <span>
                    {props.name === "First Name" ? localStorage.getItem("fname") : localStorage.getItem("lname")}
                </span>
                <span>
                    <Link to="/edituser">Edit</Link>
                </span>
            </div>
        </div>
    );
}

export default UserComponent;