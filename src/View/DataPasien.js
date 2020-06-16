import React, { useState, useEffect } from "react";
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
import ViewDetailsContainer from "../Components/formViewDetails.js";
import axios from "axios";

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [popupViewDetails, setPopupViewDetails] = useState(false);
  const [pasien, setPasien] = useState();


  const getPasienData = async () => {
    let info =  JSON.parse(localStorage.getItem("userInfo")) 
    console.log(info.token)
    const { data } = await axios.get(
      "http://localhost:8000/api/doc-pro/v1/pasien",{
        headers: {
          authorization: `Bearer ${info.token}`
        } 
      }
    );

    await setPasien(data);
  };

  useEffect(() => {
    getPasienData();
    console.log(pasien);
  }, []);

console.log(pasien)


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
    }
  
    const changeNomorHpPasien = (text) => {
      setNomorHp(text.target.value);
      console.log(nomorHpPasien);
    }
  
    const changeAlamatPasien = (text) => {
      setAlamatPasien(text.target.value);
      console.log(alamatPasien);
    }
  
    const changeTanggalLahirPasien = (tanggal) => {
      setTanggalLahir(tanggal.target.value);
      console.log(tanggalLahirPasien);
    }
  
    const changeNikPasien = (text) => {
      setNikPasien(text.target.value);
      console.log(NikPasien);
    }

    const postPasien = () => {
      setPopupShow(false);
      postPatientData();

    }

    const postPatientData = async () => {
      let info =  JSON.parse(localStorage.getItem("userInfo"))

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
          
          PatientData,{
            headers: {
              authorization: `Bearer ${info.token}`
            } 
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
            <input type="text" className="inputForm2" name="alamatPasien" value={alamatPasien} onChange={changeAlamatPasien} onKeyUp={changeAlamatPasien} />
          </div>

          <div className="formTTD">
            <div className="Label">Tanggal Lahir</div>
            <input
              type="date"
              className="inputForm2"
              name="TTDPasien"
              value={tanggalLahirPasien} onChange={changeTanggalLahirPasien} onKeyUp={changeTanggalLahirPasien}
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


  const cardDataPasien = [
    {
      deleteIcon: DeleteImage,
      fotoPasien: Kurt,
      nama: "Kurt cobain",
      nomorTlp: "085891573243",
      tanggalAdd: "22/10/2020",
      viewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Liam,
      nama: "Kurt cobain",
      nomorTlp: "085891573243",
      tanggalAdd: "22/10/2020",
      viewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Alex,
      nama: "Kurt cobain",
      nomorTlp: "085891573243",
      tanggalAdd: "22/10/2020",
      viewDetails: "View Details",
    },
    {
      deleteIcon: DeleteImage,
      fotoPasien: Nuno,
      nama: "Kurt cobain",
      nomorTlp: "085891573243",
      tanggalAdd: "22/10/2020",
      viewDetails: "View Details",
    },
    
  ];



  return (
    <div className="ContainerLuar2">
      <ViewDetailsContainer
        popupViewDetails={popupViewDetails}
        setPopupViewDetails={setPopupViewDetails}
      />
      <NewAppointment />
      <div className="ContainerDua">
        <div className="Header">Data Pasien</div>

        <HeaderMenu
          functionKiri={() => setPopupShow(true)}
          btnKiri="+New Patient"
          btnKanan="Today v"
        />

        <div className="CardContainer1">
          
        {pasien && pasien.map((data, index) => (
            <CardPasien
              
              key={index}
              imageDelete={data.deleteIcon}
              image={data.photo}
              nama={data.nama}
              nomorTlp={data.phone}
              tanggal={data.added_on}
              btnViewDetails="View Details"
              functionDetails={() => setPopupViewDetails(true)}
            />
          ))}
          
         
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
