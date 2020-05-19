import React, { useState } from "react";

const NewAppointment = (props) => {
  const { popup, setPopup } = props;
  const [nextForm, setNextForm] = useState(false);
  const [pilihOldPatient, setPilihOldPatient] = useState(false);
  const [pilihNewPatient, setPilihNewPatient] = useState(false);

  const [namaPasien, setNamaPasien] = useState("");
  const [fotoPasien, setFotoPasien] = useState("");
  const [nomorHpPasien, setNomorHp] = useState("");
  const [alamatPasien, setAlamatPasien] = useState("");
  const [tanggalLahirPasien, setTanggalLahir] = useState("");
  const [NikPasien, setNikPasien] = useState("");
  const [keperluanPasien, setKeperluanPasien] = useState("");
  const [tanggalBookingPasien, setTanggalBooking] = useState("");
  const [jamBookingPasien, setJamBooking] = useState("");
  const [keluhanPasien, setKeluhanPasien] = useState("");
  const [fotoPengobatanPasien, setFotoPengobatan] = useState("");

  const changeNamaPasien = (text) => {
    setNamaPasien(text.target.value);
    console.log(namaPasien);
  };

  const changeFotoPasien = (photo) => {
    setFotoPasien(photo.target.value);
    console.log(fotoPasien);
  };

  const changeNomorHpPasien = (text) => {
    setNomorHp(text.target.value);
    console.log(nomorHpPasien);
  };

  const changeAlamatPasien = (text) => {
    setAlamatPasien(text.target.value);
    console.log(alamatPasien);
  };

  const changeTanggalLahirPasien = (tanggal) => {
    setTanggalLahir(tanggal.target.value);
    console.log(tanggalLahirPasien);
  };

  const changeNikPasien = (text) => {
    setNikPasien(text.target.value);
    console.log(NikPasien);
  };

  const changeKeperluanPasien = (text) => {
    setKeperluanPasien(text.target.value);
    console.log(keperluanPasien);
  };

  const changeTanggalBookingPasien = (tanggal) => {
    setTanggalBooking(tanggal.target.value);
    console.log(tanggalBookingPasien);
  };

  const changeJamBookingPasien = (jam) => {
    setJamBooking(jam.target.value);
    console.log(jamBookingPasien);
  };

  const changeKeluhanPasien = (text) => {
    setKeluhanPasien(text.target.value);
    console.log(keluhanPasien);
  };

  const changeFotoPengobatanPasien = (photo) => {
    setFotoPengobatan(photo.target.value);
    console.log(fotoPengobatanPasien);
  };

  const PatientForm = (
    <div className="pasienForm">
      <div className="form1">
        <div className="fotoProfile">
          <div className="LabelProfile">Upload Photo</div>
          <input
            type="file"
            className="inputImage"
            name="fotoPasien"
            value={fotoPasien}
            onChange={changeFotoPasien}
            onKeyUp={changeFotoPasien}
          />
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
          <input
            type="text"
            className="inputTeks"
            name="keperluan"
            value={keperluanPasien}
            onChange={changeKeperluanPasien}
            onKeyUp={changeKeperluanPasien}
            required
          />
        </div>

        <div className="formKeperluan">
          <div className="Label">Tanggal</div>
          <input
            type="Date"
            className="inputTeks"
            name="tanggal"
            value={tanggalBookingPasien}
            onChange={changeTanggalBookingPasien}
            onKeyUp={changeTanggalBookingPasien}
            required
          />
        </div>

        <div className="formKeperluan">
          <div className="Label">Jam</div>
          <input
            type="time"
            className="inputTeks"
            name="jam"
            value={jamBookingPasien}
            onChange={changeJamBookingPasien}
            onKeyUp={changeJamBookingPasien}
            required
          />
        </div>
      </div>

      <div className="formTengah">
        <input
          type="text"
          className="inputKeluhan"
          name="keluhan"
          value={keluhanPasien}
          onChange={changeKeluhanPasien}
          onKeyUp={changeKeluhanPasien}
          placeholder="Keluhan"
        />

        <div className="uploadPhotos">
          <div className="Label">Photo/File</div>
          <input
            type="file"
            className="inputPhoto"
            name="fotoPengobatan"
            value={fotoPengobatanPasien}
            onChange={changeFotoPengobatanPasien}
            onKeyUp={changeFotoPengobatanPasien}
            required
          />
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

  const OldPatientOrNewPatient = (
      <div classname="Container">
      
        <div className="btnOldPatient">
          <button className="btnBack" onClick={() => setPilihOldPatient(true)}>
            Old Patient
          </button>
          <button className="btnNewPatient" onClick={() => setPilihNewPatient(true)}>
            New patient
          </button>
        </div>

      </div>
    
  );

  

  const handlePopup = () => {
    setPopup(false);
    setNextForm(false);
  };

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