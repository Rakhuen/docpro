import React from "react";
import "./HistoryPasien.css";
import NavigationContainer from "../NavigationMenu.js";

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
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada ",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
    },
    {
      date: "22/10/2020",
      name: "Nandhika Pratama Putra",
      concern: "Gigi graham copot, tetapi masih ada sebagian yang menempel",
      treatment: "Melakukan pencabutan untuk gigi yang masih menempel",
    },
  ];

  return (
    <div className="ContainerLuarHistory">
      <div className="ContainerHeaderHistory">
        <div className="Header">History</div>
      </div>

      <div className="HistoryTable">
        <div className="ketContainer">
          <div className="KeteranganContainer">
            <div className="ItemTanggal">
              <div className="Tanggal"> Tanggal</div>
            </div>
            <div className="ItemNama">
              <div className="NamaHistory">Nama</div>
            </div>
            <div className="Item">
              <div className="KeluhanHistory">Keluhan</div>
            </div>
            <div className="Item">
              <div className="PenangananHistory">Penanganan</div>
            </div>
          </div>

          {historyData.map((data, index) => (
            <div className="IsiKeteranganContainer">
              <IsiHistory
                key={index}
                tanggalHistory={data.date}
                namaHistory={data.name}
                keluhanHistory={data.concern}
                penangananHistory={data.treatment}
              />
            </div>
          ))}
        </div>
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
