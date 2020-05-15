import React, { useState } from "react";
import "./HomePage.css";
import NavigationContainer from "../Components/NavigationMenu.js";
import DeleteImage from "../asset/delete.png";
import HeaderMenu from "../Components/HeaderButton.js";
import Card from "../Components/Content.js";
import NewAppointment from "../Components/NewAppointment.js";
import FinishContainer from "../Components/FinishForm.js";
import Kurt from "../asset/MaskGroup.png";
import Liam from "../asset/liam.png";
import Alex from "../asset/alex.png";
import Nuno from "../asset/nuno.png";
import "../Components/NewAppointment.css";
import "../Components/FinishForm.css";

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [popupFinish, setPopupFinish] = useState(false);

  const cardData = [
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Liam,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Alex,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Nuno,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      treatment: "Kontrol behel",
      jam: "11:00",
      btnFinish: "Finish",
      btnCancel: "Cancel",
    },
  ];

  return (
    <div className="ContainerLuar2">
      <FinishContainer popupFinish={popupFinish} setPopupFinish={setPopupFinish}/>
      <NewAppointment popup={popupShow} setPopup={setPopupShow} />
      
      <div className="ContainerDua">
        <div className="Header">Jadwal Pasien</div>

        <HeaderMenu
          functionKiri={() => setPopupShow(true)}
          btnKiri="+New Appointment"
          btnKanan="Today v"
        />

        <div className="CardContainer1">
          {cardData.map((data, index) => (
            <Card
              key={index}
              imageDelete={data.deleteIcon}
              image={data.fotoPasien}
              nama={data.nama}
              perawatan={data.treatment}
              jam={data.jam}
              btnFinish={data.btnFinish}
              btnCancel={data.btnCancel}
              functionFinish={() => setPopupFinish(true)}

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
