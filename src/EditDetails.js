import React from 'react';
import FloatingLabelInput from './FloatingLabelInput';


class EditDetails extends React.Component{
    render(){
        return(
            <div>
            <h1>
                Update your Name
            </h1>
            <FloatingLabelInput placeholder={localStorage}/>
            </div>
        )
    }
}

export default EditDetails;