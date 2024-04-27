import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios at the top

class Delete extends Component {

  constructor(props)
  {
    super(props);
    this.state={product:{}};
  }

  onIdChange = (e)=>{
    this.setState({id:e.target.value})
  }

  deleteProduct()
  {
    axios.delete("http://localhost:8080/api/products/"+this.state.id)
    .then(res =>{
      console.log(res.data);
    }).catch(error =>{
      console.error('Error',error);
    })

  }
    
  render() {
    return (
      <div>
        Enter Product Id: <input onChange={this.onIdChange}/>
        <button onClick={this.deleteProduct.bind(this)}>Delete Product</button>
      </div>
    );
  }
}

export default Delete;
