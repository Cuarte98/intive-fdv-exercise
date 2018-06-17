import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

 class Table extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            users: [],
        };
    }
 
    componentDidUpdate(prevProps){
        if(prevProps.user !== this.props.user ){
            this.setState({
                users: [
                    ...this.state.users,
                    this.props.user
                ]
            })
        }    
    }

    render(){
        let rows = this.state.users.map((user, index) => {
            return (
            <tr key={index}>
                <td>{user.name} {user.surname}</td>
                <td>{user.country}</td>
                <td>{user.birthday}</td>
            </tr>)
        });
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
 }

Table.propTypes = {
    user: PropTypes.object
}

 export default Table;