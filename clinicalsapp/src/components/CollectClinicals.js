import React from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'


function CollectClinicals()  {

  const {patientId} = useParams()
  const [patientData,setPatientData] = useState()
  const [isLoading,setLoading]=useState(true)

  const [componentName,setComponentName] = useState('')
  const [componentValue,setComponentValue] = useState('')

  useEffect(() =>{
    axios.get('http://localhost:8070/clinicalservices/api/patients/'+patientId).then(res =>{
      setPatientData(res.data);
      setLoading(false);
    })
  })


  const handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
      patientId:patientId,
      componentName:componentName,
      componentValue:componentValue
    }
    
    axios.post('http://localhost:8070/clinicalservices/api/clinicals',data)
    .then(res => {
      toast("Clinical data added succesfully for the Patient");
    })
  }


    return (
      <div>
          <h2>Patient Details</h2>
              FirstName: {!isLoading?patientData.firstName:""} <br/>
              lastName : {!isLoading?patientData.lastName:""} <br/>
              Age:  {!isLoading?patientData.age:""} <br/>

              <h2>Patient Clinical Data:</h2>

              <form>
                    Clinical Entry Type:
                    <select name="" onChange={e=>setComponentName(e.target.value)}>
                        <option>Select One</option>
                        <option value="bp">Blood Pressure(Sys/Dys)</option>
                        <option value="hw">Height/Weight</option>
                        <option value="heartrate">Heart Rate</option>
                    </select> <br/>
                    Value:<input type="text" name="componentValue" onChange={e=>setComponentValue(e.target.value)}/><br/>
                    <button onClick={handleSubmit.bind(this)}>Confirm</button>
                </form> <br/>

                <Link  to={'/'}>Go Back</Link>

      </div>
    );
  }

export default CollectClinicals;
