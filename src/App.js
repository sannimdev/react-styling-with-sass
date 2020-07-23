import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.scss";
import StyledButton from "./Components/StyledButton";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595",
};
function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <StyledButton>Button</StyledButton>
        <StyledButton color="gray">Button</StyledButton>
        <StyledButton color="pink">Button</StyledButton>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
