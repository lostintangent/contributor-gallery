import React from "react";
import styled from "styled-components";

export default function GuestbookGridCell({ active = false, signature }) {
    const cellContent = signature ?
        <FittedImage active={active} src={`http://avatars.io/${signature.handle ? "twitter/" + signature.handle +
         "/medium" : "" }`} alt={signature.message} /> :
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
    border: ${({ active }) => active ? 5 : 0}px solid ${({ theme: { primaryColor } }) => primaryColor};
    box-sizing: content-box;
    max-width: 100%;
    position: relative;
    transform: scale(${({ active }) => active ? 3 : 1});
    transition: transform 2s;
    z-index: ${({ active }) => active ? 10 : 1};
`;