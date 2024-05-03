import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
    const[isData,setData] = React.useState(true);
    
    function handleSubmit(){
        setData(false);
    }
    
    function handleProceed(){
        setData(true);
    }
    
    return (
      <div>
        {!isData && <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleProceed}>Proceed</button>
          </div>}
        <button onClick={handleSubmit}>Delete</button>
      </div>    
    );
}