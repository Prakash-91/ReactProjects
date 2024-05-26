import { useState } from "react";
import './Example.css';

function Example() {
    const[selectedValue,setSelectedValue] = useState('');
   
    function handleYesColour(){
        setSelectedValue('yes');
    }
    
     function handleNoColour(){
        setSelectedValue('no');
        
    }
    
    const value = selectedValue === 'yes' ? 'green' : selectedValue === 'no' ? 'red' : 'white';
    console.log(value);
    
    return (
    <div id="example">
       <h1 style={{
          color: value
      }}>CSS is great!</h1>
      <menu>
        <li>
          <button className={` ${selectedValue === 'yes' ? 'highlight-green' : ''}`}
          onClick={handleYesColour}>Yes</button>
        </li>
        <li>
          <button className={` ${selectedValue === 'no' ? 'highlight-red' : ''}`}
          onClick={handleNoColour}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default Example;
