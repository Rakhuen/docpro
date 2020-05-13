import React, { useState } from "react";
import "./HomePage.css";
import NavigationContainer from "../NavigationMenu.js";
import DeleteImage from "../asset/delete.png";
import HeaderMenu from "../Components/HeaderButton.js";
import Card from "../Components/Content.js";
import NewAppointment from "../Components/NewAppointment.js";
import Kurt from "../asset/MaskGroup.png";
import Liam from "../asset/liam.png";
import Alex from "../asset/alex.png";
import Nuno from "../asset/nuno.png";

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);

  return (
    <div className="ContainerLuar2">
      <NewAppointment
        popup={popupShow}
        setPopup={setPopupShow}
      ></NewAppointment>
      <div className="ContainerDua">
        <div className="Header">Jadwal Pasien</div>

        <HeaderMenu
          functionKiri={() => setPopupShow(true)}
          btnKiri="+New Appointment"
          btnKanan="Today v"
        />

        <div className="CardContainer1">
          <Card
            imageDelete={DeleteImage}
            image={Kurt}
            nama="Nandhika"
            perawatan="Kontrol Gigi"
            jam="12:00"
          ></Card>

          <Card
            imageDelete={DeleteImage}
            image={Liam}
            nama="Pratama"
            perawatan="Kontrol Behel"
            jam="13:00"
          ></Card>

          <Card
            imageDelete={DeleteImage}
            image={Alex}
            nama="Putra"
            perawatan="Ganti Karet"
            jam="14:00"
          ></Card>

          <Card
            imageDelete={DeleteImage}
            image={Nuno}
            nama="Nesia"
            perawatan="Tambel gigi"
            jam="15:00"
          ></Card>

          <Card
            imageDelete={DeleteImage}
            image={Kurt}
            nama="Nandhika"
            perawatan="Kontrol Gigi"
            jam="12:00"
          ></Card>

          <Card
            imageDelete={DeleteImage}
            image={Liam}
            nama="Pratama"
            perawatan="Kontrol Behel"
            jam="13:00"
          ></Card>

          <Card
            imageDelete={DeleteImage}
            image={Alex}
            nama="Putra"
            perawatan="Ganti Karet"
            jam="14:00"
          ></Card>

          <Card
            imageDelete={DeleteImage}
            image={Nuno}
            nama="Nesia"
            perawatan="Tambel gigi"
            jam="15:00"
          ></Card>
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
