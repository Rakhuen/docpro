import React from "react";
import "./App.css";
import LoginContainer from "./LoginPage.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./HomePage.js";
import PasienContainer from "./DataPasien.js";
import HistoryContainer from "./HistoryPasien.js";

const Container = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/home" component={HomeContainer} />
        <Route path="/pasien" component={PasienContainer} />
        <Route path="/history" component={HistoryContainer} />
      </Router>
    </div>
  );
};

export default Container;
