import React, { useState, useEffect, useContext } from "react";
import "./ItemPage.css";
import NavigationContainer from "../Components/NavigationMenu.js";
import HeaderMenu from "../Components/HeaderButton.js";
import "./NewItem.css";
import axios from "axios";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";
import ReactLoading from "react-loading";

const Isi = () => {
  const [popupShow, setPopupShow] = useState(false);
  const [popupEditService, setPopupEditService] = useState(false);
  const [popupEditDrug, setPopupEditDrug] = useState(false);
  const [pilihan, setPilihan] = useState("NewServiceOrNewDrugs");
  const [service, setService] = useState();
  const [drug, setDrug] = useState();

  const [editService, setEditService] = useState();
  const idService = editService && editService.id_service;

  const [editDrug, setEditDrug] = useState();
  const idDrug = editDrug && editDrug.id_drug;

  const editServiceHandler = async (e, data) => {
    setEditService(data);
    setPopupEditService(true);
    console.log(data);
  };

  const editDrugHandler = async (e, data) => {
    setEditDrug(data);
    setPopupEditDrug(true);
    console.log(data);
  };

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

  const getDrugData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.get(
      "http://192.168.100.3:8000/api/doc-pro/v1/drug",
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );
    await setDrug(data);
  };

  const getServiceData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.get(
      "http://192.168.100.3:8000/api/doc-pro/v1/service",
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );
    await setService(data);
  };

  useEffect(() => {
    setTimeout(() => getServiceData(), 1000);
    setTimeout(() => getDrugData(), 1000);
  }, [popupShow]);

  const NewItem = () => {
    const postServiceData = async () => {
      let info = JSON.parse(localStorage.getItem("userInfo"));
      const ServiceData = {
        service_name: namaItem,
        service_desc: keteranganItem,
        service_price: biayaItem,
      };
      try {
        const result = await axios.post(
          "http://192.168.100.3:8000/api/doc-pro/v1/service",
          ServiceData,
          {
            headers: {
              authorization: `Bearer ${info.token}`,
            },
          }
        );
      } catch (error) {
        console.log(error.response);
      }
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
          "http://192.168.100.3:8000/api/doc-pro/v1/drug",
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
      }
    };

    const handlePopup = () => {
      setPopupShow(false);
      setPilihan("NewServiceOrNewDrugs");
    };

    const postService = () => {
      handlePopup();
      postServiceData();
    };

    const postDrug = () => {
      handlePopup();
      postDrugData();
    };

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

    console.log(refresh);

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

  const EditServiceItem = () => {
    const [namaItem, setNamaItem] = useState(
      editService && editService.service_name
    );
    const [keteranganItem, setKeteranganItem] = useState(
      editService && editService.service_desc
    );
    const [biayaItem, setBiayaItem] = useState(
      editService && editService.service_price
    );

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
    const postUpdateServiceData = async () => {
      let info = JSON.parse(localStorage.getItem("userInfo"));
      const ServiceData = {
        service_name: namaItem,
        service_desc: keteranganItem,
        service_price: biayaItem,
      };
      try {
        const result = await axios.post(
          `http://192.168.100.3:8000/api/doc-pro/v1/service/update?id=${idService}`,
          ServiceData,
          {
            headers: {
              authorization: `Bearer ${info.token}`,
            },
          }
        );
        setRefresh(true);
        console.log(result);
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      }
    };

    const handlePopup = () => {
      setPopupEditService(false);
      setPilihan("NewServiceOrNewDrugs");
    };

    const postEditService = () => {
      handlePopup();
      postUpdateServiceData();
    };

    const EditServiceForm = (
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
          <button className="btnSubmit" onClick={() => postEditService()}>
            submit
          </button>
        </div>
      </div>
    );

    let popupContent;
    popupContent = EditServiceForm;

    return (
      <div
        className={popupEditService ? "backgroundGelapItem" : "containerHidden"}
      >
        <div className="popupContainer">
          <div className="containerFormNewpatient">
            <div className="headerNewPatient">
              <div className="judulForm">Edit Item</div>
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

  const EditDrugItem = () => {
    const postUpdateDrugData = async () => {
      let info = JSON.parse(localStorage.getItem("userInfo"));
      const ServiceData = {
        drug_name: namaItem,
        drug_desc: keteranganItem,
        drug_price: biayaItem,
        drug_count: kuantitasItem,
      };
      try {
        const result = await axios.post(
          `http://192.168.100.3:8000/api/doc-pro/v1/drug/update?id=${idDrug}`,
          ServiceData,
          {
            headers: {
              authorization: `Bearer ${info.token}`,
            },
          }
        );
        setRefresh(!refresh);
        console.log(result);
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      }
    };

    const handlePopup = () => {
      setPopupEditDrug(false);
      setPilihan("NewServiceOrNewDrugs");
    };

    const postDrug = () => {
      handlePopup();
      postUpdateDrugData();
    };

    const [namaItem, setNamaItem] = useState(editDrug && editDrug.drug_name);
    const [keteranganItem, setKeteranganItem] = useState(
      editDrug && editDrug.drug_desc
    );
    const [biayaItem, setBiayaItem] = useState(editDrug && editDrug.drug_price);
    const [kuantitasItem, setKuantitasItem] = useState(
      editDrug && editDrug.drug_count
    );

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
    const EditServiceForm = (
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
          <button className="btnSubmit" onClick={() => postDrug()}>
            submit
          </button>
        </div>
      </div>
    );

    let popupContent;
    popupContent = EditServiceForm;

    return (
      <div
        className={popupEditDrug ? "backgroundGelapItem" : "containerHidden"}
      >
        <div className="popupContainer">
          <div className="containerFormNewpatient">
            <div className="headerNewPatient">
              <div className="judulForm">Edit Item</div>
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

  const [activeTab, setActiveTab] = useState("service");
  const [refresh, setRefresh] = useState(false);

  const deleteService = async (e, index) => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.delete(
      `http://192.168.100.3:8000/api/doc-pro/v1/service?id=${index}`,
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );
    setRefresh(!refresh);
  };

  const deleteDrug = async (e, index) => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    const { data } = await axios.delete(
      `http://192.168.100.3:8000/api/doc-pro/v1/drug?id=${index}`,
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );
    setRefresh(!refresh);
  };

  useEffect(() => {
    setTimeout(() => getServiceData(), 1000);
    setTimeout(() => getDrugData(), 1000);
  }, [refresh]);

  return (
    <div className="ContainerLuarHistory">
      <EditServiceItem />
      <EditDrugItem />
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
        {service && drug ? (
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
                    <div
                      className="DeleteBtn"
                      onClick={(e) => deleteService(e, data.id_service)}
                    >
                      Hapus
                    </div>
                  </td>
                  <td>
                    <div
                      className="UpdateBtn"
                      onClick={(e) => {
                        editServiceHandler(e, data);
                      }}
                    >
                      Perbarui
                    </div>
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
                    <div
                      className="DeleteBtn"
                      onClick={(e) => deleteDrug(e, data.id_drug)}
                    >
                      Hapus
                    </div>
                  </td>
                  <td>
                    <div
                      className="UpdateBtn"
                      onClick={(e) => {
                        editDrugHandler(e, data);
                      }}
                    >
                      Perbarui
                    </div>
                  </td>
                </tr>
              ))}
          </table>
        ) : (
          <div className="pageLoad">
            <ReactLoading
              type="bubbles"
              color="#278aff"
              height={"15%"}
              width={"15%"}
            ></ReactLoading>
          </div>
        )}
      </div>
    </div>
  );
};

const InputBiayaContainer = () => {
  const app = useContext(AppContext);

  return app.isLoggedIn ? (
    <div className="ContainerUtama">
      <NavigationContainer />
      <Isi />
    </div>
  ) : (
    <Redirect to="/login"></Redirect>
  );
};

export default InputBiayaContainer;
