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

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
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
        <ButtonGroup>
          <StyledButton size="large" color="pink">
            Button
          </StyledButton>
          <StyledButton>Button</StyledButton>
          <StyledButton size="small" color="gray">
            Button
          </StyledButton>
        </ButtonGroup>
        <ButtonGroup>
          <StyledButton size="large" color="pink" outline>
            Button
          </StyledButton>
          <StyledButton outline>Button</StyledButton>
          <StyledButton size="small" color="gray" outline>
            Button
          </StyledButton>
        </ButtonGroup>
        <ButtonGroup>
          <StyledButton size="large" color="pink" fullWidth>
            Button
          </StyledButton>
          <StyledButton size="large" fullWidth>
            Button
          </StyledButton>
          <StyledButton size="large" color="gray" fullWidth>
            Button
          </StyledButton>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
