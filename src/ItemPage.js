import React, { useState } from "react";
import "./ItemPage.css";
import NavigationContainer from "./NavigationMenu.js";
import HeaderMenu from "./Components/HeaderButton.js";
import "./NewItem.css";

const IsiItem = (props) => {
    const {
      nomorItem,
      namaItem,
      keteranganItem,
      biayaItem,
    } = props;
    return (
      <div className="IsiKeterangan">
        <div className="ItemTanggal">
          <div className="IsiTanggal"> {nomorItem}</div>
        </div>
        <div className="ItemNama">
          <div className="IsiNamaHistory">{namaItem}</div>
        </div>
        <div className="Item">
          <div className="IsiKeluhanHistory">{keteranganItem}</div>
        </div>
        <div className="Item">
          <div className="IsiPenangananHistory">{biayaItem}</div>
        </div>
      </div>
    );
  };

  const Isi = () => {
    const [popupShow, setPopupShow] = useState(false);

    const PatientForm = () => {
        return (
          <div className="pasienForm">
            
            <div className="namaItemContainer">
              
                <div className="formNamaItem">
                  <div className="Label">Nama Item</div>
                  <input
                    type="text"
                    className="inputItem"
                    name="namaItem"
                    
                  />
                </div>
    
            </div>
    
            <div className="keteranganContainer">
              <div className="formKeterangan">
                <div className="Label">Keterangan</div>
                <input type="text" className="inputKeterangan" name="keterangan" />
              </div>
    
            </div>
    
            <div className="biayaContainer">
              <div className="formBiaya">
                <div className="Label">Biaya</div>
                <input
                  type="tel"
                  className="inputBiaya"
                  name="biayaItem"
                  pattern="[0-9]"
                  required
                />
              </div>
            </div>
    
            <div className="form4">
              <input
                type="submit"
                className="btnNext"
                value="Submit"
                onClick={() => setPopupShow(false)}
              />
            </div>
          </div>
        );
      };

      const NewItem = () => {
        return (
          <div className={popupShow ? "backgroundGelapItem" : "containerHidden"}>
            <div className="popupContainer">
              <div className="containerFormNewpatient">
                <div className="headerNewPatient">
                  <div className="judulForm">New Item</div>
                  <button className="btnClose" onClick={() => setPopupShow(false)}>
                    X
                  </button>
                </div>
    
                <PatientForm/>
              </div>
            </div>
          </div>
        );
      };



    const itemData = [
      {
        nomor: "1",
        nama: "Cabut gigi graham",
        keterangan: "melakukan pencabutan gigi dengan tang",
        biaya: "500.000",
      },
      {
        nomor: "2",
        nama: "Cabut gigi graham",
        keterangan: "melakukan pencabutan gigi dengan tang",
        biaya: "500.000",
      },
      {
        nomor: "3",
        nama: "Cabut gigi graham",
        keterangan: "melakukan pencabutan gigi dengan tang",
        biaya: "500.000",
      },
      {
        nomor: "4",
        nama: "Cabut gigi graham",
        keterangan: "melakukan pencabutan gigi dengan tang",
        biaya: "500.000",
      },
      {
        nomor: "5",
        nama: "Cabut gigi graham",
        keterangan: "melakukan pencabutan gigi dengan tang",
        biaya: "500.000",
      },
      {
        nomor: "6",
        nama: "Cabut gigi graham",
        keterangan: "melakukan pencabutan gigi dengan tang",
        biaya: "500.000",
      },
      {
        nomor: "7",
        nama: "Cabut gigi graham",
        keterangan: "melakukan pencabutan gigi dengan tang",
        biaya: "500.000",
      },
    ];
  
    return (
      <div className="ContainerLuarHistory">
          <NewItem/>
        <div className="ContainerHeaderHistory">
          <div className="Header">Input Biaya</div>
          <HeaderMenu
          functionKiri={() => setPopupShow(true)}
            btnKiri="+New Item"
        />

        </div>
        
        
        <div className="HistoryTable">
          <div className="ketContainer">
            <div className="KeteranganContainer">
              <div className="ItemTanggal">
                <div className="Tanggal"> No.</div>
              </div>
              <div className="ItemNama">
                <div className="NamaHistory">Nama</div>
              </div>
              <div className="Item">
                <div className="KeluhanHistory">Keterangan</div>
              </div>
              <div className="Item">
                <div className="PenangananHistory">Biaya</div>
              </div>
            </div>
  
            {itemData.map((data, index) => (
              <div className="IsiKeteranganContainer">
                <IsiItem
                  key={index}
                  nomorItem={data.nomor}
                  namaItem={data.nama}
                  keteranganItem={data.keterangan}
                  biayaItem={data.biaya}
                />
              </div>
            ))}
  
          </div>
        </div>
      </div>
    );
  };
  
  const InputBiayaContainer = () => {
    return (
      <div className="ContainerUtama">
        <NavigationContainer />
        <Isi />
      </div>
    );
  };
  
  export default InputBiayaContainer;
  



