import React, { useState, useEffect, useContext } from "react";
import "./HomePage.css";
import NavigationContainer from "../Components/NavigationMenu.js";
import HeaderMenu from "../Components/HeaderButton.js";
import CardPasien from "../Components/ContentPasien.js";
import "../Components/NewAppointment.css";
import ViewDetailsContainer from "../Components/formViewDetails.js";
import axios from "axios";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";
import "../Components/DropDown.css";
import DeleteIcon from "../asset/delete.png";
import UpdateIcon from "../asset/edit.png";
import ReactLoading from "react-loading";
import EditPatientData from "../Components/EditPatientForm.js"

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [popupViewDetails, setPopupViewDetails] = useState(false);
  const [popupUpdatePatient, setpopupUpdatePatient] = useState(false);
  const [pasien, setPasien] = useState();
  const [idPasien, setIdPasien] = useState();
  const [refresh, setRefresh] = useState();

  const getPasienData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.get(
      "http://localhost:8000/api/doc-pro/v1/pasien",
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );

    await setPasien(data);
  };

  useEffect(() => {
    getPasienData();
  }, []);

  console.log(pasien);

  const PatientForm = () => {
    const [namaPasien, setNamaPasien] = useState("");
    const [fotoPasien, setFotoPasien] = useState("");
    const [nomorHpPasien, setNomorHp] = useState("");
    const [alamatPasien, setAlamatPasien] = useState("");
    const [tanggalLahirPasien, setTanggalLahir] = useState("");
    const [NikPasien, setNikPasien] = useState("");

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

    const postPasien = () => {
      setPopupShow(false);
      postPatientData();
    };

    const postPatientData = async () => {
      let info = JSON.parse(localStorage.getItem("userInfo"));

      const PatientData = {
        nama: namaPasien,
        tanggal_lahir: tanggalLahirPasien,
        nik: NikPasien,

        alamat: alamatPasien,
        phone: nomorHpPasien,
      };

      try {
        const result = await axios.post(
          "http://localhost:8000/api/doc-pro/v1/pasien",

          PatientData,
          {
            headers: {
              authorization: `Bearer ${info.token}`,
            },
          }
        );

        console.log(result);
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      }
    };

    return (
      <div className="pasienForm">
        <div className="form1">
          <div className="fotoProfile">
            <label className="LabelProfile">
              <input
                type="file"
                className="inputImage"
                name="fotoPasien"
                value={fotoPasien}
                onChange={changeFotoPasien}
                onKeyUp={changeFotoPasien}
              />
              +
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
                required
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
            value="Submit"
            onClick={() => postPasien()}
          />
        </div>
      </div>
    );
  };

  const NewAppointment = () => {
    return (
      <div className={popupShow ? "backgroundGelap" : "containerHidden"}>
        <div className="popupContainer">
          <div className="containerFormNewpatient">
            <div className="headerNewPatient">
              <div className="judulForm">New Patient</div>
              <button className="btnClose" onClick={() => setPopupShow(false)}>
                X
              </button>
            </div>

            <PatientForm />
          </div>
        </div>
      </div>
    );
  };

  const viewDetailHandler = async (e, index) => {
    setIdPasien(index);
    setPopupViewDetails(true);
    console.log(index);
  };

  const updateHandler = async (e, index) => {
    setIdPasien(index);
    setpopupUpdatePatient(true);
    console.log(index);
  };

  console.log(idPasien)

  const deletePasien = async (e, index) => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.delete(
      `http://localhost:8000/api/doc-pro/v1/pasien?id=${index}`,
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );
    setRefresh(true);
  };

  useEffect(() => {
    setTimeout(() => getPasienData(), 1000);
  }, [refresh]);

  return (
    <div className="ContainerLuar2">
      <ViewDetailsContainer
        idPasien={idPasien}
        popupViewDetails={popupViewDetails}
        setPopupViewDetails={setPopupViewDetails}
      />
      <NewAppointment />
      <EditPatientData
        idPasien={idPasien}
        popup={popupUpdatePatient}
        setPopup={setpopupUpdatePatient}
      />
      <div className="ContainerDua">
        <div className="Header">Data Pasien</div>

        <HeaderMenu
          functionKiri={() => setPopupShow(true)}
          btnKiri="+New Patient"
        />
        {pasien ? (
          <div className="CardContainer1">
            {pasien.map((data, index) => (
              <CardPasien
                key={index}
                imageUpdate={UpdateIcon}
                imageDelete={DeleteIcon}
                image={data.url_photo}
                nama={data.nama}
                nomorTlp={data.phone}
                tanggal={data.added_on}
                btnViewDetails="View Details"
                functionDetails={(e) => viewDetailHandler(e, data.id_pasien)}
                functionDelete={(e) => deletePasien(e, data.id_pasien)}
                functionUpdate={(e) => updateHandler(e, data.id_pasien)}
              />
            ))}
          </div>
        ) : (
          <div className="pageLoad">
            <ReactLoading
              type="bubbles"
              color="#278aff"
              height={"15%"}
              width={"15%"}
            ></ReactLoading>
          </div>
        )}
      </div>
    </div>
  );
};

const PasienContainer = () => {
  const app = useContext(AppContext);
  return app.isLoggedIn ? (
    <div className="ContainerUtama">
      <NavigationContainer />
      <Isi />
    </div>
  ) : (
    <Redirect to="/login"></Redirect>
  );
};

export default PasienContainer;
