import React, { Component } from 'react';
import Form from './components/Form/Form';
import Message from './components/Message/Message';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {
        name: '',
        surname: '',
        country: '',
        birthDay: '',
        bday: '',
        bmonth: '',
        byear: '',
        age: null
      },
      messageActive: false,
    };

    this.onSend = this.onSend.bind(this);
    this.ageCalc = this.ageCalc.bind(this);
  }

  

  onSend(user){
    let birthdayArray  = user.birthday.split('-')
    console.log(birthdayArray[0])
    let age = this.ageCalc(birthdayArray[0])
    console.log(age)
    this.setState({
      currentUser:{
        name: user.name,
        surname: user.surname,
        country: user.country,
        birthday: user.birthday,
        bday: birthdayArray[2],
        bmonth: birthdayArray[1],
        byear: birthdayArray[0],
        age: age
      },
      messageActive: true,
    });
    
  }

  ageCalc(year){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    console.log(currentYear)
    return parseInt(currentYear, 10) - year;
  }
  render() {
    let message = null
    if(this.state.messageActive){
      message = <Message user={this.state.currentUser}/>
    }else{
      message = null;
    }
    return (
      <div className="App">
      <h1>Intive-FDV Exercise</h1>
        <div className="container">
          <Form  onSubmit={this.onSend}/>
          {message}
        </div>
      </div>
    );
  }
}

export default App;
