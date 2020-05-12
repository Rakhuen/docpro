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
  const [nextForm, setNextForm] = useState(false);
  const [namaPasien,setNamaPasien] = useState("");

  const changeNamaPasien = text => {
    setNamaPasien(text.target.value);
    console.log(namaPasien);
  };



  const PatientForm = () => {
    return (
      <div className="pasienForm">
        <div className="form1">
          <div className="fotoProfile">
            <div className="LabelProfile">Upload Photo</div>
            <input type="file" className="inputImage" name="fotoPasien" />
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
                
              />
            </div>

            <div className="formNomorHp">
              <div className="Label">No. HP</div>
              <input
                type="tel"
                className="inputTeks"
                name="nomorHp"
                pattern="[0-9]{11}"
                required
              />
            </div>
          </div>
        </div>

        <div className="form2">
          <div className="formAlamat">
            <div className="Label">Alamat</div>
            <input type="text" className="inputForm2" name="alamatPasien" />
          </div>

          <div className="formTTD">
            <div className="Label">Tanggal Lahir</div>
            <input
              type="date"
              className="inputForm2"
              name="TTDPasien"
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
  };

  const AppointmentForm = () => {
    return (
      <div classname="bookingContainer">
          
          <div className="formAtas">
          <div className="formKeperluan">
              <div className="Label">Keperluan</div>
              <input
                type="text"
                className="inputTeks"
                name="keperluan"
                required
              />
            </div>

            <div className="formKeperluan">
              <div className="Label">Tanggal</div>
              <input
                type="Date"
                className="inputTeks"
                name="keperluan"
                required
              />
            </div>


            <div className="formKeperluan">
              <div className="Label">Jam</div>
              <input
                type="time"
                className="inputTeks"
                name="keperluan"
                required
              />
            </div>
            </div>

            <div className="formTengah">
               
               <input type="text" className="inputKeluhan" name="keluhan" placeholder="Keluhan"/>
               

               <div className="uploadPhotos">
             <div className="Label">Photo/File</div>
             <input
               type="file"
               className="inputPhoto"
               name="keperluan"
               required
             />
           </div>

            <div className="backNsubmit">
            <button className="btnBack" onClick={() => setNextForm(false)}>back</button>
            <button className="btnSubmit" onClick={() => handlePopup()}>submit</button>

            </div>



           </div>

      </div>
    );
  };

  const handlePopup = () => {
    setPopupShow(false);
    setNextForm(false);
  };

  const NewAppointment = () => {
    
    let popupContent = nextForm ? (
      <AppointmentForm></AppointmentForm>
    ) : (
      <PatientForm></PatientForm>
    );

    return (
      <div className={popupShow ? "backgroundGelap" : "containerHidden"}>
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

  return (
    <div className="ContainerLuar2">
      <NewAppointment />
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
