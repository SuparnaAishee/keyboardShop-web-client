import React from "react";
import Navbar from "./navbar";

import { Outlet } from "react-router-dom";



  const MainLayout: React.FC = () => {
    return (
      <div>
        <Navbar />
       
        <main>
          <Outlet />
        </main>
        
      </div>
    );
  };



export default MainLayout;
