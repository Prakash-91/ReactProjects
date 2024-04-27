import './App.css';

function App() {

  const hobbies = ["spritual","cooking"]
  const hobbies1 = ["movies"];

  // Need to merge 2 Arrays , we can do using spread operator (...)
  const newHobbies = [...hobbies,...hobbies1];
  console.log(newHobbies);
  
  // for loop
for (const hobby of newHobbies){
  console.log(hobby);
}

  // we can also merge 2 ojects using spread (...) operator

  const user ={
    name: "Prakash",
    age:"33"
  }

  const user1 ={
    isAdmin:true,
    ...user
  }

  console.log(user1);


  return (
    <div>    
    </div>
  );
}

export default App;
