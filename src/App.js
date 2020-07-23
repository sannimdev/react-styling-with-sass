import React, { useState } from "react";
import styled from "styled-components";
import "./App.scss";
import StyledButton from "./Components/StyledButton";
// import Button from "./Components/Button";
// import CheckBox from "./Components/CheckBox";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${(props) => props.color || "black"};
//   border-radius: 50%;

//   ${(props) =>
//     props.huge &&
//     css`
//       width: 10rem;
//       height: 10rem;
//     `}
// `;

function App() {
  // const [check, setcheck] = useState(false);
  // const onChange = (e) => {
  //   setcheck(e.target.checked);
  // };
  return (
    <AppBlock>
      <StyledButton>Button</StyledButton>
    </AppBlock>
    // <div className="App">
    //   {/* <Circle />
    //   <Circle color="blue" huge /> */}
    //   {/* <CheckBox onChange={onChange} checked={check}>
    //     다음 약관에 모두 동의
    //   </CheckBox> */}

    //   {/* <div className="buttons">
    //     <Button size="large">BUTTON</Button>
    //     <Button>BUTTON</Button>
    //     <Button size="small">BUTTON</Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" color="gray">
    //       BUTTON
    //     </Button>
    //     <Button color="gray">BUTTON</Button>
    //     <Button size="small" color="gray">
    //       BUTTON
    //     </Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" color="pink">
    //       BUTTON
    //     </Button>
    //     <Button color="pink">BUTTON</Button>
    //     <Button size="small" color="pink">
    //       BUTTON
    //     </Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" color="blue" outline>
    //       BUTTON
    //     </Button>
    //     <Button color="gray" outline={true}>
    //       BUTTON
    //     </Button>
    //     <Button size="small" color="pink" outline={true}>
    //       BUTTON
    //     </Button>
    //   </div>
    //   <div className="buttons">
    //     <Button color="blue" fullWidth size="large" className="customized-button">
    //       BUTTON
    //     </Button>
    //     <Button color="gray" fullWidth={true} size="large">
    //       BUTTON
    //     </Button>
    //     <Button
    //       color="pink"
    //       fullWidth={true}
    //       size="large"
    //       onClick={() => console.log("클릭")}
    //       onMouseMove={() => console.log("moving")}
    //     >
    //       BUTTON
    //     </Button>
    //   </div> */}
    // </div>
  );
}

export default App;
