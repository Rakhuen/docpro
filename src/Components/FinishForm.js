import React, { useState, useEffect } from "react";
import "../Components/DropDown.css";
import "../Components/FinishForm.css";
import axios from "axios";
import DefaultPhoto from "../asset/male.png";
import { Multiselect } from "multiselect-react-dropdown";

const InfoPasien = (props) => {
  const { foto, nama, keperluan, jam, tanggal } = props;

  return (
    <div className="formInfoBooking">
      <div className="fotoNamadanKeperluanPasien">
        <img className="fotoPasien" src={foto} alt="foto pasien"></img>

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
  const [totalBiaya, setTotalBiaya] = useState("");
  const [selectedService, setSelectedService] = useState();
  const [selectedDrug, setSelectedDrug] = useState();
  const [totalService, setTotalService] = useState();
  const [totalDrug, setTotalDrug] = useState();
  const serviceSelectRef = React.createRef();
  const drugSelectRef = React.createRef();

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

  const handleService = () => {
    const biayaPengobatan = [];
    const idPengobatan = [];
    const selectedService = serviceSelectRef.current.getSelectedItems();

    for (let pengobatan of selectedService) {
      biayaPengobatan.push(pengobatan.service_price);
      idPengobatan.push(pengobatan.id_service);
    }

    const totalPengobatan = biayaPengobatan.reduce(
      (a, b) => Number(a) + Number(b),
      0
    );

    console.log("total harga pengobatan: ", totalPengobatan);

    console.log(idPengobatan);
    setTotalService(totalPengobatan);
    setSelectedService(idPengobatan.toString());
  };

  const handleDrug = () => {
    const biayaObat = [];
    const idObat = [];
    const selectedDrug = drugSelectRef.current.getSelectedItems();

    for (let obat of selectedDrug) {
      biayaObat.push(obat.drug_price);
      idObat.push(obat.id_drug);
    }

    const totalObat = biayaObat.reduce((a, b) => Number(a) + Number(b), 0);

    console.log("total harga obat: ", totalObat);
    console.log(idObat, "idObat");
    setTotalDrug(totalObat);
    setSelectedDrug(idObat.toString());
  };

  const postDiagnosaData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));

    const DiagnosaData = {
      id_appointment: id_appointment,
      penanganan: penangananPasien,
      services: selectedService ? selectedService : "no services",
      drugs: selectedDrug ? selectedDrug : "no drugs",
      total_biaya: totalDrug + totalService,
    };

    try {
      const result = await axios.post(
        "http://192.168.100.3:8000/api/doc-pro/v1/diagnosa",

        DiagnosaData,
        {
          headers: {
            authorization: `Bearer ${info.token}`,
          },
        }
      );

      console.log(result);
      setPopupFinish(false);
    } catch (error) {
      console.log(error.response);
      alert("belom bisa");
    }
  };

  console.log(finishDetail);

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
              foto={
                (finishDetail && finishDetail.photo === "default.png") ||
                (finishDetail && finishDetail.photo === "")
                  ? DefaultPhoto
                  : finishDetail && finishDetail.photo
              }
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
                onSelect={() => handleService()}
                onRemove={() => handleService()}
                ref={serviceSelectRef}
              />

              <p>Obat</p>
              <Multiselect
                options={drug}
                displayValue="drug_name"
                showCheckbox={true}
                onSelect={() => handleDrug()}
                onRemove={() => handleDrug()}
                ref={drugSelectRef}
              />
            </div>
            <div className="totalBiaya">
              <p>Total Biaya</p>
              <p className="nominalBiaya">
                Rp.
                {totalService && totalDrug
                  ? Number(totalService) + Number(totalDrug)
                  : totalService && !totalDrug
                  ? totalService
                  : !totalService && totalDrug
                  ? totalDrug
                  : 0}
              </p>
            </div>
            <div className="formBawah">
              <button className="btnFinish" onClick={() => postDiagnosaData()}>
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishContainer;
