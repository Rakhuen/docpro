import React from "react";
import "./HeaderButton.css";

const HeaderMenu = (props) => {
  const { btnKiri, btnKanan, functionKiri, functionKanan } = props;
  return (
    <div className="Header2Container">
      <button className="buttonKiri" onClick={functionKiri}>
        {btnKiri}
      </button>
      {btnKanan && (
        <button className="buttonKanan" onClick={functionKanan}>
          {btnKanan}
        </button>
      )}
    </div>
  );
};

export default HeaderMenu;
