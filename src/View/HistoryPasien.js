import React from "react";
import "./HistoryPasien.css";
import NavigationContainer from "../Components/NavigationMenu.js";
import "../Components/IsiHistoryPasien.css"
import "./ItemPage.css";

const IsiHistory = (props) => {
  const {
    tanggalHistory,
    namaHistory,
    keluhanHistory,
    penangananHistory,
  } = props;
  return (
    <div className="IsiKeterangan">
      <div className="ItemTanggal">
        <div className="IsiTanggal"> {tanggalHistory}</div>
      </div>
      <div className="ItemNama">
        <div className="IsiNamaHistory">{namaHistory}</div>
      </div>
      <div className="Item">
        <div className="IsiKeluhanHistory">{keluhanHistory}</div>
      </div>
      <div className="Item">
        <div className="IsiPenangananHistory">{penangananHistory}</div>
      </div>
    </div>
  );
};

const Isi = () => {
  const historyData = [
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
      biaya: "500.000",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada ",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
      biaya: "500.000",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
      biaya: "500.000",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
      biaya: "500.000",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
      biaya: "500.000",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
      biaya: "500.000",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
      biaya: "500.000",
    },
  ];

  return (
    <div className="ContainerLuarHistory">
      <div className="ContainerHeaderHistory">
        <div className="Header">History</div>
      </div>


      <div className="TreatmentTable">

        <table>
          <tr>
            <th>Tanggal</th>
            <th>Nama</th>
            <th>Keluhan</th>
            <th>Penanganan</th>
            <th>Biaya</th>
          </tr>

          {historyData.map((data, index) => (
              <tr key={index}>
                <td>{data.date} </td>
                <td className="NameData">{data.name} </td>
                <td>{data.concern} </td>
          <td >{data.treatment} </td>
          <td className="PriceData">Rp.{data.biaya} </td>
              </tr>
            ))}
        </table>
      </div>


      
    </div>
  );
};

const HistoryContainer = () => {
  return (
    <div className="ContainerUtama">
      <NavigationContainer />
      <Isi />
    </div>
  );
};

export default HistoryContainer;
