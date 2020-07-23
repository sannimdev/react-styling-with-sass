import React from "react";
import Button from "./Components/Button";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="gray" outline={true}>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline={true}>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button color="blue" fullWidth size="large" className="customized-button">
          BUTTON
        </Button>
        <Button color="gray" fullWidth={true} size="large">
          BUTTON
        </Button>
        <Button
          color="pink"
          fullWidth={true}
          size="large"
          onClick={() => console.log("클릭")}
          onMouseMove={() => console.log("moving")}
        >
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
