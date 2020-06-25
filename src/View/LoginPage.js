import React, { useState, useContext } from "react";
import "./LoginPage.css";
import foto from "../asset/image2.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../App";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerItem">DocPro.</div>
    </div>
  );
};

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const app = useContext(AppContext);

  const postLoginData = async () => {
    const LoginData = {
      username: username,
      password: password,
    };

    try {
      const result = await axios.post(
        "http://localhost:8000/api/doc-pro/v1/login",
        LoginData
      );

      const user = {
        doctorId: result.data.id_doctor,
        token: result.data.token,
      };
      console.log(user);
      localStorage.setItem("userInfo", JSON.stringify(user));
      app.setIsLoggedIn(true);
      console.log(result);
    } catch (error) {
      setPassword("");
      setUsername("");
      console.log(error.response);
      alert(error.response.data.message);
    }
  };

  const changeUsername = (text) => {
    setUsername(text.target.value);
    console.log(username);
  };

  const changePassword = (text) => {
    setPassword(text.target.value);
    console.log(password);
  };

  return (
    <div className="utamaContainer">
      <div className="komponenDua">
        <img className="Foto" src={foto} alt="loginImg" />
      </div>

      <div className="komponenSatu">
        <div className="formContainer">
          <Header />

          <div className="formItem">
            <div className="formLabel">Username</div>
            <input
              type="text"
              className="inputText"
              name="username"
              value={username}
              onChange={changeUsername}
              onKeyUp={changeUsername}
            />
          </div>

          <div className="formItem">
            <div className="formLabel">Password</div>
            <input
              type="password"
              className="inputText"
              name="password"
              value={password}
              onChange={changePassword}
              onKeyUp={changePassword}
            />
          </div>

          <NavLink to="/home" className="formBtn">
            <button onClick={() => postLoginData()} className="formInsideBtn">
              Login
            </button>
          </NavLink>

          <NavLink to="/signup" className="btnSignup">
            Don't have an account? Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const LoginContainer = () => {
  return (
    <div className="loginContainer">
      <Form />
    </div>
  );
};

export default LoginContainer;
