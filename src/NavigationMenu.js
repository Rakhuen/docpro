import React from "react";
import './navigation.css';


const NavigationMenu = () => {
    return(
        
        <div className="NavigationCon">

            <div className="LogoContainer">
            <div className="Logo">DocPro</div>
            </div>

            <div className="MenuContainer">
                
                
                    
                    <div className="NamaMenu1">Jadwal</div>
                

                
                    
                    <div className="NamaMenu2">Data Pasien</div>
                
            
                
                    <div className="NamaMenu3">History</div>
                
            </div>

            <div className="footer">
                <div className="FotoProfile">foto</div>
                    <div className="NameAndSignout">
                        <div className="Nama">Budi</div>
                            <div className="btnSignout">Sign out</div>
                </div>

            </div>
            </div>
        
    );
};



const NavigationContainer = () =>{

    return(
        <div className="NavContainer">
            <NavigationMenu />

            </div>
        


    );



};


export default NavigationContainer;