import React from 'react';
import './styles.scss'

const Message = (props) => {
    return <p>Hello {props.user.name} {props.user.surname} from {props.user.country}, on {props.user.bday} of {props.user.bmonth} you will have {props.user.age}</p>
};

export default Message