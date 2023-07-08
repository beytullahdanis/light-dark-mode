import React from "react";
import image from "../img/react-logo.svg"

const Text = ({mode}) => {
    return (
        <div className={mode === "dark" ? "main-dark" : "main"}>
           <img src={image} className="image-main"></img>
            <h2 className={mode === "dark" ?  "text-dark" : "header-text"}>React</h2>
            <div className={mode === "dark" ? "learn-more-dark" : "learn-more"}>The library for web and native user interfaces</div>
            <button className="learn-button">Learn React</button>
        </div>
    )
}

export default Text;