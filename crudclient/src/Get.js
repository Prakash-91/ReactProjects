import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios at the top

/*class Get extends Component {

  constructor(props)
  {
    super(props);
    this.state={product:{}};
  }

  getProduct()
  {
    axios.get("http://localhost:8080/api/products/"+this.state.id)
    .then(res =>{
      console.log(res.data);
      this.setState({product:res.data[0]});
    }).catch(error =>{
      console.error('Error',error);
    })

  }

  onIdChange = (e)=>{
    this.setState({id:e.target.value})
  }
    
  render() {
    return (
      <div>
        Enter Product Id: <input onChange={this.onIdChange}/>
        <button onClick={this.getProduct.bind(this)}>Get Product</button>
        <br/>
        <b>
        Name: {this.state.product.name} <br/>
        Description: {this.state.product.description} <br/>
        Price: {this.state.product.price}
        </b>
      </div>
    );
  }
}*/

// Using Function based Component

function Get() {

  const [product, setProduct] = useState({});

  function getProduct()
  {
    axios.get("http://localhost:8080/api/products/"+product.id)
    .then(res =>{
      console.log(res.data);
      setProduct(res.data[0]);
    }).catch(error =>{
      console.error('Error',error);
    })

  }

    return (
      <div>
        Enter Product Id: <input onChange={e => setProduct({id:e.target.value})}/>
        <button onClick={getProduct.bind(this)}>Get Product</button>
        <br/>
        <b>
        Name: {product.name} <br/>
        Description: {product.description} <br/>
        Price: {product.price}
        </b>
      </div>
    );
}

export default Get;
