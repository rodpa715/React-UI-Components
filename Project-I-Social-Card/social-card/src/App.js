import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";

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

const App = () => {
  return (
    <div>
      <HeaderContainer
        imageSource={imageSource}
        headerTitleContent={headerTitleContent}
        headerText={headerText}
      />
    </div>
  );
};

export default App;
