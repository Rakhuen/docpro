import React from 'react';
import './HistoryPasien.css';
import NavigationContainer from './NavigationMenu.js';


const Isi = () => {

    return(
        
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

      
        <div className="IsiKeteranganContainer">
            <IsiHistory
                tanggalHistory="22/10/2020"
                namaHistory="Nandhika Pratama Putra"
                keluhanHistory="Gigi graham copot, tetapi masih ada sebagian yang menempel"
                penangananHistory="Melakukan pencabutan untuk gigi yang masih menempel"
            />
            
            
        </div>

        <div className="IsiKeteranganContainer">
        <IsiHistory
                tanggalHistory="22/10/2020"
                namaHistory="Nandhika Pratama Putra"
                keluhanHistory="Gigi graham copot, tetapi masih ada sebagian yang menempel"
                penangananHistory="Melakukan pencabutan untuk gigi yang masih menempel"
            />
        </div>

        <div className="IsiKeteranganContainer">
        <IsiHistory
                tanggalHistory="22/10/2020"
                namaHistory="Nandhika Pratama Putra"
                keluhanHistory="Gigi graham copot, tetapi masih ada sebagian yang menempel"
                penangananHistory="Melakukan pencabutan untuk gigi yang masih menempel"
            />
        </div>

        <div className="IsiKeteranganContainer">
        <IsiHistory
                tanggalHistory="22/10/2020"
                namaHistory="Nandhika Pratama Putra"
                keluhanHistory="Gigi graham copot, tetapi masih ada sebagian yang menempel"
                penangananHistory="Melakukan pencabutan untuk gigi yang masih menempel"
            />
        </div>

        </div>

        </div>
    </div>


    
    
    );




};


  const IsiHistory = props => {
    const { tanggalHistory, namaHistory, keluhanHistory, penangananHistory} = props;
    return(
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

  }


const HistoryContainer = () => {

    return(
       <div className="ContainerUtama">
         <NavigationContainer />
        <Isi />
        </div>


    );



};

export default HistoryContainer;