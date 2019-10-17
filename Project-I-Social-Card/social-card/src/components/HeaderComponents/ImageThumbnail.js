import React from "react";
import "./Header.css";


function ImageThumbnail({alt, src}) {
  return <img alt={alt} src={src} />;
}

export default ImageThumbnail;