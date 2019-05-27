import React from "react";
import "./Footer.css";

function FooterContainer() {
    return(
        <div className="footer-container">
            <div className="icons comments" ></div>
            <div className="retweet">
            <div className="icons" id="retweet"></div><span></span>
            </div>
            <div className="like" >
            <div className="icons" id="like"></div><span></span>
            </div>
            <div className="icons send-dm"></div>
        </div>
    );
}

export default FooterContainer;