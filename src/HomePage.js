import React, { useState } from "react";
import "./HomePage.css";
import NavigationContainer from "./NavigationMenu.js";
import DeleteImage from "./asset/delete.png";
import HeaderMenu from "./HeaderButton.js";
import Card from "./Content.js";
import Kurt from "./asset/MaskGroup.png";
import Liam from "./asset/liam.png";
import Alex from "./asset/alex.png";
import Nuno from "./asset/nuno.png";
import "./newAppointment.css";

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);

  const NewAppointment = () => {
    return (
      
      <div classname="backgroundGelap">
        <div className={popupShow ? "popupContainer" : "containerHidden"}>
          <p>Apa aja</p>
        </div>
        </div>
    );
  };

  return (
    <div className="ContainerLuar2">
      <NewAppointment />
      <div className="ContainerDua">
        <div className="Header">Jadwal Pasien</div>

        <HeaderMenu
          functionKiri={() => setPopupShow(!popupShow)}
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