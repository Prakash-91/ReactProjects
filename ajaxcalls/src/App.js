import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios at the top

class App extends Component {
  handleClick(event) {
    console.log("Inside handleClick Method");
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }

  handleUpperCase(event) {
    console.log("Inside handleUpperCase Method");
    axios.post('http://test-routes.herokuapp.com/test/uppercase',{message:"All the Power within me"})
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
      console.log("Method Executed successfully");
  }

  render() {
    return (
      <div className="App">
        <b>
          <button onClick={this.handleClick.bind(this)}>Get Countries</button>
        </b>
        <b>
          <button onClick={this.handleUpperCase.bind(this)}>Get Upper Case</button>
        </b>
      </div>
    );
  }
}

export default App;
