import React from "react";
import styled from "styled-components";

export default function GuestbookGridCell({ signature }) {
    const cellContent = signature ?
        <FittedImage src={`http://avatars.io/twitter/${signature.handle}/small`} alt={signature.message} /> :
        null;

    return <Cell>{cellContent}</Cell>;
}

const Cell = styled.div`
    border-bottom: ${({ theme: { borderStyle }}) => borderStyle };
    border-right: ${({ theme: { borderStyle }}) => borderStyle };
    height: ${({ theme: { cellSize }}) => cellSize };
    width: ${({ theme: { cellSize }}) => cellSize };
`;

const FittedImage = styled.img`
    max-width: 100%;
`;