import styled from "styled-components";
import React from "react";

export default function RepoPicker() {
    return (
        <Container>
            <PickerLabel>Repository: <PickerInput type="text" value={"DioxusLabs/dioxus"} /></PickerLabel>
        </Container>
    );
}

const Container = styled.div`
    margin-bottom: 15px;
`;

const PickerLabel = styled.label`
    font-weight: bold;
`;

const PickerInput = styled.input`
    padding: 3px;
    width: 200px;
`
