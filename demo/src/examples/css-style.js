import React from 'react';
import '../index.css';

// don't change the Component name "App"
export default function App() {
    
const[isSelected, setSelected] = React.useState(true);
    
    function handleSubmit(){
        setSelected(false);
    }
    return (
        <div>
            <p className={!isSelected ? 'active':''}>Style me!</p>
            <button onClick={handleSubmit}>Toggle style</button>
        </div>
    );
}
