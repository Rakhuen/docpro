import React, { useState, useEffect } from "react";
import "./HomePage.css";
import NavigationContainer from "../Components/NavigationMenu.js";
import DeleteImage from "../asset/delete.png";
import HeaderMenu from "../Components/HeaderButton.js";
import Card from "../Components/Content.js";
import NewAppointment from "../Components/NewAppointment.js";
import FinishContainer from "../Components/FinishForm.js";
import ViewDetailsContainer from "../Components/formViewDetails.js";
import Kurt from "../asset/MaskGroup.png";
import Liam from "../asset/liam.png";
import Alex from "../asset/alex.png";
import Nuno from "../asset/nuno.png";
import "../Components/NewAppointment.css";
import "../Components/FinishForm.css";
import axios from "axios";


const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [popupFinish, setPopupFinish] = useState(false);
  const [popupViewDetails, setPopupViewDetails] = useState(false);
  const [appointment, setAppointment] = useState();

  const cardData = [
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
      btnViewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Liam,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
      btnViewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Alex,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
      btnViewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Nuno,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
      btnViewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
      btnViewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
      btnViewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
      btnViewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
      btnViewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
      btnViewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
      btnViewDetails: "View Details",
    },
  ];

  const getAppointmentData = async () => {
    let info =  JSON.parse(localStorage.getItem("userInfo")) 
    console.log(info.token)
    const { data } = await axios.get(
      "http://localhost:8000/api/doc-pro/v1/appointment",{
        headers: {
          authorization: `Bearer ${info.token}`
        } 
      }
    );
    await setAppointment(data);
  };
  
  useEffect(() => {
    getAppointmentData();
    console.log(appointment);
  }, []);

console.log(appointment)

  return (
    <div className="ContainerLuar2">
      <ViewDetailsContainer
        popupViewDetails={popupViewDetails}
        setPopupViewDetails={setPopupViewDetails}
      />
      <FinishContainer
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

        <div className="CardContainer1">
          {appointment && appointment.map((data, index) => (
            <Card
              key={index}
              imageDelete={data.deleteIcon}
              image={data.fotoPasien}
              nama={data.nama}
              perawatan={data.keperluan}
              jam={data.jam}
              btnFinish="Finish"
              btnCancel="Cancel"
              btnViewDetails= "View Details"
              functionFinish={() => setPopupFinish(true)}
              functionDetails={() => setPopupViewDetails(true)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const HomeContainer = () => {
  return (
    <div className="ContainerUtama">
      <NavigationContainer />
      <Isi />
    </div>
  );
};

export default HomeContainer;
