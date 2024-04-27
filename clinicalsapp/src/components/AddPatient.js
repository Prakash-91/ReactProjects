import {React,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AddPatient()  {

  const [firstName,setfirstName] = useState()
  const [lastName,setLastName] = useState()
  const [age,setAge] = useState()

  const handleSubmit = (event) =>{
    //event.preventDefault();
    const data = {
      firstName:firstName,
      lastName:lastName,
      age:age
    }
    
    axios.post('http://localhost:8070/clinicalservices/api/patients',data)
    .then(res => {
      toast("Patient added successfully : "+res.data.id);
    })
  }

  return (
    <div>
    <h2>Create Patient:</h2>
    <form onSubmit={e => { e.preventDefault(); }}>
        FirstName: <input type="text" name="firstName" onChange={e=> setfirstName(e.target.value)}/> <br/>
        LastName: <input type="text" name="lastName" onChange={e=> setLastName(e.target.value)}/> <br/>
        Age: <input type="text" name="age" onChange={e=> setAge(e.target.value)}/>
        <button onClick={handleSubmit.bind(this)}>Confirm</button>
    </form>
      <Link  to={'/'}>Go Back</Link>
    </div>
    );
  }

export default AddPatient;
