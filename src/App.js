import React from "react";
import "./App.css";
import LoginContainer from "./View/LoginPage.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./View/HomePage.js";
import PasienContainer from "./View/DataPasien.js";
import HistoryContainer from "./View/HistoryPasien.js";
import InputBiayaContainer from "./View/ItemPage.js";

const Container = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/home" component={HomeContainer} />
        <Route path="/pasien" component={PasienContainer} />
        <Route path="/history" component={HistoryContainer} />
        <Route path="/inputbiaya" component={InputBiayaContainer} />
      </Router>
    </div>
  );
};

export default Container;
