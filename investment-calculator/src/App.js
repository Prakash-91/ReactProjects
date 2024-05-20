import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";
function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const isValidUserInput = userInput.duration > 0;

function handleChange(inputIdentifier, newValue){
    setUserInput(prevuserInput => {
        return{
            ...prevuserInput,
            [inputIdentifier]: +newValue  // converting String to integer using "+"
        };
    });
}
  return (
    <>
    <Header />
    <UserInput userValue={userInput} onInputChange={handleChange}/>
    {isValidUserInput && <Results input={userInput}/>}
    {!isValidUserInput && <p className="center">Please Enter duration greater than 0</p>}
    </>
  );
}

export default App;
