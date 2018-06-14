import React, { Component } from 'react';
import Form from './components/Form/Form'
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
      }
    };

    this.onSend = this.onSend.bind(this)
  }

  onSend(user){
    console.log('onSend en padre funciona')
    this.setState({
      currentUser:{
        name: user.name,
        surname: user.surname,
        country: user.country,
        birthday: user.birthday,
      }
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Intive-FDV Exercise</h1>
        <div className="container">
          <Form  onSubmit={this.onSend}/>
        </div>
      </div>
    );
  }
}

export default App;
