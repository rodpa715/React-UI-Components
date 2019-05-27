import React from "react";
import "./Footer.css";

function FooterContainer() {
  let count = 0;
  function addOne() {
    count === 0 ? count++ : (count = 0);
  }
  return (
    <div className="footer-container">
      <div className="icons comments" />
      <div className="retweet">
        <div className="icons" id="retweet" onClick={addOne} />
        <span>{state.count}</span>
      </div>
      <div className="like">
        <div className="icons" id="like" onClick={addOne} />
        <span>{state.count}</span>
      </div>
      <div className="icons send-dm" />
    </div>
  );
}

export default FooterContainer;
