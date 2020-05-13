import React, { useState } from "react";
import "./NewAppointment.css";

const NewAppointment = (props) => {
  const { popup, setPopup } = props;
  const [nextForm, setNextForm] = useState(false);
  const [namaPasien, setNamaPasien] = useState("");

  const handlePopup = () => {
    setPopup(false);
    setNextForm(false);
  };

  const changeNamaPasien = (e) => {
    setNamaPasien(e.target.value);
    console.log(namaPasien);
  };

  const PatientForm = (
    <div className="pasienForm">
      <div className="form1">
        <div className="fotoProfile">
          <div className="LabelProfile">Upload Photo</div>
          <input type="file" className="inputImage" name="fotoPasien" />
        </div>

        <div className="namadanHp">
          <div className="formNama">
            <div className="Label">Nama</div>
            <input
              key="name"
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
              required
            />
          </div>
        </div>
      </div>

      <div className="form2">
        <div className="formAlamat">
          <div className="Label">Alamat</div>
          <input type="text" className="inputForm2" name="alamatPasien" />
        </div>

        <div className="formTTD">
          <div className="Label">Tanggal Lahir</div>
          <input type="date" className="inputForm2" name="TTDPasien" required />
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
            required
          />
        </div>
      </div>

      <div className="form4">
        <input
          type="submit"
          className="btnNext"
          value="Next"
          onClick={() => setNextForm(true)}
        />
      </div>
    </div>
  );

  const AppointmentForm = (
    <div classname="bookingContainer">
      <div className="formAtas">
        <div className="formKeperluan">
          <div className="Label">Keperluan</div>
          <input type="text" className="inputTeks" name="keperluan" required />
        </div>

        <div className="formKeperluan">
          <div className="Label">Tanggal</div>
          <input type="Date" className="inputTeks" name="keperluan" required />
        </div>

        <div className="formKeperluan">
          <div className="Label">Jam</div>
          <input type="time" className="inputTeks" name="keperluan" required />
        </div>
      </div>

      <div className="formTengah">
        <input
          type="text"
          className="inputKeluhan"
          name="keluhan"
          placeholder="Keluhan"
        />

        <div className="uploadPhotos">
          <div className="Label">Photo/File</div>
          <input type="file" className="inputPhoto" name="keperluan" required />
        </div>

        <div className="backNsubmit">
          <button className="btnBack" onClick={() => setNextForm(false)}>
            back
          </button>
          <button className="btnSubmit" onClick={() => handlePopup()}>
            submit
          </button>
        </div>
      </div>
    </div>
  );

  let popupContent = nextForm ? AppointmentForm : PatientForm;

  return (
    <div className={popup ? "backgroundGelap" : "containerHidden"}>
      <div className="popupContainer">
        <div className="containerFormNewpatient">
          <div className="headerNewPatient">
            <div className="judulForm">New Patient</div>
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

export default NewAppointment;
