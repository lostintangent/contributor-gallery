import GuestbookGrid from "./components/GuestbookGrid";
import Header from "./components/Header";
import React from "react";

import signatures from "./model/signatureMatrix";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <Header />
                <GuestbookGrid signatures={signatures} />
            </AppContainer>
        </ThemeProvider>
    );
}

const AppContainer = styled.div`width: 905px`;