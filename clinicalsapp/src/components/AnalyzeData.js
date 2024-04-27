import React from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import {Link,useParams} from 'react-router-dom'


function AnalyzeData()  {

  const {patientId} = useParams()
  const [patientData,setPatientData] = useState([])
  const [isLoading,setLoading]=useState(true)

  useEffect(() =>{
    axios.get('http://localhost:8070/clinicalservices/api/patients/analyze/'+patientId).then(res =>{
      setPatientData(res.data);
      setLoading(false);
    })
  })


    return (
      <div>
        <h2>Patient Details</h2>
              FirstName: {!isLoading?patientData.firstName:""} <br/>
              lastName : {!isLoading?patientData.lastName:""} <br/>
              Age:  {!isLoading?patientData.age:""} <br/>

              <h2>Clinical Report:</h2>
                    {!isLoading?patientData.clinicalData.map(eachEntry=><PatientRowCreator item={eachEntry} 
                    />):""}
            
            <Link to={'/'}>Go Back</Link>

      </div>
    );
  }

  function PatientRowCreator(props){
    var eachEntry = props.item;
    return(
      <div>
          <table align="center">
            <tr>
                <td><b>{eachEntry.componentName}</b></td>
            </tr>
            <tr>
                <td>{eachEntry.componentName}</td>
                <td>{eachEntry.componentValue}</td>
                <td>{eachEntry.measuredDateTime}</td>

            </tr>
        </table>
      </div>
    );
}

export default AnalyzeData;
