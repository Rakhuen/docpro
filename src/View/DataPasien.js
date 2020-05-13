import React, { useState } from "react";
import "./HomePage.css";
import NavigationContainer from "../Components/NavigationMenu.js";
import HeaderMenu from "../Components/HeaderButton.js";
import CardPasien from "../Components/ContentPasien.js";
import Kurt from "../asset/MaskGroup.png";
import Liam from "../asset/liam.png";
import Alex from "../asset/alex.png";
import Nuno from "../asset/nuno.png";
import DeleteImage from "../asset/delete.png";
import "../Components/NewAppointment.css";

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);

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
            value="Submit"
            onClick={() => setPopupShow(false)}
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

  return (
    <div className="ContainerLuar2">
      <NewAppointment />
      <div className="ContainerDua">
        <div className="Header">Data Pasien</div>

        <HeaderMenu
          functionKiri={() => setPopupShow(true)}
          btnKiri="+New Patient"
          btnKanan="Today v"
        />

        <div className="CardContainer1">
          <CardPasien
            imageDelete={DeleteImage}
            image={Kurt}
            nama="Nandhika Pratama Putra"
            nomorTlp="085891573243"
            tanggal="Added on 12/02/2020"
          ></CardPasien>

          <CardPasien
            imageDelete={DeleteImage}
            image={Liam}
            nama="Nesia Shafira Yunindya"
            nomorTlp="085891573243"
            tanggal="Added on 12/02/2020"
          ></CardPasien>

          <CardPasien
            imageDelete={DeleteImage}
            image={Alex}
            nama="Bintang Ramadhan Putra"
            nomorTlp="085891573243"
            tanggal="Added on 12/02/2020"
          ></CardPasien>

          <CardPasien
            imageDelete={DeleteImage}
            image={Nuno}
            nama="Gilang Pranadjaya Putra"
            nomorTlp="085891573243"
            tanggal="Added on 12/02/2020"
          ></CardPasien>
        </div>

        <div className="CardContainer1">
          <CardPasien
            imageDelete={DeleteImage}
            image={Kurt}
            nama="Nandhika"
            nomorTlp="085891573243"
            tanggal="Added on 12/02/2020"
          ></CardPasien>

          <CardPasien
            imageDelete={DeleteImage}
            image={Liam}
            nama="Pratama"
            nomorTlp="085891573243"
            tanggal="Added on 12/02/2020"
          ></CardPasien>

          <CardPasien
            imageDelete={DeleteImage}
            image={Alex}
            nama="Putra"
            nomorTlp="085891573243"
            tanggal="Added on 12/02/2020"
          ></CardPasien>

          <CardPasien
            imageDelete={DeleteImage}
            image={Nuno}
            nama="Nesia"
            nomorTlp="085891573243"
            tanggal="Added on 12/02/2020"
          ></CardPasien>
        </div>
      </div>
    </div>
  );
};

const PasienContainer = () => {
  return (
    <div className="ContainerUtama">
      <NavigationContainer />
      <Isi />
    </div>
  );
};

export default PasienContainer;
