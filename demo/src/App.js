import './App.css';

function App() {


  function g1(){
    console.log("Hello HI ...");
  }

  function greeter(greet){
    console.log("Hello");
    greet();
  }


  greeter(() => console.log("Prakash"));


  return (
    <div>    
    </div>
  );
}

export default App;
