import React, { useState } from "react";
import "./NewAppointment.css";
import axios from "axios";

const NewAppointment = (props) => {
  const { popup, setPopup } = props;
  const [nextForm, setNextForm] = useState(false);
  const [pilihan, setPilihan] = useState("OldPatientOrNewPatient");

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
  const [preview, setPreview] = useState();
  const [idPasien, setIdPasien] = useState();

  const setFile = (event) => {
    let file = event.target.files[0];
    const show = URL.createObjectURL(file);
    setPreview(show);
    console.log(file);
    fotoPasien(file);
  };

  const changeNamaPasien = (text) => {
    setNamaPasien(text.target.value);
    console.log(namaPasien);
  };

  const changeFotoPasien = (photo) => {
    const file = photo.target.files[0];
    const a = URL.createObjectURL(file);
    setPreview(a);
    setFotoPasien(file);
    console.log(fotoPasien);
    console.log("test", file, a);
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

  const postPatientData = async () => {
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
        "http://localhost:8000/api/doc-pro/v1/pasien",
        inputData,
        {
          headers: {
            authorization: `Bearer ${info.token}`,
          },
        }
      );

      console.log(result, "test");
      setIdPasien(result.id_pasien);
    } catch (error) {
      console.log(error.response);
      alert(error.response.message);
    }
  };

  const postAppointmentData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));

    let inputData = new FormData();
    inputData.append("id_pasien", idPasien);
    inputData.append("keperluan", keperluanPasien);
    inputData.append("jam", jamBookingPasien);
    inputData.append("tanggal", tanggalBookingPasien);
    inputData.append("keluhan", keluhanPasien);
    inputData.append("photoData", fotoPengobatanPasien);

    try {
      const result = await axios.post(
        "http://localhost:8000/api/doc-pro/v1/appointment",
        inputData,
        {
          headers: {
            authorization: `Bearer ${info.token}`,
          },
        }
      );

      console.log(result);
    } catch (error) {
      console.log(error.response);
      alert(error.response.message);
    }
  };

  const postPasien = () => {
    setNextForm(true);
    postPatientData();
  };

  const postAppointment = () => {
    handlePopup();
    postAppointmentData();
  };

  const handlePopup = () => {
    setPopup(false);
    setNextForm(false);
    setPilihan("OldPatientOrNewPatient");
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
            {fotoPasien && <img src={preview} className="LabelProfile"></img>}
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
        <button
          className="btnBack"
          onClick={() => setPilihan("OldPatientOrNewPatient")}
        >
          back
        </button>
        <button className="btnSubmit" onClick={() => postPasien()}>
          Next
        </button>
      </div>
    </div>
  );

  const AppointmentForm = (
    <div className="bookingContainer">
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
          <label className="btnUploadPhotos">
            <input
              type="file"
              className="inputPhoto"
              name="fotoPengobatan"
              value={fotoPengobatanPasien}
              onChange={changeFotoPengobatanPasien}
              onKeyUp={changeFotoPengobatanPasien}
              required
            />
            +Upload photos here
          </label>
        </div>

        <div className="backNsubmit">
          <button className="btnBack" onClick={() => setNextForm(false)}>
            back
          </button>
          <button className="btnSubmit" onClick={() => postAppointment()}>
            submit
          </button>
        </div>
      </div>
    </div>
  );

  const OldPatientOrNewPatient = (
    <div className="btnPilihanContainer">
      <button className="btnPilihan" onClick={() => setPilihan("OldPatient")}>
        Old Patient
      </button>

      <div className="pembatas">OR</div>

      <button className="btnPilihan" onClick={() => setPilihan("NewPatient")}>
        +New patient
      </button>
    </div>
  );

  const OldPatientData = [
    {
      nomor: "1",
      nama: "Abdullah bin dhika",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "2",
      nama: "bagus",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "3",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "4",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "5",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "6",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "7",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "8",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "9",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "10",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "11",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "12",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "13",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
    {
      nomor: "14",
      nama: "cahyo",
      nomorHp: "0985680495",
      nomorNIK: "23443543534",
    },
  ];

  const OldPatientForm = (
    <div className="OldPatientTableContainer">
      <div className="OldPatientTable">
        <table>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>No. Hp</th>
            <th>NIK</th>
          </tr>

          {OldPatientData.map((data, index) => (
            <tr key={index}>
              <td>{data.nomor} </td>
              <td className="NameData">{data.nama} </td>

              <td className="PriceData"> {data.nomorHp} </td>
              <td className="NikData">{data.nomorNIK} </td>
            </tr>
          ))}
        </table>
      </div>

      <div className="backNNext">
        <button
          className="btnBack"
          onClick={() => setPilihan("OldPatientOrNewPatient")}
        >
          back
        </button>
        <button className="btnSubmit" onClick={() => setNextForm(true)}>
          Next
        </button>
      </div>
    </div>
  );

  let popupContent;
  if (pilihan === "OldPatientOrNewPatient") {
    popupContent = OldPatientOrNewPatient;
  }
  if (pilihan === "OldPatient") {
    popupContent = OldPatientForm;
  }
  if (pilihan === "NewPatient") {
    popupContent = PatientForm;
  }
  if (nextForm === true) {
    popupContent = AppointmentForm;
  }

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

export default NewAppointment;
