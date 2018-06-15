import React, { Component } from 'react';
import Form from './components/Form/Form';
import Message from './components/Message/Message';
import Table from './components/Table/Table';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {
        name: '',
        surname: '',
        country: '',
        birthday: '',
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
    let age = this.ageCalc(birthdayArray)
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
    } else if(parseInt(date[1], 10) === currentDate.getMonth() + 1){
      if(date[2] < currentDate.getDate()){
        yearsold += 1
      }
    }
    return yearsold;
  }

  render() {
    let message = null
    if(this.state.messageActive){
      message = <Message user={this.state.currentUser} />
    }
    return (
      <div className="App">
      <h1>Intive-FDV Exercise</h1>
        <div className="container">
          <Form  onSubmit={this.onSend}/>
          <Table user={this.state.currentUser}/>
          {message}
          <p className='author'>Franco Cuarterolo</p>
        </div>
      </div>
    );
  }
}

export default App;
