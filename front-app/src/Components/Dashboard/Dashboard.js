import "./style.css";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import LayoutProvider from "../Layout/LayoutProvider ";
import CarItem from "./CarItem";
import React, { useState, useEffect } from "react";
import CardProviderReservation from "./CardProviderReservation";
function Dashboard() {
  const [cars, setCars] = useState();
  // const [fullscreen, setFullscreen] = useState(true);
  // const [show, setShow] = useState(false);
  let id = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`/api/get_user_car/${id}`)
      .then((res) => setCars(res.data.cars))
      .catch((err) => console.dir(err));
  }, []);

  return (
    <div className="dashboard">
      <LayoutProvider />
      {cars ? (
        cars.map((car) => {
          return <CarItem key={car._id} {...car} />;
        })
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <SyncLoader size={15} color="#212529" />
          Loading...
        </div>
      )}
    </div>
  );
}

export default Dashboard;
