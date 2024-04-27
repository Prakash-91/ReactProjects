import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';  // Import Axios at the top

/*class GetAll extends Component {

  constructor(props)
  {
    super(props);
    this.state={products:[]};
  }

  componentDidMount()
  {
    //const axios = require('axios');
    axios.get('http://localhost:8080/api/products/')
    .then(res =>{
      console.log(res.data);
      this.setState({products:res.data});
    }).catch(error =>{
      console.error('Error',error);
    })

  }
    
  render() {
    return (
      <div>
        <h1>Products:</h1>
      </div>
    );
  }
}*/

// Using Function based component

function GetAll()  {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products/')
    .then(res =>{
      console.log(res.data);
      setProducts(res.data);
    }).catch(error =>{
      console.error('Error',error);
    })
  })
  
    return (
      <div>
        <h1>Products:</h1>
        <br/>
        <b>
        <table>
        <thead>
              <tr>
                  <td>Name</td>
                  <td>Description</td>
                  <td>Price</td>
              </tr>
          </thead>
       <tbody>
        {products.map(product => 
        <tr>
             <td> {product.name} </td>
             <td> {product.description} </td>
             <td> {product.price} </td>
        </tr>
        )}
        </tbody>
     </table>
     </b>
      </div>
    );
}

export default GetAll;
