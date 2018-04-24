import React from "react";
import styled from "styled-components";

const CELL_HEIGHT = 30;
const CELL_WIDTH = 30;

export default ({ borderStyle, signature }) => {
    const cellContent = signature ?
        <FittedImage src={`http://avatars.io/twitter/${signature.handle}/small`} alt={signature.message} /> :
        null;

    return <div style={createStyle(borderStyle)}>{cellContent}</div>;
}

function createStyle(borderStyle) {
    return {
        borderBottom: borderStyle,
        borderRight: borderStyle,
        height: CELL_HEIGHT,
        width: CELL_WIDTH
    };
}

const FittedImage = styled.img`max-width: 100%; max-height: 100%; object-fit: cover`;