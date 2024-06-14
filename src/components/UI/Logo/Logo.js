import React from "react";
import "./Logo.css";
import burgerLogo from "../../../assests/images/burger-logo.png";

const logo = props => (
    <div className="Logo" style={{height: props.height, width: props.mobileWidth}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;