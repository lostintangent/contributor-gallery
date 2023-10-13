import GuestbookGrid from "./Grid/GuestbookGrid";
import GuestbookMap from "./Map/GuestbookMap";
import Header from "./Header";
import React from "react";

import pins from "../model/pins";
import styled, { ThemeProvider } from "styled-components";
import theme, { GlobalStyle, ThemeProps } from "./theme";

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <GuestbookGrid />
        <GuestbookMap pins={pins} />
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div<ThemeProps>`
  width: 900px;
`;
