import React, { Component } from 'react';
import './styles.scss'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: null,
            surname: null,
            country: null,
            birthday: null,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(results => {return results.json()})
        .then(data => {
            let countryNames = data.map(country => {
                return(
                    <option value={country.name}>{country.name}</option>
                )   
            })
            this.setState({countrys: countryNames})
        })
    }

    handleChange(event){
        const name = event.target.name
        this.setState({[name]: event.target.value})
    }

    handleSubmit(event){
        var user = {
            name: this.state.name,
            surname: this.state.surname,
            country: this.state.country,
            birthday: this.state.birthday
        }
        this.props.onSubmit(user);
        event.preventDefault();
    }

    render(){
        return(
            <div className="containerForm">
                <form action="" onSubmit={this.handleSubmit} >
                    <label>
                        Name
                        <input type="text" name='name' value={this.state.name} onChange={this.handleChange} required/>
                    </label>    
                    <label>
                        Surname
                        <input type="text" name='surname' value={this.state.surname} onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Country
                        <select name="country" value={this.state.country} onChange={this.handleChange} required>
                            {this.state.countrys}
                        </select>
                    </label>
                    <label>
                        Birthday    
                        <input type="date" name="birthday" id="" value={this.state.birthday} onChange={this.handleChange} required/>
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
};



export default Form