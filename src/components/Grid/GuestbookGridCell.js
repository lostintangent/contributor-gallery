import React from "react";
import styled from "styled-components";

export default function GuestbookGridCell({ isActive = false, isBonus = false, signature }) {
    const cellContent = signature ?
        <FittedImage isActive={isActive} isBonus={isBonus} src={`http://avatars.io/${signature.handle ? "twitter/" + signature.handle +
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
    border: ${({ isActive }) => isActive ? 5 : 0}px solid ${({ theme: { primaryColor } }) => primaryColor};
    box-sizing: content-box;
    max-width: 100%;
    outline: ${({ alt, isBonus }) => alt && isBonus ? 5 : 0}px solid gold;
    position: relative;
    transform: scale(${({ isActive }) => isActive ? 3 : 1});
    transition: transform 2s ease;
    z-index: ${({ isActive, isBonus }) => isActive ? 10 : isBonus?  5 : 1};
`;