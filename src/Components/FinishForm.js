import React, { useState, useEffect, useContext } from "react";
import Dropdown from "./DropDown.js";
import  "../Components/DropDown.css";
import axios from "axios";

const infoPasienFinishForm = (props) => {
  const {foto,nama, keperluan,jam,tanggal} = props;

  return(
    <div className="formInfoBooking">
    <div className="fotoNamadanKeperluanPasien">
  <div className="fotoPasien">{foto}</div>

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
  <div className="Bawah">{tanggal}}</div>
    </div>
  </div>

  );
};



const FinishContainer = (props) => {
  const { popupFinish, setPopupFinish,idAppointment } = props;
  const [finishFormDetails, setFinishFormDetails] = useState();

  const getFinishFormDetails = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.get(
      `http://localhost:8000/api/doc-pro/v1/appointment/detail?id=${idAppointment}`,
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      } 
    );

    await setFinishFormDetails(data);
  };

  useEffect(() => {
    getFinishFormDetails();
  }, [idAppointment]);

  console.log(finishFormDetails);


  


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
       {finishFormDetails && finishFormDetails.map((data, index) => (
              
               <infoPasienFinishForm 
                foto="dfb"
                nama="fdbdf"
                keperluan="dfbvfd"
                jam="dfbdf"
                tanggal="6456"
               
               />
              
            ))}

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
