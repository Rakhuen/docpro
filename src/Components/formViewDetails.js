import React from "react"; 
import NavigationViewDetails from "./NavigationViewDetails.js";

const ViewDetailsContainer = (props) => {
    const { popupViewDetails, setPopupViewDetails } = props;
  
  
    const PatientForm = (
      <div className="viewDetailsForm">
          
          <div className="FotodanNama">
                <div className="Foto2" >foto</div>
                
                <div className="Nama">
                    <div className="Atas">kurt cobain</div>
                    <div className="Bawah">kontrol behel</div>
                </div>
            </div>
            <div className="formContainerAlamatdanTTD">
            <div className="formAlamat">
          <div className="Label">Alamat</div>
          <div className="valueAlamat">sasdasdas</div>
        </div>

        <div className="formTTD">
          <div className="Label">Tanggal Lahir</div>
          <div className="valueTTD">sasdasdas</div>
        </div>

        </div>
      </div>
    );
  
    return (
      <div className={popupViewDetails ? "backgroundGelap" : "containerHidden"}>
        <div className="popupContainer">
          <div className="containerFormNewpatient">
            
            <div className="popupHeaderContainer">

            <div className="headerNewPatient">
              <div className="judulForm">Finish</div>
              <button className="btnClose" onClick={() => setPopupViewDetails(false)}>
                X
              </button>
            </div>

              <NavigationViewDetails
                
                buttonInfo="Info"
                buttonHistory="History"
                buttonPhotos="Photos"
              />

            </div>
            {PatientForm}
          </div>
        </div>
      </div>
    );
  };
  
  export default ViewDetailsContainer;