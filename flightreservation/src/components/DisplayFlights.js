import axios from 'axios'; 
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

function DisplayFlights() {

  const {from,to,departureDate} = useParams()
  const [flightData,setFlightData] = useState([])
  const [isLoading,setLoading]=useState(true)
  let count = 0

  useEffect(() =>{
    axios.get('http://localhost:8090/flightservices/flightsSearch?from='+from+'&to='+to
    +'&departureDate='+departureDate).then(res =>{
      setFlightData(res.data);
      setLoading(false);
    })
  },count)

  return (
    <div>
      <h2>Flights</h2>
      <table>
        <thead>
          <th>Airlines</th>
          <th>Departure City</th>
          <th>Arrival City</th>
          <th>Departure Date & Time</th>
        </thead>
        <tbody> 
        {!isLoading?flightData.map(flight=> <FlightRowCreator item={flight}/>):""}
        </tbody>
        </table>
    </div>
  );
}

function FlightRowCreator(props){
  var flight = props.item;
  return <tr>
    <td>{flight.operatingAirlines}</td>
    <td>{flight.departureCity}</td>
    <td>{flight.arrivalCity}</td>
    <td>{flight.estimatedDepartureTime}</td>
    <td><Link to={'/passengerDetails/'+flight.id}>Select</Link></td>
    </tr>
}
export default DisplayFlights;
