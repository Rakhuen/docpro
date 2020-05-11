import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
  const homeActive = window.location.pathname === "/home";
  const patientActive = window.location.pathname === "/pasien";
  const historyActive = window.location.pathname === "/history";
  
  return (
    <div className="NavigationCon">
      <div className="LogoContainer">
        <div className="Logo">DocPro</div>
      </div>

      <div className="MenuContainer">
        <NavLink
          to="/home"
          className={homeActive ? "menuActive" : "menuInactive"}
        >
          Jadwal
        </NavLink>

        <NavLink
          to="/pasien"
          className={patientActive ? "menuActive" : "menuInactive"}
        >
          Data Pasien
        </NavLink>

        <NavLink
          to="/history"
          className={historyActive ? "menuActive" : "menuInactive"}
        >
          History
        </NavLink>
      </div>

      <div className="footer">
        <div className="FotoProfile">foto</div>
        <div className="NameAndSignout">
          <div className="Nama">Budi</div>
          <div className="btnSignout">Sign out</div>
        </div>
      </div>
    </div>
  );
};

const NavigationContainer = () => {
  return (
    <div className="NavContainer">
      <NavigationMenu />
    </div>
  );
};

export default NavigationContainer;
