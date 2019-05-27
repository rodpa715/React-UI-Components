import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function CardContainer({ imageSource, contents }) {
  return (
    <div className="card-container">
      <CardBanner alt={imageSource.alt} src={imageSource.src} />
      <CardContent
        heading={contents.heading}
        text={contents.text}
        source={contents.source}
      />
    </div>
  );
}

export default CardContainer;
