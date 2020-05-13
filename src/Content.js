import React from 'react';
import "./Content.css";


const Card = props => {
    const { nama, perawatan, jam, image, imageDelete} = props;
    return(
        <div className="CardContainer">
            <div className="DeleteContainer">
            <img className="Delete" src = {imageDelete}/>
            </div>
            <div className="FotodanNama">
                <img className="Foto2" src = {image} />
                
                <div className="Nama">
                    <div className="Atas">{nama}</div>
                    <div className="Bawah">{perawatan}</div>
                </div>
            </div>

            <div className="CheckOrCancelContainer">
                <div className="JamJadwal">{jam}</div>

                <div className="CnC">
                    <div className="btnCheck">Finish</div>
                    <div className="btnCancel">Cancel</div>
                </div>
            </div>

            <div className="DetailsContainer">
                <div className="btnDetails">View details</div>
            </div>

        </div>
        


    );



};




export default Card;