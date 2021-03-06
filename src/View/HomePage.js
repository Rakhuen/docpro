import React, { useState, useEffect, useContext } from "react";
import "./HomePage.css";
import NavigationContainer from "../Components/NavigationMenu.js";
import ReactLoading from "react-loading";
import HeaderMenu from "../Components/HeaderButton.js";
import Card from "../Components/Content.js";
import NewAppointment from "../Components/NewAppointment.js";
import FinishContainer from "../Components/FinishForm.js";
import ViewDetailsContainer from "../Components/formViewDetails.js";
import "../Components/NewAppointment.css";
import "../Components/FinishForm.css";
import axios from "axios";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";
import DefaultPhoto from "../asset/male.png";

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [popupFinish, setPopupFinish] = useState(false);
  const [popupViewDetails, setPopupViewDetails] = useState(false);
  const [appointment, setAppointment] = useState();
  const [idPasien, setIdPasien] = useState();
  const [refresh, setRefresh] = useState();
  const [appointmentDetail, setAppointmentDetail] = useState();
  const [appointmentDate, setAppointmentDate] = useState();

  const getAppointmentData = async (date) => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const appointmentList = date ? date : "";
    const urlGet = date
      ? `http://192.168.100.3:8000/api/doc-pro/v1/appointment/filter?tanggal=${appointmentList}`
      : "http://192.168.100.3:8000/api/doc-pro/v1/appointment";

    const { data } = await axios.get(urlGet, {
      headers: {
        authorization: `Bearer ${info.token}`,
      },
    });
    await setAppointment(data);
  };

  useEffect(() => {
    setTimeout(() => getAppointmentData(), 1500);
  }, [popupShow]);

  useEffect(() => {
    setTimeout(() => getAppointmentData(), 1500);
  }, [popupFinish]);

  const finishFormHandler = async (e, data) => {
    setAppointmentDetail(data);
    setPopupFinish(true);
  };

  const viewDetailHandler = async (e, index) => {
    setIdPasien(index);
    setPopupViewDetails(true);
  };

  const cancelAppointment = async (e, index) => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.delete(
      `http://192.168.100.3:8000/api/doc-pro/v1/appointment?id=${index}`,
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );
    setRefresh(true);
  };

  const appointmentFilter = async (event) => {
    const newDate = await event.target.value.split("-").reverse().join("/");
    await setAppointmentDate(newDate);
    getAppointmentData(newDate);
  };

  useEffect(() => {
    setTimeout(() => getAppointmentData(), 1000);
  }, [refresh]);

  const appointmentDateFilter = (
    <input
      type="date"
      onChange={(e) => appointmentFilter(e)}
      className="dropdownDate"
    ></input>
  );

  return (
    <div className="ContainerLuar2">
      <ViewDetailsContainer
        idPasien={idPasien}
        popupViewDetails={popupViewDetails}
        setPopupViewDetails={setPopupViewDetails}
      />
      <FinishContainer
        finishDetail={appointmentDetail}
        popupFinish={popupFinish}
        setPopupFinish={setPopupFinish}
      />
      <NewAppointment popup={popupShow} setPopup={setPopupShow} />

      <div className="ContainerDua">
        <div className="Header">Jadwal Pasien</div>

        <HeaderMenu
          functionKiri={() => setPopupShow("OldPatientOrNewPatient")}
          btnKiri="+ New Appointment"
          btnKanan={appointmentDateFilter}
        />

        {!appointment ? (
          <div className="pageLoad">
            <ReactLoading
              type="bubbles"
              color="#278aff"
              height={"15%"}
              width={"15%"}
            ></ReactLoading>
          </div>
        ) : appointment.length === 0 ? (
          <div>Tidak ada jadwal</div>
        ) : (
          <div className="CardContainer1">
            {appointment.map((data, index) => (
              <Card
                key={index}
                image={
                  data.photo === "default.png" || data.photo === ""
                    ? DefaultPhoto
                    : data.photo
                }
                nama={data.nama}
                perawatan={data.keperluan}
                jam={data.jam}
                btnFinish="Finish"
                btnCancel="Cancel"
                btnViewDetails="View Details"
                functionFinish={(e) => finishFormHandler(e, data)}
                functionCancel={(e) =>
                  cancelAppointment(e, data.id_appointment)
                }
                functionDetails={(e) => viewDetailHandler(e, data.id_pasien)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const HomeContainer = () => {
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

export default HomeContainer;
