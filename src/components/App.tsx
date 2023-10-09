import GuestbookGrid from "./Grid/GuestbookGrid";
import GuestbookMap from "./Map/GuestbookMap";
import Header from "./Header";
import React from "react";

import pins from "../model/pins";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <GuestbookGrid />
        <GuestbookMap pins={pins} />
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  width: 900px;
`;
