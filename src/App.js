import GuestbookGrid from "./components/Grid/GuestbookGrid";
import GuestbookMap from "./components/Map/GuestbookMap";
import Header from "./components/Header";
import React from "react";

import pins from "./model/pins";
import signatures from "./model/signatureMatrix";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <Header />
                <GuestbookGrid signatures={signatures} />
                <GuestbookMap pins={pins} />
            </AppContainer>
        </ThemeProvider>
    );
}

const AppContainer = styled.div`
    width: 900px;
`;