<<<<<<< HEAD
import React from "react";
import "./HomePage.css";
import NavigationContainer from "./NavigationMenu.js";

=======
import React, { useState } from "react";
import "./HomePage.css";
import NavigationContainer from "./NavigationMenu.js";
import DeleteImage from "./asset/delete.png";
import HeaderMenu from "./HeaderButton.js";
>>>>>>> 9afae4959c3590256e8a73be48476c5c420f3d4d
import Card from "./Content.js";
import Kurt from "./asset/MaskGroup.png";
import Liam from "./asset/liam.png";
import Alex from "./asset/alex.png";
import Nuno from "./asset/nuno.png";
<<<<<<< HEAD
import DeleteImage from "./asset/delete.png";
import HeaderMenu from "./HeaderButton.js";

const Isi = () => {
  return (
    <div className="ContainerLuar2">
      <div className="ContainerDua">
        <div className="Header">Jadwal Pasien</div>

        <HeaderMenu btnKiri="+New Appointment" btnKanan="Today v" />
=======
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
>>>>>>> 9afae4959c3590256e8a73be48476c5c420f3d4d

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
<<<<<<< HEAD

          <Card
            imageDelete={DeleteImage}
            image={Nuno}
            nama="Nesiaaaaaa"
            perawatan="Tambel gigi"
            jam="15:00"
          ></Card>
=======
>>>>>>> 9afae4959c3590256e8a73be48476c5c420f3d4d
        </div>
      </div>
    </div>
  );
};

const HomeContainer = () => {
  return (
    <div className="ContainerUtama">
      <NavigationContainer />
<<<<<<< HEAD
=======

>>>>>>> 9afae4959c3590256e8a73be48476c5c420f3d4d
      <Isi />
    </div>
  );
};

export default HomeContainer;
