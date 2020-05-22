import React, {useState} from "react"; 
import NavigationViewDetails from "./NavigationViewDetails.js";
import "./formViewDetails.css";
import IsiHistory from "./IsiHistoryPasien.js";

const ViewDetailsContainer = (props) => {
    const { popupViewDetails, setPopupViewDetails } = props;
    const [nextForm, setNextForm] = useState(false);
    

  
    const historyData = [
      {
        tanggal: "22/10/2020",
        concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
        treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
        biaya: "2342342",
      },
      {
        tanggal: "22/10/2020",
        concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
        treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
        biaya: "2342342",
      },
      {
        tanggal: "22/10/2020",
        concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
        treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
        biaya: "2342342",
      },
      {
        tanggal: "22/10/2020",
        concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
        treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
        biaya: "2342342",
      },
      {
        tanggal: "22/10/2020",
        concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
        treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
        biaya: "2342342",
      },
      {
        tanggal: "22/10/2020",
        concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
        treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
        biaya: "2342342",
      },
      {
        tanggal: "22/10/2020",
        concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
        treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
        biaya: "2342342",
      },
    ];


   

   
    const [activeTab, setActiveTab] = useState("Info");

    const HistoryPasien =  (
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
              {historyData.map((data, index) => (
            <div className="IsiKeteranganContainer">
              <IsiHistory
                key={index}
                tanggalHistory={data.tanggal}
                biayaHistory={data.biaya}
                keluhanHistory={data.concern}
                penangananHistory={data.treatment}
              />
            </div>
          ))}
          </div>
            </div>
          </div>
        </div>
  
    )

    const PhotosPasien = (
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

    const InfoDiriPasien = (
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
  
      
   

    let popupContent
      if (activeTab === "Info") {
        popupContent = InfoDiriPasien
      }
      if (activeTab === "History") {
        popupContent = HistoryPasien
      }



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
              
            <div className="headerNavDetails">
            <button className = {activeTab === "Info" ? "TabsItemActive" : "TabsItem"}
                   onClick={() => {
                    
                    setActiveTab("Info");
                  }}
            >
                    Info
            </button>
            
            <button className = {activeTab === "History" ? "TabsItemActive" : "TabsItem"}
                     onClick={() => {
                    
                      setActiveTab("History");
                    }}>
                    History
            </button>

            <button  className = {activeTab === "Photos" ? "TabsItemActive" : "TabsItem"}
                      onClick={() => {
                    
                        setActiveTab("Photos");
                      }}>
            
                    Photos
            </button>

                
        </div>

              

               

            </div>
            {popupContent}
          </div>
        </div>
      </div>
    );
  };
  
  export default ViewDetailsContainer;