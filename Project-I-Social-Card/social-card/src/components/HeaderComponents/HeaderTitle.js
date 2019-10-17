import React from "react";
import "./Header.css";

function HeaderTitle({name, handle, timestamp}) {
  return (
    <div className="header-title">
      <h3>{name}</h3>
      <h4>{handle}</h4><span>•</span>
      <h4>{timestamp}</h4>
    </div>
  );
}

export default HeaderTitle;