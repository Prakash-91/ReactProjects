import React, { Component } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import GetAll from './GetAll';
import Get from './Get';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Routes>
            <Route path='/GetAll' element={<GetAll />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/Update' element={<Update />} />
            <Route path='/Delete' element={<Delete />} />
            <Route path='/Get' element={<Get />} />
          </Routes>

          <Link to="/GetAll">GetAll</Link><br />
          <Link to="/Create">Create</Link><br />
          <Link to="/Update">Update</Link><br />
          <Link to="/Delete">Delete</Link><br />
          <Link to="/Get">Get</Link>
        </div>
    );
  }
}

export default App;
