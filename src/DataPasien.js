import React from 'react';
import './HomePage.css';
import NavigationContainer from './NavigationMenu.js';
import HeaderMenu from './HeaderButton.js';
import CardPasien from './ContentPasien.js';
import Kurt from "./asset/MaskGroup.png";
import Liam from "./asset/liam.png";
import Alex from "./asset/alex.png";
import Nuno from "./asset/nuno.png";
import DeleteImage from "./asset/delete.png"



const Isi = () => {

    return(
        <div className="ContainerLuar2">
    <div className="ContainerDua">
        
        <div className="Header">Data Pasien</div>

        <HeaderMenu
            btnKiri="+New Patient"
            btnKanan="Today v"
        />


        <div className="CardContainer1">
           
           <CardPasien
           imageDelete = {DeleteImage} 
           image={Kurt}
           nama="Nandhika Pratama Putra"
           nomorTlp="085891573243"
           tanggal="Added on 12/02/2020"
       ></CardPasien>
       
       <CardPasien 
       imageDelete = {DeleteImage}
           image={Liam}
           nama="Nesia Shafira Yunindya"
           nomorTlp="085891573243"
           tanggal="Added on 12/02/2020"
       ></CardPasien>


       <CardPasien 
       imageDelete = {DeleteImage}
           image={Alex}
           nama="Bintang Ramadhan Putra"
           nomorTlp="085891573243"
           tanggal="Added on 12/02/2020"
       ></CardPasien>


       <CardPasien 
       imageDelete = {DeleteImage}
           image={Nuno}
           nama="Gilang Pranadjaya Putra"
           nomorTlp="085891573243"
           tanggal="Added on 12/02/2020"
       ></CardPasien>

   </div>

   <div className="CardContainer1">
           
           <CardPasien
           imageDelete = {DeleteImage} 
           image={Kurt}
           nama="Nandhika"
           nomorTlp="085891573243"
           tanggal="Added on 12/02/2020"
       ></CardPasien>
       
       <CardPasien
       imageDelete = {DeleteImage}
           image={Liam}
           nama="Pratama"
           nomorTlp="085891573243"
           tanggal="Added on 12/02/2020"
       ></CardPasien>


       <CardPasien 
       imageDelete = {DeleteImage}
           image={Alex}
           nama="Putra"
           nomorTlp="085891573243"
           tanggal="Added on 12/02/2020"
       ></CardPasien>


       <CardPasien
       imageDelete = {DeleteImage}
           image={Nuno}
           nama="Nesia"
           nomorTlp="085891573243"
           tanggal="Added on 12/02/2020"
       ></CardPasien>

   </div>
        
    
    </div>
    </div>

    );




};






const PasienContainer = () => {

    return(
       <div className="ContainerUtama">
         <NavigationContainer />
        <Isi />
        </div>


    );



};

export default PasienContainer;