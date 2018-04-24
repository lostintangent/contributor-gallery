import GuestbookGrid from "./components/GuestbookGrid";
import Header from "./components/Header";
import React from "react";

import signatures from "./model/signatureMatrix";
import styled, { injectGlobal, ThemeProvider } from "styled-components";

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    padding: 20px;
  }
`;

const theme = {
  borderStyle: "0.5px solid #666",
  cellSize: "30px",
  primaryColor: "plum",
  secondaryColor: "#666"
};

export default () => {
    return <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <GuestbookGrid signatures={signatures} />
      </AppContainer>
    </ThemeProvider>;
};

const AppContainer = styled.div`width: 905px`;