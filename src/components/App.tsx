import ContributorGallery from "./Gallery/ContributorGallery";
import Header from "./Header";
import React from "react";

import styled, { ThemeProvider } from "styled-components";
import theme, { GlobalStyle, ThemeProps } from "./theme";

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <ContributorGallery />
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div<ThemeProps>`
  width: 900px;
`;
