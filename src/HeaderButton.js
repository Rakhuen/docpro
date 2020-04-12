import React from 'react';
import './HeaderButton.css';

const HeaderMenu = props => {
    const { btnKiri, btnKanan} = props;
    return(
       
        <div className="Header2Container">
            <div className="buttonKiri">{btnKiri}</div>
            <div className="buttonKanan">{btnKanan}</div>
        </div>
        
    
    
    
    
    );
}




export default HeaderMenu;