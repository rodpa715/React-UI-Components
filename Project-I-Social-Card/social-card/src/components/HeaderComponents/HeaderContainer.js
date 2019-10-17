import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

function HeaderContainer({ imageSource, headerTitleContent, headerText }) {
  return (
    <div className="header-container">
        <ImageThumbnail alt={imageSource.alt} src={imageSource.src} />
     <section className="user-info">
        <HeaderTitle
          name={headerTitleContent.name}
          handle={headerTitleContent.handle}
          timestamp={headerTitleContent.timestamp}
        />
      <HeaderContent text={headerText.text} />
     </section>
    </div>
  );
}

export default HeaderContainer;
