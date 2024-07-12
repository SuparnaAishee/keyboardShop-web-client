import React from "react";
import Navbar from "./navbar";

import { Outlet } from "react-router-dom";
import Footer from "./footer";



  const MainLayout: React.FC = () => {
    return (
      <div>
        <Navbar />
       
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    );
  };



export default MainLayout;
