import React from "react";

const FinishContainer = (props) => {
  const { popupFinish, setPopupFinish } = props;

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
          <input type="text" className="inputForm2" name="alamatPasien" placeholder="Penanganan"/>
          </div>

        <div className="inputBiayaItem">
            <div className="Atas">Input Biaya</div>

        <div className="customselect">
        <select className="selectItem">
        <option value="0">Choose Item</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option>
        </select>
        </div>
        
        </div>


        <div className="formBawah">
        <input
          type="submit"
          className="btnFinish"
          value="Finish"
          
        />
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
