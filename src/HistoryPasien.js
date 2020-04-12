import React from 'react';
import './HistoryPasien.css';
import NavigationContainer from './NavigationMenu.js';


const Isi = () => {

    return(
        
        <div className="ContainerLuarHistory">
    <div className="ContainerHeaderHistory">
        
        <div className="Header">History</div>

        
    
    </div>


    <div className="IsiHistory">
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
        <div className="KeteranganContainer">
            <div className="ItemTanggal">
            <div className="Tanggal"> 22\10\2020</div>
            </div>
            <div className="ItemNama">
            <div className="NamaHistory">Nandhika Preatama pAuhuhs</div>
            </div>
            <div className="Item">
            <div className="KeluhanHistory">sfvdsfdsfsdfcd sdfdsfhfbjshbfub sfausfusuedgbu fasfusfuyebfub</div>
            </div>
            <div className="Item">
            <div className="PenangananHistory">fvdsfdsfsdfcd sdfdsfhfbjshbfub sfausfusuedgbu fasfusfuyebfub</div>
            </div>
        </div>
   

        </div>

        </div>
    </div>


    </div>
    
    );




};






const HistoryContainer = () => {

    return(
       <div className="ContainerUtama">
         <NavigationContainer />
        <Isi />
        </div>


    );



};

export default HistoryContainer;