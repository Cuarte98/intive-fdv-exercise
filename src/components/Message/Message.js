import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Message = (props) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return <p className="message">Hello {props.user.name} {props.user.surname} from {props.user.country}, on {props.user.bday} of {monthNames[props.user.bmonth-1]} you will have {props.user.age}</p>
};

Message.propTypes = {
    user: PropTypes.object.isRequired
}

export default Message