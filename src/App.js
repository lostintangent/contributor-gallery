import GuestbookGrid from "./components/GuestbookGrid";
import Header from "./components/Header";
import React from "react";

import "./index.css";

import signatures from "./model/signatureMatrix";
import { ThemeProvider } from "styled-components";

const theme = {
  borderStyle: "0.5px solid #666",
  cellSize: "30px",
  primaryColor: "plum",
  secondaryColor: "#666"
};

export default () => {
    return <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <GuestbookGrid signatures={signatures} />
      </div>
    </ThemeProvider>;
};