import React from "react";
import styled from "styled-components";
import "./App.scss";
import StyledButton from "./Components/StyledButton";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <AppBlock>
      <StyledButton>Button</StyledButton>
    </AppBlock>
  );
}

export default App;
