import React, { useState, useEffect } from "react";
import "./formViewDetails.css";
import axios from "axios";

const IsiHistory = (props) => {
  const {
    tanggalHistory,
    namaHistory,
    keluhanHistory,
    penangananHistory,
    biayaHistory,
  } = props;
  return (
    <div className="IsiKeterangan">
      <div className="ItemTanggal">
        <div className="IsiTanggal"> {tanggalHistory}</div>
      </div>
      <div className="ItemNama">
        <div className="IsiNamaHistory">{namaHistory}</div>
      </div>
      <div className="Item">
        <div className="IsiKeluhanHistory">{keluhanHistory}</div>
      </div>
      <div className="Item">
        <div className="IsiPenangananHistory">{penangananHistory}</div>
      </div>
      <div className="Item">
        <div className="IsiBiayaHistory">{biayaHistory}</div>
      </div>
    </div>
  );
};

const DataPhotosPasien = (props) => {
  const { image } = props;

  return <img className="itemPhotos" src={image} alt="item" />;
};

const IsiInfoPasien = (props) => {
  const {
    image,
    infoNamaPasien,
    infoNomorHpPasien,
    infoAlamatPasien,
    infoTanggalLahirPasien,
    infoNikPasien,
  } = props;
  return (
    <div className="viewDetailsForm">
      <div className="FotodanNamaDetails">
        <img className="infoFotoPasien" src={image} alt="foto-pasien" />

        <div className="namaDanNomor">
          <div className="infoNama">{infoNamaPasien}</div>
          <div className="infoNomorHp">{infoNomorHpPasien}</div>
        </div>
      </div>

      <div className="formContainerAlamatdanTTD">
        <div className="formAlamat">
          <div className="Label">Alamat</div>
          <div className="value">{infoAlamatPasien}</div>
        </div>

        <div className="formTTD">
          <div className="Label">Tanggal Lahir</div>
          <div className="value">{infoTanggalLahirPasien}</div>
        </div>
      </div>

      <div className="lineBorder"></div>

      <div className="formNikPasien">
        <div className="Label">NIK</div>
        <div className="valueNIK">{infoNikPasien}</div>
      </div>
    </div>
  );
};

const ViewDetailsContainer = (props) => {
  const { popupViewDetails, setPopupViewDetails, idPasien } = props;
  const [activeTab, setActiveTab] = useState("Info");
  const [viewDetails, setViewDetails] = useState();
  const [fotoPengobatanPasien, setFotoPengobatan] = useState("");
  const changeFotoPengobatanPasien = (photo) => {
    setFotoPengobatan(photo.target.value);
    console.log(fotoPengobatanPasien);
  };

  const getViewDetails = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.get(
      `http://localhost:8000/api/doc-pro/v1/pasien/detail?id=${idPasien}`,
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );

    await setViewDetails(data);
  };

  useEffect(() => {
    getViewDetails();
  }, [idPasien]);

  console.log(viewDetails);

  const HistoryPasien = (
    <div className="ContainerHistory">
      <div className="TableHistory">
        <div className="keteranganContainerLuar">
          <div className="KeteranganContainer">
            <div className="judulTabelTanggal">
              <div className="Tanggal"> Tanggal</div>
            </div>

            <div className="judulTabel">
              <div className="KeluhanHistory">Keluhan</div>
            </div>
            <div className="judulTabel">
              <div className="PenangananHistory">Penanganan</div>
            </div>
            <div className="judulTabelNama">
              <div className="NamaHistory">Biaya</div>
            </div>
          </div>

          <div className="scrolling">
            {viewDetails &&
              viewDetails.historys.map((data, index) => (
                <div className="IsiKeteranganContainer" key={index}>
                  <IsiHistory
                    key={index}
                    tanggalHistory={data.appointment.tanggal}
                    biayaHistory={data.diagnosa.total_biaya}
                    keluhanHistory={data.appointment.keluhan}
                    penangananHistory={data.diagnosa.penanganan}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );

  const PhotosPasien = (
    <div classname="bookingContainer">
      <label className="btnAddPhotos">
        <input
          type="file"
          className="fotoFilePasien"
          name="fotoPengobatan"
          value={fotoPengobatanPasien}
          onChange={changeFotoPengobatanPasien}
          onKeyUp={changeFotoPengobatanPasien}
        />
        +Add Photos
      </label>
      <div className="scrolling">
        <div className="photos">
          {viewDetails &&
            viewDetails.photos.map((data, index) => (
              <DataPhotosPasien key={index} image={data.photo.image} />
            ))}
        </div>
      </div>
    </div>
  );

  const InfoDiriPasien = (
    <div className="scrolling">
      {viewDetails && (
        <IsiInfoPasien
          image={viewDetails.pasien.url_photo}
          infoNamaPasien={viewDetails.pasien.nama}
          infoNomorHpPasien={viewDetails.pasien.phone}
          infoAlamatPasien={viewDetails.pasien.alamat}
          infoTanggalLahirPasien={viewDetails.pasien.tanggal_lahir}
          infoNikPasien={viewDetails.pasien.nik}
        />
      )}
    </div>
  );

  const handlePopup = () => {
    setActiveTab("Info");
    setPopupViewDetails(false);
  };

  let popupContent;
  if (activeTab === "Info") {
    popupContent = InfoDiriPasien;
  }
  if (activeTab === "History") {
    popupContent = HistoryPasien;
  }
  if (activeTab === "Photos") {
    popupContent = PhotosPasien;
  }

  return (
    <div className={popupViewDetails ? "backgroundGelap" : "containerHidden"}>
      <div className="popupContainer">
        <div className="containerFormNewpatient">
          <div className="popupHeaderContainer">
            <div className="headerNewPatient">
              <div className="judulForm">Details Patient</div>
              <button className="btnClose" onClick={() => handlePopup()}>
                X
              </button>
            </div>

            <div className="headerNavDetails">
              <button
                className={activeTab === "Info" ? "TabsItemActive" : "TabsItem"}
                onClick={() => {
                  setActiveTab("Info");
                }}
              >
                Info
              </button>

              <button
                className={
                  activeTab === "History" ? "TabsItemActive" : "TabsItem"
                }
                onClick={() => {
                  setActiveTab("History");
                }}
              >
                History
              </button>

              <button
                className={
                  activeTab === "Photos" ? "TabsItemActive" : "TabsItem"
                }
                onClick={() => {
                  setActiveTab("Photos");
                }}
              >
                Photos
              </button>
            </div>
            <div className="line"></div>
          </div>
          {popupContent}
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsContainer;
