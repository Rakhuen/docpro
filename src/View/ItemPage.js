import React, { useState, useEffect } from "react";
import "./ItemPage.css";
import NavigationContainer from "../Components/NavigationMenu.js";
import HeaderMenu from "../Components/HeaderButton.js";
import "./NewItem.css";
import axios from "axios";

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [pilihan, setPilihan] = useState("NewServiceOrNewDrugs");
  const [service, setService] = useState([]);
  const [drug, setDrug] = useState([]); //liat ini gue nambahin state

  const NewServiceOrNewDrugs = (
    <div className="btnPilihanContainer">
      <button className="btnPilihan" onClick={() => setPilihan("NewService")}>
        +New Service
      </button>

      <div className="pembatas">OR</div>

      <button className="btnPilihan" onClick={() => setPilihan("NewDrugs")}>
        +New Drugs
      </button>
    </div>
  );

  const [namaItem, setNamaItem] = useState("");
  const [keteranganItem, setKeteranganItem] = useState("");
  const [biayaItem, setBiayaItem] = useState("");
  const [kuantitasItem, setKuantitasItem] = useState("");

  const changeNamaItem = (text) => {
    setNamaItem(text.target.value);
    console.log(namaItem);
  };

  const changeKeteranganItem = (text) => {
    setKeteranganItem(text.target.value);
    console.log(keteranganItem);
  };

  const changeBiayaItem = (number) => {
    setBiayaItem(number.target.value);
    console.log(biayaItem);
  };

  const changeKuantitasItem = (number) => {
    setKuantitasItem(number.target.value);
    console.log(kuantitasItem);
  };

  const getDrugData = async () => {
    // let info = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(info.token)
    // const { data } = await axios.get(
    //   "http://localhost:8000/api/doc-pro/v1/drug",
    //   {
    //     headers: {
    //       authorization: `Bearer ${info.token}`,
    //     },
    //   }
    // );
    // await setDrug(data);
  };

  const getServiceData = async () => {
    // let info = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(info.token)
    // const { data } = await axios.get(
    //   "http://localhost:8000/api/doc-pro/v1/service",
    //   {
    //     headers: {
    //       authorization: `Bearer ${info.token}`,
    //     },
    //   }
    // );
    // await setService(data);
  };

  useEffect(() => {
    getServiceData();
    getDrugData();
  }, []);

  const postServiceData = async () => {
    // let info = JSON.parse(localStorage.getItem("userInfo"));
    // const ServiceData = {
    //   service_name: namaItem,
    //   service_desc: keteranganItem,
    //   service_price: biayaItem,
    // };
    // try {
    //   const result = await axios.post(
    //     "http://localhost:8000/api/doc-pro/v1/service",
    //     ServiceData,
    //     {
    //       headers: {
    //         authorization: `Bearer ${info.token}`,
    //       },
    //     }
    //   );
    //   console.log(result);
    // } catch (error) {
    //   console.log(error.response);
    //   alert(error.response.data.message);
    // }
  };

  const postDrugData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const DrugData = {
      drug_name: namaItem,
      drug_desc: keteranganItem,
      drug_price: biayaItem,
      drug_count: kuantitasItem,
    };

    try {
      const result = await axios.post(
        "http://localhost:8000/api/doc-pro/v1/drug",
        DrugData,
        {
          headers: {
            authorization: `Bearer ${info.token}`,
          },
        }
      );

      console.log(result);
    } catch (error) {
      console.log(error.response);
      alert(error.response.data.message);
    }
  };

  const postService = () => {
    handlePopup();
    postServiceData();
  };

  const postDrug = () => {
    handlePopup();
    postDrugData();
  };

  const handlePopup = () => {
    setPopupShow(false);
    setPilihan("NewServiceOrNewDrugs");
  };

  const NewServiceForm = (
    <div className="pasienForm">
      <div className="namaItemContainer">
        <div className="formNamaItem">
          <div className="Label">Nama Pengobatan</div>
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

      <div className="backNsubmit">
        <button
          className="btnBack"
          onClick={() => setPilihan("NewServiceOrNewDrugs")}
        >
          back
        </button>
        <button className="btnSubmit" onClick={() => postService()}>
          submit
        </button>
      </div>
    </div>
  );

  const NewDrugsForm = (
    <div className="pasienForm">
      <div className="namaItemContainer">
        <div className="formNamaItem">
          <div className="Label">Nama Obat</div>
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

        <div className="formKuantitas">
          <div className="Label">Kuantitas</div>

          <input
            type="number"
            className="inputKuantitas"
            name="kuantitas"
            min="1"
            max="99"
            value={kuantitasItem}
            onChange={changeKuantitasItem}
            onKeyUp={changeKuantitasItem}
            required
          />
        </div>
      </div>

      <div className="backNsubmit">
        <button
          className="btnBack"
          onClick={() => setPilihan("NewServiceOrNewDrugs")}
        >
          back
        </button>
        <button className="btnSubmit" onClick={() => postDrug()}>
          submit
        </button>
      </div>
    </div>
  );

  let popupContent;
  if (pilihan === "NewServiceOrNewDrugs") {
    popupContent = NewServiceOrNewDrugs;
  }
  if (pilihan === "NewService") {
    popupContent = NewServiceForm;
  }
  if (pilihan === "NewDrugs") {
    popupContent = NewDrugsForm;
  }

  const NewItem = () => {
    return (
      <div className={popupShow ? "backgroundGelapItem" : "containerHidden"}>
        <div className="popupContainer">
          <div className="containerFormNewpatient">
            <div className="headerNewPatient">
              <div className="judulForm">New Item</div>
              <button className="btnClose" onClick={() => handlePopup()}>
                X
              </button>
            </div>
            {popupContent}
          </div>
        </div>
      </div>
    );
  };

  // const treatmentData = [
  //   {
  //     nomor: "1",
  //     nama: "Cabut gigi graham",
  //     keterangan: "melakukan pencabutan gigi dengan tang",
  //     biaya: "500.000",
  //   },
  //   {
  //     nomor: "2",
  //     nama: "Cabut gigi graham",
  //     keterangan: "melakukan pencabutan gigi dengan tang",
  //     biaya: "500.000",
  //   },
  //   {
  //     nomor: "3",
  //     nama: "Cabut gigi graham",
  //     keterangan: "melakukan pencabutan gigi dengan tang",
  //     biaya: "500.000",
  //   },
  // ];

  // const drugsData = [
  //   {
  //     nomor: "1",
  //     nama: "Nama Obat",
  //     keterangan: "Obat untuk lala lili",
  //     kuantitas: "25",
  //     biaya: "500.000",
  //   },
  //   {
  //     nomor: "2",
  //     nama: "Nama Obat",
  //     keterangan: "Obat untuk lala lili",
  //     kuantitas: "15",
  //     biaya: "500.000",
  //   },
  //   {
  //     nomor: "3",
  //     nama: "Nama Obat",
  //     keterangan: "Obat untuk lala lili",
  //     kuantitas: "10",
  //     biaya: "500.000",
  //   },
  //   {
  //     nomor: "4",
  //     nama: "Nama Obat",
  //     keterangan: "Obat untuk lala lili",
  //     kuantitas: "35",
  //     biaya: "500.000",
  //   },
  //   {
  //     nomor: "5",
  //     nama: "Nama Obat",
  //     keterangan: "Obat untuk lala lili",
  //     kuantitas: "55",
  //     biaya: "500.000",
  //   },
  // ];

  // const [table, setTable] = useState(treatmentData);
  // DI ATAS INI GUE COMMAND KARNA KITA UDAH GA BUTUH, KARNA TERNYATA RESPONSE DARI BACKEND PROPERTYNYA BEDA BEDA JADI HARUS SATU SATU
  //CERNA SENDIRI MAKSUDNYA GIMANA

  const [activeTab, setActiveTab] = useState("service");

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
            className={activeTab === "service" ? "TabsItemActive" : "TabsItem"}
            onClick={() => {
              setActiveTab("service");
            }}
          >
            Pengobatan
          </div>
          <div
            className={activeTab === "drug" ? "TabsItemActive" : "TabsItem"}
            onClick={() => {
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

          {activeTab === "service" &&
            service &&
            service.map((data, index) => (
              <tr key={index}>
                <td>{index + 1} </td>
                <td className="NameData">{data.service_name} </td>
                <td>{data.service_desc} </td>
                <td className="PriceData">Rp. {data.service_price} </td>
                <td>
                  <div className="DeleteBtn">Hapus</div>
                </td>
                <td>
                  <div className="UpdateBtn">Perbarui</div>
                </td>
              </tr>
            ))}

          {activeTab === "drug" &&
            drug &&
            drug.map((data, index) => (
              <tr key={index}>
                <td>{index + 1} </td>
                <td className="NameData">{data.drug_name} </td>
                <td>{data.drug_desc} </td>
                {activeTab === "drug" && <td>{data.drug_count} </td>}
                <td className="PriceData">Rp. {data.drug_price} </td>
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

//itu isi table gue jadiin ada dua, jadi kalo bacanya activeTabnya si service berarti isinya gitu, kalo activeTabnya drug ya isinya gitu. cek bener bener

const InputBiayaContainer = () => {
  return (
    <div className="ContainerUtama">
      <NavigationContainer />
      <Isi />
    </div>
  );
};

export default InputBiayaContainer;
