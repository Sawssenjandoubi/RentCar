import React from "react";
/*import Router from "../../routes/Router";*/
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";


const LayoutProvider = () => {
  return (
    <div className="layout">
      <Sidebar/>
      <div className="main__layout">
        <TopNav/>
      </div>
      
    </div>
  );
};

export default LayoutProvider ;