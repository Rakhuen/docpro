import React from "react";
import "../View/HistoryPasien.css";
import "./IsiHistoryPasien.css";

const IsiHistory = (props) => {
  const {
    tanggalHistory,
    biayaHistory,
    keluhanHistory,
    penangananHistory,
  } = props;
  return (
    <div className="IsiKeterangan">
      <div className="ItemTanggal">
        <div className="infoIsiTanggal"> {tanggalHistory}</div>
      </div>

      <div className="Item">
        <div className="IsiKeluhanHistory">{keluhanHistory}</div>
      </div>
      <div className="Item">
        <div className="IsiPenangananHistory">{penangananHistory}</div>
      </div>
      <div className="ItemNama">
        <div className="IsiNamaHistory">{biayaHistory}</div>

      </div>
    </div>
  );
};

export default IsiHistory;
