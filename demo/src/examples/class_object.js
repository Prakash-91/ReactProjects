function App() {

// Object Declaration
const user = {
  name:"Prakash",
  age:"33",

  greet(){
    console.log(this.name+":"+this.age);
  }
}

user.greet();


// Alter way to declare Object
const {empId: id,empName} ={
  empId : "101",
  empName: "Jyoti"
}
console.log(id+","+empName);

// class Declaration

class Student{

  constructor(name,age){
    this.name =name;
    this.age =age;
  }

  greet(message){
    console.log(message+this.name);
  }
}

const student = new Student("Prakash","34");
student.greet("Good Morning !!!");

  return (
    <div>    
    </div>
  );
}

export default App;
