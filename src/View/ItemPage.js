import React, { useState } from "react";
import "./ItemPage.css";
import NavigationContainer from "../Components/NavigationMenu.js";
import HeaderMenu from "../Components/HeaderButton.js";
import "./NewItem.css";

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);

  const PatientForm = () => {
    const [namaItem, setNamaItem] = useState("");
    const [keteranganItem, setKeteranganItem] = useState("");
    const [biayaItem, setBiayaItem] = useState("");

    const changeNamaItem = (text) => {
      setNamaItem(text.target.value);
      console.log(namaItem);
    };

    const changeKeteranganItem = (text) => {
      setKeteranganItem(text.target.value);
      console.log(keteranganItem);
    };

    const changeBiayaItem = (text) => {
      setBiayaItem(text.target.value);
      console.log(biayaItem);
    };
    return (
      <div className="pasienForm">
        <div className="namaItemContainer">
          <div className="formNamaItem">
            <div className="Label">Nama Item</div>
            <input
              type="text"
              className="inputItem"
              name="namaItem"
              value={namaItem}
              onChange={changeNamaItem}
              onKeyUp={changeNamaItem}
            />
          </div>
        </div>

        <div className="keteranganContainer">
          <div className="formKeterangan">
            <div className="Label">Keterangan</div>
            <input
              type="text"
              className="inputKeterangan"
              name="keterangan"
              value={keteranganItem}
              onChange={changeKeteranganItem}
              onKeyUp={changeKeteranganItem}
            />
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
              value={biayaItem}
              onChange={changeBiayaItem}
              onKeyUp={changeBiayaItem}
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

            <PatientForm />
          </div>
        </div>
      </div>
    );
  };

  const treatmentData = [
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
  ];

  const drugsData = [
    {
      nomor: "1",
      nama: "Nama Obat",
      keterangan: "Obat untuk lala lili",
      kuantitas: "25",
      biaya: "500.000",
    },
    {
      nomor: "2",
      nama: "Nama Obat",
      keterangan: "Obat untuk lala lili",
      kuantitas: "15",
      biaya: "500.000",
    },
    {
      nomor: "3",
      nama: "Nama Obat",
      keterangan: "Obat untuk lala lili",
      kuantitas: "10",
      biaya: "500.000",
    },
    {
      nomor: "4",
      nama: "Nama Obat",
      keterangan: "Obat untuk lala lili",
      kuantitas: "35",
      biaya: "500.000",
    },
    {
      nomor: "5",
      nama: "Nama Obat",
      keterangan: "Obat untuk lala lili",
      kuantitas: "55",
      biaya: "500.000",
    },
  ];

  const [table, setTable] = useState(treatmentData);
  const [activeTab, setActiveTab] = useState("treatment");

  return (
    <div className="ContainerLuarHistory">
      <NewItem />
      <div className="ContainerHeaderHistory">
        <div className="Header">Input Biaya</div>
        <HeaderMenu
          functionKiri={() => setPopupShow(true)}
          btnKiri="+New Item"
        />
      </div>

      <div className="TreatmentTable">
        <div className="TableTabs">
          <div
            className={
              activeTab === "treatment" ? "TabsItemActive" : "TabsItem"
            }
            onClick={() => {
              setTable(treatmentData);
              setActiveTab("treatment");
            }}
          >
            Pengobatan
          </div>
          <div
            className={activeTab === "drug" ? "TabsItemActive" : "TabsItem"}
            onClick={() => {
              setTable(drugsData);
              setActiveTab("drug");
            }}
          >
            Obat
          </div>
        </div>
        <div className="line"></div>

        <table>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Keterangan</th>
            {activeTab === "drug" && <th>Kuantitas</th>}
            <th>{activeTab === "drug" ? "Biaya/qty" : "Biaya"} </th>
            <th>Hapus</th>
            <th>Perbarui</th>
          </tr>

          {table &&
            table.map((data, index) => (
              <tr key={index}>
                <td>{data.nomor} </td>
                <td className="NameData">{data.nama} </td>
                <td>{data.keterangan} </td>
                {activeTab === "drug" && <td>{data.kuantitas} </td>}
                <td className="PriceData">Rp. {data.biaya} </td>
                <td>
                  <div className="DeleteBtn">Hapus</div>
                </td>
                <td>
                  <div className="UpdateBtn">Perbarui</div>
                </td>
              </tr>
            ))}
        </table>
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
