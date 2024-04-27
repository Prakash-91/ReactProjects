import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios at the top

class Update extends Component {

  constructor(props)
  {
    super(props);
    this.state={product:{}};
  }

  onIdChange = (e)=>{
    this.setState({id:e.target.value})
  }
  onNameChange = (e)=>{
    this.setState({name:e.target.value})
  }
  onDescChange = (e)=>{
    this.setState({description:e.target.value})
  }
  onPriceChange = (e)=>{
    this.setState({price:e.target.value})
  }

  updateProduct()
  {
    axios.put('http://localhost:8080/api/products/',
    {id:this.state.id,name:this.state.name,description:this.state.description,price:this.state.price})
    .then(res =>{
      console.log(res.data);
    }).catch(error =>{
      console.error('Error',error);
    })

  }
    
  render() {
    return (
      <div>
        Product Id: <input onChange={this.onIdChange}/><br/>
        Product Name: <input onChange={this.onNameChange}/><br/>
        Product Description: <input onChange={this.onDescChange}/><br/>
        Product Price: <input onChange={this.onPriceChange}/><br/>
        <button onClick={this.updateProduct.bind(this)}>Update Product</button>
      </div>
    );
  }
}

export default Update;
