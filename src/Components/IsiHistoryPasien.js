import React from "react";
import "../View/HistoryPasien.css"


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
        
        <div className="Item">
          <div className="IsiKeluhanHistory">{keluhanHistory}</div>
        </div>
        <div className="Item">
          <div className="IsiPenangananHistory">{penangananHistory}</div>
        </div>
        <div className="ItemNama">
          <div className="IsiNamaHistory">{namaHistory}</div>
        </div>
      </div>
    );
  };
  
  

  export default IsiHistory;