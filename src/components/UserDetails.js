import React from 'react';
import UserComponent from './UserComponent';

class UserDetails extends React.Component {
    render() {
        return (
            <div>
                <UserComponent name="First Name" />
                <UserComponent name="Last Name" />
            </div>
        )
    }
}

export default UserDetails;