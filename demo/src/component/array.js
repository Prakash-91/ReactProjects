

function App() {

// Array Declaration

const hobbies = ["cooking","sports","spiritual"];

console.log(hobbies);
hobbies.push("movies");
console.log(hobbies);

const val = hobbies.findIndex(item => item === "sports");
console.log(val);

const mapValue = hobbies.map(item => item+"!");
console.log(mapValue);

console.log(hobbies);

const val2 =hobbies.map(item =>  ({key: item}));
console.log(val2);

// Alter way to declare Array

const [firstName,lastName] = ["Prakash","palai"];
console.log(firstName+","+lastName);

// Alter way to declare Object
const {empId: id,empName} ={
  empId : "101",
  empName: "Jyoti"
}
console.log(id+","+empName);

  return (
    <div>    
    </div>
  );
}

export default App;
