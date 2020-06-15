import React, { useState } from "react";
import "./LoginPage.css";
import foto from "../asset/image2.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header = () => {
    return (
      <div className="headerContainer">
        <div className="headerSignup">Sign up</div>
      </div>
    );
  };
  
  const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [npa, setNpa] = useState("");
    const [fullName, setFullname] = useState("");
    const [nomorHpDokter, setNomorHpDokter] = useState("");
    const [emailDokter, setEmailDokter] = useState("");
    const [alamatDokter, setAlamatDokter] = useState("");
    const [tanggalLahirDokter, setTanggalLahirDokter] = useState("");

    console.log(username,password,npa,fullName,nomorHpDokter,emailDokter,alamatDokter,tanggalLahirDokter)

    const postSignupData = async () => {
      const SignupData = {
        npa: npa,
        nama: fullName,
        tanggal_lahir: tanggalLahirDokter,
        phone: nomorHpDokter,
        email: emailDokter,
        alamat: alamatDokter,
        username: username,
        password: password,

      };
  
      try {
        const result = await axios.post(
          "http://localhost:8000/api/doc-pro/v1/signup",
          SignupData
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


    const changeTanggalLahir = (text) => {
      setTanggalLahirDokter(text.target.value);
      console.log(tanggalLahirDokter);
    };


    const changeAlamat = (text) => {
      setAlamatDokter(text.target.value);
      console.log(alamatDokter);
    };

    const changeUsername = (text) => {
      setUsername(text.target.value);
      console.log(username);
    };
  
    const changePassword = (text) => {
      setPassword(text.target.value);
      console.log(password);
    };
  
    const changeNpa = (text) => {
        setNpa(text.target.value);
        console.log(npa);
      };

      const changeFullname = (text) => {
        setFullname(text.target.value);
        console.log(fullName);
      };

      const changeNomorHpDokter = (text) => {
        setNomorHpDokter(text.target.value);
        console.log(nomorHpDokter);
      };

      const changeEmailDokter = (text) => {
        setEmailDokter(text.target.value);
        console.log(emailDokter);
      };

    return (
      <div className="mainContainer">
  
        <div className="komponenSatu">
          <div className="formContainer">
          
            <div className="formItem">
              <div className="formLabel">NPA</div>
              <input
              type="tel"
              className="inputText"
              name="npa"
              pattern="[0-9]{11}"
              value={npa}
              onChange={changeNpa}
              onKeyUp={changeNpa}
              required
            />
             
            </div>

            <div className="formItem">
              <div className="formLabel">Full Name</div>
              <input
                type="text"
                className="inputText"
                name="fullname"
                value={fullName}
                onChange={changeFullname}
                onKeyUp={changeFullname}
                required
              />
            </div>

            <div className="formItem">
              <div className="formLabel">Tanggal lahir</div>
              <input
                type="date"
                className="inputText"
                name="tanggalLahir"
                value={tanggalLahirDokter}
                onChange={changeTanggalLahir}
                onKeyUp={changeTanggalLahir}
              />
            </div>

            <div className="formItem">
              <div className="formLabel">Phone</div>
              <input
              type="tel"
              className="inputText"
              name="nomorHp"
              value={nomorHpDokter}
              pattern="[0-9]{11}"
              onChange={changeNomorHpDokter}
              onKeyUp={changeNomorHpDokter}
              required
            />
            </div>

            <div className="formItem">
              <div className="formLabel">Email</div>
              <input
                type="email"
                className="inputText"
                name="email"
                value={emailDokter}
                onChange={changeEmailDokter}
                onKeyUp={changeEmailDokter}
              />
            </div>

            <div className="formItem">
              <div className="formLabel">Alamat</div>
              <input
                type="text"
                className="inputText"
                name="alamat"
                value={alamatDokter}
                onChange={changeAlamat}
                onKeyUp={changeAlamat}
              />
            </div>


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
  
            <NavLink to="/" className="formBtn">
              <button onClick={() => postSignupData()} > Sign up</button>
            </NavLink>
  
            <NavLink to="/login" className="btnSignup">have an account? Login</NavLink>
  
          </div>
        </div>
      </div>
    );
  };
  
  const SignupContainer = () => {
    return (
      <div className="loginContainer">
        <Form />
      </div>
    );
  };
  
  export default SignupContainer;
  