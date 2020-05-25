import React, {useState} from "react"; 

import "./formViewDetails.css";
import IsiHistory from "./IsiHistoryPasien.js";
import Kurt from "../asset/MaskGroup.png";
import cabutgigi from "../asset/cabutgigi.png";
import gigi from "../asset/gigi.png";



const DataPhotosPasien = (props) => {
  

  const{
    image
    

  } = props;

  return(
    

        
        <img className="itemPhotos" src={image} />
        
          


     

  );

};


const IsiInfoPasien = (props) => {
  const {
    image,
    infoNamaPasien,
    infoNomorHpPasien,
    infoAlamatPasien,
    infoTanggalLahirPasien,
    infoNikPasien
  } = props;
  return (
    <div className="viewDetailsForm">
          
    <div className="FotodanNamaDetails">
    <img className="infoFotoPasien" src={image} />
          
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
    const { popupViewDetails, setPopupViewDetails } = props;
    const [activeTab, setActiveTab] = useState("Info");
    const [fotoPengobatanPasien, setFotoPengobatan] = useState("");
  const changeFotoPengobatanPasien = (photo) => {
    setFotoPengobatan(photo.target.value);
    console.log(fotoPengobatanPasien);
  };

  
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

    const photoData = [
      {
       image : gigi
      },
      {
        image : cabutgigi
      },
      {
        image : gigi
      },
      {
        image : cabutgigi
      },
      {
        image : gigi
      },
      {
        image : cabutgigi
      },
      {
        image : gigi
      },
    ];


   

   
  

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
         {photoData.map((data, index) => (
            
             <DataPhotosPasien
             key={index}
            image = {data.image}
           
    
          />

          ))}
</div>
</div>
 
       </div>
     
      
   

    );


   

    const InfoDiriPasien = (
      <IsiInfoPasien 
        image = {Kurt}
        infoNamaPasien = "kurt cobain"
        infoNomorHpPasien = "098408935409"
        infoAlamatPasien = "kavling kebagusan kavling kebagusan kavling kebagusan"
        infoTanggalLahirPasien = "25/12/1202"
        infoNikPasien = "23213241234324532"
      />
    
    );
  
      
    const handlePopup = () => {
      setActiveTab("Info")
      setPopupViewDetails(false)
    };

    let popupContent
      if (activeTab === "Info") {
        popupContent = InfoDiriPasien
      }
      if (activeTab === "History") {
        popupContent = HistoryPasien
      }
      if(activeTab === "Photos"){
        popupContent = PhotosPasien

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
        <div className="line"></div>
              

               

            </div>
            {popupContent}
          </div>
        </div>
      </div>
    );
  };
  
  export default ViewDetailsContainer;