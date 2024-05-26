import { useState } from "react";
import './Example.css';

function Example2() {
    const[selectedValue,setSelectedValue] = useState('');
   
    function handleYesColour(){
        setSelectedValue('yes');
    }
    
     function handleNoColour(){
        setSelectedValue('no');
        
    }
    
    return (
    <div id="example">
       <h1 className={`${selectedValue === 'yes' ? 'highlight-green' :
        selectedValue === 'no' ? 'highlight-red' : 'white'}`}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={handleYesColour}>Yes</button>
        </li>
        <li>
          <button onClick={handleNoColour}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default Example2;
