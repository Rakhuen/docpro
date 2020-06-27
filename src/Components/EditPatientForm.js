import React, { useState, useEffect } from "react";
import "./NewAppointment.css";
import axios from "axios";

const EditPatientData = (props) => {
    const { popup, setPopup, idPasien } = props;
    
  
    const [namaPasien, setNamaPasien] = useState(idPasien && idPasien.nama);
    const [fotoPasien, setFotoPasien] = useState("");
    const [nomorHpPasien, setNomorHp] = useState("");
    const [alamatPasien, setAlamatPasien] = useState("");
    const [tanggalLahirPasien, setTanggalLahir] = useState("");
    const [NikPasien, setNikPasien] = useState("");
    const [preview, setPreview] = useState();
    
  


  
    const changeNamaPasien = (text) => {
      setNamaPasien(text.target.value);
      console.log(namaPasien)
    };
  
    const changeFotoPasien = (photo) => {
      const file = photo.target.files[0];
      const a = URL.createObjectURL(file);
      setPreview(a);
      setFotoPasien(file);
      console.log(fotoPasien)
    };
  
    const changeNomorHpPasien = (text) => {
      setNomorHp(text.target.value);
      console.log(nomorHpPasien)
    };
  
    const changeAlamatPasien = (text) => {
      setAlamatPasien(text.target.value);
      console.log(alamatPasien)
    };
  
    const changeTanggalLahirPasien = (tanggal) => {
      setTanggalLahir(tanggal.target.value);
      console.log(tanggalLahirPasien)
    };
  
    const changeNikPasien = (text) => {
      setNikPasien(text.target.value);
      console.log(NikPasien)
    };
  
  

    
  
    const postUpdatePatientData = async () => {
      let info = JSON.parse(localStorage.getItem("userInfo"));
  
      let inputData = new FormData();
  
      inputData.append("nama", namaPasien);
      inputData.append("nik", NikPasien);
      inputData.append("tanggal_lahir", tanggalLahirPasien);
      inputData.append("alamat", alamatPasien);
      inputData.append("phone", nomorHpPasien);
      inputData.append("photoPasien", fotoPasien);
  
      try {
        const result = await axios.post(
          `http://localhost:8000/api/doc-pro/v1/pasien/update?id=${idPasien}`,
          inputData,
          {
            headers: {
              authorization: `Bearer ${info.token}`,
            },
          }
        );
  
        
      } catch (error) {
        alert(error.data.message);
      }
    };
  
 
  
    const postPasien = () => {
        handlePopup();
        postUpdatePatientData();
    };
  
  
  
    const handlePopup = () => {
      setPopup(false);
     
    };
  
    const PatientForm = (
      <div className="pasienForm">
        <div className="form1">
          <div className="fotoProfile">
            <label className="LabelProfile">
              <input
                type="file"
                className="inputImage"
                name="fotoPasien"
                onChange={(event) => changeFotoPasien(event)}
                onKeyUp={changeFotoPasien}
              />
              {!fotoPasien && <p>+</p>}
              {fotoPasien && (
                <img
                  src={preview}
                  className="LabelProfile"
                  alt="foto pasien"
                ></img>
              )}
            </label>
  
            <div className="LabelNama">Upload Profile</div>
          </div>
  
          <div className="namadanHp">
            <div className="formNama">
              <div className="Label">Nama</div>
              <input
                type="text"
                className="inputTeks"
                name="namaPasien"
                value={namaPasien}
                onChange={changeNamaPasien}
                onKeyUp={changeNamaPasien}
              />
            </div>
  
            <div className="formNomorHp">
              <div className="Label">No. HP</div>
              <input
                type="tel"
                className="inputTeks"
                name="nomorHp"
                pattern="[0-9]{11}"
                value={nomorHpPasien}
                onChange={changeNomorHpPasien}
                onKeyUp={changeNomorHpPasien}
                required
              />
            </div>
          </div>
        </div>
  
        <div className="form2">
          <div className="formAlamat">
            <div className="Label">Alamat</div>
            <input
              type="text"
              className="inputForm2"
              name="alamatPasien"
              value={alamatPasien}
              onChange={changeAlamatPasien}
              onKeyUp={changeAlamatPasien}
            />
          </div>
  
          <div className="formTTD">
            <div className="Label">Tanggal Lahir</div>
            <input
              type="date"
              className="inputForm2"
              name="TTDPasien"
              value={tanggalLahirPasien}
              onChange={changeTanggalLahirPasien}
              onKeyUp={changeTanggalLahirPasien}
              required
            />
          </div>
        </div>
  
        <div className="form3">
          <div className="formNIK">
            <div className="Label">NIK</div>
            <input
              type="tel"
              className="inputNIK"
              name="nomorNIK"
              pattern="[0-9]{11}"
              value={NikPasien}
              onChange={changeNikPasien}
              onKeyUp={changeNikPasien}
              required
            />
          </div>
        </div>
  
        <div className="backNNext">
        
          <button className="btnSubmit" onClick={(e) => postPasien()}>
            Next
          </button>
        </div>
      </div>
    );
  
    
  
    let popupContent;
    popupContent = PatientForm;

  
   
  
    return (
      <div className={popup ? "backgroundGelap" : "containerHidden"}>
        <div className="popupContainer">
          <div className="containerFormNewpatient">
            <div className="headerNewPatient">
              <div className="judulForm">New Appointment</div>
              <button className="btnClose" onClick={() => handlePopup()}>
                X
              </button>
            </div>
  
            {popupContent}
          </div>
        </div>
      </div>
    );
  };

  export default EditPatientData;