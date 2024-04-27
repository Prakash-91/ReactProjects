import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios at the top

/*class Create extends Component {

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

  createProduct()
  {
    axios.post('http://localhost:8080/api/products/',
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
        <button onClick={this.createProduct.bind(this)}>Create Product</button>
      </div>
    );
  }
}*/

function Create() {

  const [id, setId] = useState('');
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');

  function createProduct()
  {
    axios.post('http://localhost:8080/api/products/',{id:id,name:name,description:description,price:price})
    .then(res =>{
      console.log(res.data);
    }).catch(error =>{
      console.error('Error',error);
    })

  }
    return (
      <div>
        Product Id: <input onChange={e => setId(e.target.value)}/><br/>
        Product Name: <input onChange={e => setName(e.target.value)}/><br/>
        Product Description: <input onChange={e => setDescription(e.target.value)}/><br/>
        Product Price: <input onChange={e => setPrice(e.target.value)}/><br/>
        <button onClick={createProduct.bind(this)}>Create Product</button>
      </div>
    );
}

export default Create;
