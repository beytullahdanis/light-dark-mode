import React from "react";
import logo from "../img/react-logo.svg"

const Header = ({mode, toggle}) => {
    return (
        <div className={mode === "dark" ? "header-dark" : "header"}>
            <div className="header-box"> 
            <img src={logo} className="image"></img>
            <h1 className={mode === "dark" ? "header-text-dark" : "text-white"}>React</h1>
            </div>
         <div className="toggle"> <label class="switch">
        <input type="checkbox" onClick={toggle} checked={mode === "dark" ? true : false}/> <span class="slider round"></span></label></div>  
        </div>
    )
}


export default Header;