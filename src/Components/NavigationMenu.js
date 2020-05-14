import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import Courage from "../asset/courage.jpg";

const NavigationMenu = () => {
  const homeActive = window.location.pathname === "/home";
  const patientActive = window.location.pathname === "/pasien";
  const historyActive = window.location.pathname === "/history";
  const inputbiayaActive = window.location.pathname === "/inputbiaya";

  const Footer = (props) => {
    const { username } = props;

    const handleLogout = () => {
      alert("logout");
    };

    return (
      <div className="footer">
        <hr></hr>
        <div style={{ display: "flex" }}>
          <div className="photoContainer">
            <img
              className="profilePhoto"
              src={Courage}
              alt="profilePhoto"
            ></img>
          </div>
          <div className="signoutContainer">
            <div className="username">{username} </div>
            <NavLink to="/">
              <button className="btnSignout" onClick={() => handleLogout}>
                Sign out
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="NavigationCon">
      <div className="upperNavContainer">
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

          <NavLink
            to="/inputbiaya"
            className={inputbiayaActive ? "menuActive" : "menuInactive"}
          >
            Input Biaya
          </NavLink>
        </div>
      </div>

      <Footer username="Drg. Siapa siapa"></Footer>
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
