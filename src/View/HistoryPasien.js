import React, { useState, useEffect, useContext } from "react";
import "./HistoryPasien.css";
import NavigationContainer from "../Components/NavigationMenu.js";
import "../Components/IsiHistoryPasien.css";
import "./ItemPage.css";
import axios from "axios";
import { AppContext } from "../App";
import { Redirect } from "react-router-dom";
import ReactLoading from "react-loading";

const Isi = () => {
  const [historyData, setHistoryData] = useState();

  const getHistoryData = async () => {
    let info = JSON.parse(localStorage.getItem("userInfo"));
    console.log(info.token);
    const { data } = await axios.get(
      "http://localhost:8000/api/doc-pro/v1/history",
      {
        headers: {
          authorization: `Bearer ${info.token}`,
        },
      }
    );
    await setHistoryData(data);
  };

  useEffect(() => {
    getHistoryData();
    console.log(historyData);
  }, []);

  console.log(historyData);

  return (
    <div className="ContainerLuarHistory">
      <div className="ContainerHeaderHistory">
        <div className="Header">History</div>
      </div>

      <div className="TreatmentTable">
        {historyData ? (
          <table>
            <tr>
              <th>Tanggal</th>
              <th>Nama</th>
              <th>Keluhan</th>
              <th>Penanganan</th>
              <th>Biaya</th>
            </tr>

            {historyData.map((data, index) => {
              console.log(data);
              return (
                <tr key={index}>
                  <td>{data.appointmet.tanggal} </td>
                  <td className="NameData">{data.pasien.nama} </td>
                  <td>{data.appointmet.keluhan} </td>
                  <td>{data.diagnosa.penanganan} </td>
                  <td className="PriceData">Rp.{data.diagnosa.total_biaya} </td>
                </tr>
              );
            })}
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

const HistoryContainer = () => {
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

export default HistoryContainer;
