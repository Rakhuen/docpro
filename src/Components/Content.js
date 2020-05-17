import React from "react";
import "./Content.css";

const Card = (props) => {
  const {
    nama,
    perawatan,
    jam,
    image,
    imageDelete,
    btnFinish,
    btnCancel,
    functionFinish,
    functionCancel,
    btnViewDetails,
    functionDetails,
  } = props;
  return (
    <div className="CardContainer">
      <div className="DeleteContainer">
        <img className="Delete" src={imageDelete} />
      </div>
      <div className="FotodanNama">
        <img className="Foto2" src={image} />

        <div className="Nama">
          <div className="Atas">{nama}</div>
          <div className="Bawah">{perawatan}</div>
        </div>
      </div>

      <div className="CheckOrCancelContainer">
        <div className="JamJadwal">{jam}</div>

        <div className="CnC">
          <button className="btnCheck" onClick={functionFinish}>
            {btnFinish}
          </button>
          <button className="btnCancel" onClick={functionCancel}>
            {btnCancel}
          </button>
        </div>
      </div>

      <div className="DetailsContainer">
        <button className="btnDetails" onClick={functionDetails}>
          {btnViewDetails}
        </button>
      </div>
    </div>
  );
};

export default Card;
