import React, {useState} from "react"; 
import NavigationViewDetails from "./NavigationViewDetails.js";
import "./formViewDetails.css";
import IsiHistory from "./IsiHistoryPasien.js";

const ViewDetailsContainer = (props) => {
    const { popupViewDetails, setPopupViewDetails } = props;
    const [nextForm, setNextForm] = useState(false);
  
    const Isi =  (
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

              <IsiHistory
                tanggalHistory="22/10/2020"
                namaHistory="500.000"
                keluhanHistory="Gigi graham copot, tetapi masih ada sebagian yang menempel"
                penangananHistory="Gigi graham copot, tetapi masih ada sebagian yang menempel"
              
              />
              
              <IsiHistory
                tanggalHistory="22/10/2020"
                namaHistory="500.000"
                keluhanHistory="Gigi graham copot, tetapi masih ada sebagian yang menempel"
                penangananHistory="Gigi graham copot, tetapi masih ada sebagian yang menempel"
              
              />

            </div>
          </div>
        </div>
  
    )

    const AppointmentForm = (
      <div classname="bookingContainer">
        <div className="formAtas">
          <div className="formKeperluan">
            <div className="Label">Keperluan</div>
            <input
              type="text"
              className="inputTeks"
              name="keperluan"
             
              required
            />
          </div>
  
          <div className="formKeperluan">
            <div className="Label">Tanggal</div>
            <input
              type="Date"
              className="inputTeks"
              name="tanggal"
            
              required
            />
          </div>
  
          <div className="formKeperluan">
            <div className="Label">Jam</div>
            <input
              type="time"
              className="inputTeks"
              name="jam"
              
              required
            />
          </div>
        </div>
  
        <div className="formTengah">
          <input
            type="text"
            className="inputKeluhan"
            name="keluhan"
            
            placeholder="Keluhan"
          />
  
          <div className="uploadPhotos">
            <div className="Label">Photo/File</div>
            <input
              type="file"
              className="inputPhoto"
              name="fotoPengobatan"
         
              required
            />
          </div>
  
          
        </div>
      </div>
    );

    const PatientForm = (
      <div className="viewDetailsForm">
          
          <div className="FotodanNamaDetails">
                <div className="Foto2" >foto</div>
                
                <div className="Nama">
                    <div className="Atas">kurt cobain</div>
                    <div className="Bawah">kontrol behel</div>
                </div>
            </div>
            
            <div className="formContainerAlamatdanTTD">
            <div className="formAlamat">
          <div className="Label">Alamat</div>
          <div className="value">sasdasdas</div>
        </div>

        <div className="formTTD">
          <div className="Label">Tanggal Lahir</div>
          <div className="value">sasdasdas</div>
        </div>
        </div>

        <div className="formNikPasien">
          <div className="Label">NIK</div>
          <div className="valueNIK">234234654665</div>
          
        </div>


      </div>
    );
  
    let popupContent = nextForm ? Isi : PatientForm;

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
                functionHistory={() => setNextForm(true)}
                functionInfo={() => setNextForm(false)}
                buttonInfo="Info"
                buttonHistory="History"
                buttonPhotos="Photos"
              />

            </div>
            {popupContent}
          </div>
        </div>
      </div>
    );
  };
  
  export default ViewDetailsContainer;