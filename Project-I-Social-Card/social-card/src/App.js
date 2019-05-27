import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";

const imageSource = {
  src:
    "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
  alt: "lambda logo red"
};

const headerTitleContent = {
  name: "Lambda School",
  handle: "@LambdaSchool",
  timestamp: "27 May"
};

const headerText = {
  text:
    "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"
};

const cardImage = {
  src: "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png",
  alt: "React Logo"
}

const cardContents = {
  heading: "Get started with react",
  text: "React makes it painless to create interactive UIs. Desin simple views for each state in your application.",
  source: "reactjs.org"
}

const App = () => {
  return (
    <div className="card-component">
      <HeaderContainer
        imageSource={imageSource}
        headerTitleContent={headerTitleContent}
        headerText={headerText}
      />
      <CardContainer imageSource={cardImage} contents={cardContents}/>
    </div>
  );
};

export default App;
