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
    console.log(birthdayArray)
    let age = this.ageCalc(birthdayArray)
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

  ageCalc(date){
    let currentDate = new Date();
    let currentYear = parseInt(currentDate.getFullYear(), 10);
    let yearsold = currentYear - date[0]
    if(date[1] < currentDate.getMonth() + 1){
      yearsold += 1
    } else if(date[1] == currentDate.getMonth() + 1){
      if(date[2] < currentDate.getDate()){
        yearsold += 1
      }
    }

    return yearsold;
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
