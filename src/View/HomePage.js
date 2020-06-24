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

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [popupFinish, setPopupFinish] = useState(false);
  const [popupViewDetails, setPopupViewDetails] = useState(false);
  const [appointment, setAppointment] = useState();
  const [idPasien, setIdPasien] = useState();

  const getAppointmentData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.get(
      "http://localhost:8000/api/doc-pro/v1/appointment",
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );
    await setAppointment(data);
  };

  useEffect(() => {
    setTimeout(() => getAppointmentData(), 2000);
    console.log("useEffect");
  }, [popupShow]);

  console.log(appointment);

  const finishFormHandler = async (e, index) => {
    setIdPasien(index);
    setPopupFinish(true);
    console.log(index);
  };

  const viewDetailHandler = async (e, index) => {
    setIdPasien(index);
    setPopupViewDetails(true);
    console.log(index);
  };

  return (
    <div className="ContainerLuar2">
      <ViewDetailsContainer
        idPasien={idPasien}
        popupViewDetails={popupViewDetails}
        setPopupViewDetails={setPopupViewDetails}
      />
      <FinishContainer
        idPasien={idPasien}
        popupFinish={popupFinish}
        setPopupFinish={setPopupFinish}
      />
      <NewAppointment popup={popupShow} setPopup={setPopupShow} />

      <div className="ContainerDua">
        <div className="Header">Jadwal Pasien</div>

        <HeaderMenu
          functionKiri={() => setPopupShow("OldPatientOrNewPatient")}
          btnKiri="+New Appointment"
          btnKanan="Today v"
        />

        {appointment ? (
          <div className="CardContainer1">
            {appointment.map((data, index) => (
              <Card
                key={index}
                image={data.photo}
                nama={data.nama}
                perawatan={data.keperluan}
                jam={data.jam}
                btnFinish="Finish"
                btnCancel="Cancel"
                btnViewDetails="View Details"
                functionFinish={(e) => finishFormHandler(e, data.id_pasien)}
                functionDetails={(e) => viewDetailHandler(e, data.id_pasien)}
              />
            ))}
          </div>
        ) : (
          <div className="pageLoad">
            <ReactLoading type="bubbles" color="#278aff" height={"15%"} width={"15%"}></ReactLoading>
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
