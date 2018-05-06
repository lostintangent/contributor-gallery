import React from "react";
import styled from "styled-components";

export default function GuestbookGridCell({ signature, ...props }) {
    const cellContent = signature ?
        <FittedImage src={`http://avatars.io/${signature.handle ? "twitter/" + signature.handle +
         "/medium" : "" }`} alt={signature.message} {...props} /> :
        null;

    return <Cell>{cellContent}</Cell>;
}

const borderStyle = ({ theme: { borderStyle }}) => borderStyle;
const cellSize = ({ theme: { cellSize }}) => cellSize;

const Cell = styled.div`
    border-bottom: ${borderStyle};
    border-right: ${borderStyle};
    height: ${cellSize};
    width: ${cellSize};
`;

const FittedImage = styled.img`
    border: ${({ isActive }) => isActive ? 5 : 0}px solid ${({ theme: { primaryColor } }) => primaryColor};
    box-sizing: content-box;
    max-width: 100%;
    outline: ${({ alt, isBonus, isSpecial }) => alt && (isBonus || isSpecial) ? 5 : 0}px solid ${({ isSpecial, theme: { specialColor, bonusColor } }) => isSpecial ? specialColor : bonusColor };
    position: relative;
    transform: scale(${({ isActive }) => isActive ? 3 : 1});
    transition: transform 2s ease;
    z-index: ${({ isActive, isBonus, isSpecial }) => isActive ? 10 : (isBonus || isSpecial) ?  5 : 1};
`;