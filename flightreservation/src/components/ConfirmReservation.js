import {useParams} from 'react-router-dom';
function ConfirmReservation() {
  const {reservationId} = useParams()
  return (
    <div>
      <b>The Reservation is complete. The Confirmation code is :{reservationId}</b>
    </div>
  );
}

export default ConfirmReservation;
