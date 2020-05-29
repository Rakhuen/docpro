import React, { useState } from "react";
import "./LoginPage.css";
import foto from "../asset/image2.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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

      // const user = {
      //   userId: result.data.userId,
      //   username: result.data.userName,
      //   poin: result.data.userPoints
      // };
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
            <button onClick={() => postLoginData()}> Login</button>
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
