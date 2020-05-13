import React from 'react';
import './HeaderButton.css';

const HeaderMenu = props => {
    const { btnKiri, btnKanan, functionKiri} = props;
    return(
       
        <div className="Header2Container">
            <button className="buttonKiri" onClick =  {functionKiri}>{btnKiri}</button>
            <button className="buttonKanan" onClick>{btnKanan}</button>
        </div>
        
    
    
    
    
    );
}




export default HeaderMenu;