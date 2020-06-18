import React from "react";
import Dropdown from "./DropDown.js";

const FinishContainer = (props) => {
  const { popupFinish, setPopupFinish } = props;

  const items = [
    {
      id: 1,
      value: "Pulp Fiction",
    },
    {
      id: 2,
      value: "Pulp Fiction",
    },
    {
      id: 3,
      value: "Pulp Fiction",
    },
  ];

  const PatientForm = (
    <div className="finishForm">
      <div className="formInfoBooking">
        <div className="fotoNamadanKeperluanPasien">
          <div className="fotoPasien">foto</div>

          <div className="namaDanKeperluanPasien">
            <div className="Atas">kurt Cobain</div>
            <div className="Bawah">kontrol gigi</div>
          </div>
        </div>

        <div className="jamFinish">
          <div className="Atas">Jam</div>
          <div className="Bawah">11:00</div>
        </div>

        <div className="tanggalFinish">
          <div className="Atas">Tanggal</div>
          <div className="Bawah">22/10/2020</div>
        </div>
      </div>

      <div className="formPenanganan">
        <input
          type="text"
          className="inputForm2"
          name="alamatPasien"
          placeholder="Penanganan"
        />
      </div>

      <div className="inputBiayaItem">
        <div className="Atas">Input Biaya</div>
        <Dropdown 
        title="Select Movie" 
        items={items} 
        multiSelect 
        />
      </div>

      <div className="formBawah">
        <input type="submit" className="btnFinish" value="Finish" />
      </div>
    </div>
  );

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

          {PatientForm}
        </div>
      </div>
    </div>
  );
};

export default FinishContainer;
