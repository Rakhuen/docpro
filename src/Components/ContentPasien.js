import React from "react";
import "./ContentPasien.css";

const CardPasien = (props) => {
  const {
    nama,
    nomorTlp,
    tanggal,
    image,
    imageDelete,
    imageUpdate,
    btnViewDetails,
    functionDetails,
    functionDelete,
    functionUpdate,
  } = props;
  return (
    <div className="CardContainer">
      <div className="deleteAndUpdate">
      <div className="DeleteContainer" onClick={functionUpdate}>
        <img className="Delete" src={imageUpdate} alt="update icon" />
      </div>
      <div className="DeleteContainer" onClick={functionDelete}>
        <img className="Delete" src={imageDelete} alt="delete icon" />
      </div>
      </div>
      <div className="FotodanNamaPasien">
        <div className="NamaPasien">
          <img className="FotoPasien" src={image} alt="foto pasien" />
          <div className="AtasPasien">{nama}</div>
          <div className="NomorPasien">{nomorTlp}</div>
        </div>
      </div>

      <div className="TanggalContainer">
        <div className="TanggalAdd">Added on {tanggal}</div>
      </div>

      <div className="DetailsContainer">
        <button className="btnDetails" onClick={functionDetails}>
          {btnViewDetails}
        </button>
      </div>
    </div>
  );
};

export default CardPasien;
