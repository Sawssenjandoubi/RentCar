import React, { useState, useEffect } from "react";

import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import ReservationDetails from "./ReservationDetails";
function CardProviderReservation({ carid }) {
  console.log(carid);
//   let id = localStorage.getItem("id");

  return (
    <MDBContainer
      className=" blocFac mt-4"
      style={{ width: "500px", textAlign: "center" }}
    >
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={3} headerTitle="Pour plus de détail">
          <ReservationDetails carId={carid}/>
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
}

export default CardProviderReservation;
