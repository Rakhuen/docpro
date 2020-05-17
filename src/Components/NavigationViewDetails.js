import React from "react";
import "./NavigationViewDetails.css";

const NavigationViewDetails = (props) => {
    const {buttonInfo,buttonHistory,buttonPhotos,functionInfo,functionHistory,functionPhotos} = props;


    return(
        <div className="headerNavDetails">
            <button className="btnInfo" onClick={functionInfo}>
                    {buttonInfo}
            </button>
            
            <button className="btnHistory" onClick={functionHistory}>
                    {buttonHistory}
            </button>

            <button className="btnPhotos" onClick={functionPhotos}>
                    {buttonPhotos}
            </button>

                
        </div>
    );
};

export default NavigationViewDetails;