import React from 'react';
import { Link } from 'react-router-dom';
import FloatingLabelInput from './FloatingLabelInput';

class EditDetails extends React.Component{
    render(){
        return(
            <div>
            <h1>
                Update your Name
            </h1>
            <FloatingLabelInput placeholder={this.props.match.params.name}/>
            <Link to="/showuser">Save</Link>
            </div>
        )
    }
}

export default EditDetails;