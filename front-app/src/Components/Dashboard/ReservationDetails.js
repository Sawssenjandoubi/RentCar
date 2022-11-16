import React, { useState, useEffect } from "react";
import axios from "axios";
function ReservationDetails({ carId }) {
  const [details, setDetails] = useState();
  useEffect(() => {
    axios
      .get(`/api/get_user_reservation/${carId}`)
      .then((response) => console.log(response))
      // setDetails(response.data.details)
      .catch((err) => console.dir(err));
  }, []);

  return (
    <div>
      <p>Details</p>
      {/* {details.map((detail) => {
          // return <CarItem key={car._id} {...car} />;
        })} */}
    </div>
  );
}

export default ReservationDetails;
