import React from "react";
import "./HistoryPasien.css";
import "./ItemPage.css";
import NavigationContainer from "../NavigationMenu.js";

const IsiItem = (props) => {
  const { nomorItem, namaItem, keteranganItem, biayaItem } = props;
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
