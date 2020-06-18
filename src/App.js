import React, { useState } from "react";
import "./App.css";
import LoginContainer from "./View/LoginPage.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./View/HomePage.js";
import PasienContainer from "./View/DataPasien.js";
import HistoryContainer from "./View/HistoryPasien.js";
import InputBiayaContainer from "./View/ItemPage.js";
import SignupContainer from "./View/SignupPage.js";

const AppContext = React.createContext();

let userData = localStorage.getItem("userInfo");
if (userData) userData = JSON.parse(userData);

const AppProvider = (props) => {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(!!userData);
  const appValue = {
    isLoggedIn,
    setIsLoggedIn,
    userData,
  };

  console.log(userData);

  return (
    <AppContext.Provider value={{ ...appValue }}>
      {children}
    </AppContext.Provider>
  );
};

const AppConsumer = AppContext.Consumer;
export { AppProvider, AppConsumer, AppContext };

const Container = () => {
  return (
    <AppProvider>
      <div>
        <Router>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/home" component={HomeContainer} />
          <Route path="/pasien" component={PasienContainer} />
          <Route path="/history" component={HistoryContainer} />
          <Route path="/inputbiaya" component={InputBiayaContainer} />
          <Route path="/signup" component={SignupContainer} />
        </Router>
      </div>
    </AppProvider>
  );
};

export default Container;
