import React, { useContext } from "react";
import "./style.css";
import 'bootstrap'
import Dashboard from "../SectionSvg/dashboard.svg";
import addcar from "../SectionSvg/addcar.svg";
import parametres from "../SectionSvg/parametres.svg";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {MdOutlineAdd,MdDashboard,MdOutlineHomeRepairService} from "react-icons/md"

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <div className="sidebar__content"> */}
      <div className="menu">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={"/dashboard"}>
              <span style={{ color:"white"}}>
                {/* <img className="logo_dashboard" src={Dashboard} style={{fill:"success"}} /> */}
                <MdDashboard/>
              </span>
              <p style={{ color:"white", textAlign: "center" }}> Dashboard </p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/addCar"}>
              <span style={{ color: "white"}}>
                {/* <img className="logo_dashboard" src={addcar} /> */}
                <MdOutlineAdd/>
              </span>
              <p style={{ color: "white", textAlign: "center" }}>
                {" "}
                Ajouter Voiture{" "}
              </p>
            </Link>
          </li>
          <li className="nav__item">
            <Link to={"/allcar"}>
              <span style={{ color: "white"}}>
                {/* <img className="logo_dashboard" src={parametres} /> */}
               <MdOutlineHomeRepairService/>
              </span>
              <p style={{ color: "white", textAlign: "center" }}> Services </p>
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Sidebar;
