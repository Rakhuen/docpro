import React, { useState, useEffect } from "react";
import "../Components/DropDown.css";
import "../Components/FinishForm.css";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";

const InfoPasien = (props) => {
  const { foto, nama, keperluan, jam, tanggal } = props;

  return (
    <div className="formInfoBooking">
      <div className="fotoNamadanKeperluanPasien">
        <img className="fotoPasien" src={foto}></img>

        <div className="namaDanKeperluanPasien">
          <div className="Atas">{nama}</div>
          <div className="Bawah">{keperluan}</div>
        </div>
      </div>

      <div className="jamFinish">
        <div className="Atas">Jam</div>
        <div className="Bawah">{jam}</div>
      </div>

      <div className="tanggalFinish">
        <div className="Atas">Tanggal</div>
        <div className="Bawah">{tanggal}</div>
      </div>
    </div>
  );
};

const FinishContainer = (props) => {
  const { popupFinish, setPopupFinish, finishDetail } = props;
  const [drug, setDrug] = useState();
  const [service, setService] = useState();
  const id_appointment = finishDetail && finishDetail.id_appointment;
  const [penangananPasien, setPenangananPasien] = useState("");

  const changePenangananPasien = (text) => {
    setPenangananPasien(text.target.value);
    console.log(penangananPasien);
  };

  const getDrugData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    console.log(info.token);
    const { data } = await axios.get(
      "http://192.168.100.3:8000/api/doc-pro/v1/drug",
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );
    await setDrug(data);
  };

  const getServiceData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    console.log(info.token);
    const { data } = await axios.get(
      "http://192.168.100.3:8000/api/doc-pro/v1/service",
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );
    await setService(data);
  };

  useEffect(() => {
    getDrugData();
    getServiceData();
  }, []);

  const handleDrug = (drug) => {
    console.log(drug);
  };

  const postDiagnosaData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));

    const DiagnosaData = {
      id_appointment: id_appointment,
      penanganan: penangananPasien,
      total_biaya: {},
    };

    try {
      const result = await axios.post(
        "http://192.168.100.3:8000/api/doc-pro/v1/pasien",

        DiagnosaData,
        {
          headers: {
            authorization: `Bearer ${info.token}`,
          },
        }
      );

      console.log(result);
    } catch (error) {
      console.log(error.response);
      alert(error.response.data.message);
    }
  };

  return (
    <div className={popupFinish ? "backgroundGelap" : "containerHidden"}>
      <div className="popupContainer">
        <div className="containerFormNewpatient">
          <div className="headerNewPatient">
            <div className="judulForm">Finish</div>
            <button className="btnClose" onClick={() => setPopupFinish(false)}>
              X
            </button>
          </div>

          <div className="finishForm">
            <InfoPasien
              foto={finishDetail && finishDetail.photo}
              nama={finishDetail && finishDetail.nama}
              keperluan={finishDetail && finishDetail.keperluan}
              jam={finishDetail && finishDetail.jam}
              tanggal={finishDetail && finishDetail.tanggal}
            />

            <div className="formPenanganan">
              <input
                type="text"
                className="inputForm2"
                name="alamatPasien"
                placeholder="Penanganan"
                value={penangananPasien}
                onChange={changePenangananPasien}
                onKeyUp={changePenangananPasien}
              />
            </div>
            <div className="inputBiayaItem">
              <div className="Atas">Input Biaya</div>

              <p>Pengobatan</p>
              <Multiselect
                options={service}
                displayValue="service_name"
                showCheckbox={true}
                onSelect={(e) => handleDrug(e, service)}
              />

              <p>Obat</p>
              <Multiselect
                options={drug}
                displayValue="drug_name"
                showCheckbox={true}
                onSelect={(e) => handleDrug(e, drug)}
              />
            </div>
            <div className="formBawah">
              <input type="submit" className="btnFinish" value="Finish" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishContainer;
