import React from "react";
import styled from "styled-components";
import { ThemeProps } from "../theme";
import { MatrixCell } from "../../model/contributorsMatrix";

interface ContributorGalleryCellProps {
  cell: MatrixCell;
}

export default function ContributorGalleryCell({
  cell,
}: ContributorGalleryCellProps): JSX.Element {
  const cellContent = cell.contributor ? (
    <>
      <FittedImage
        src={cell.contributor.avatar_url}
        {...cell}
      />
      {cell.isActive && <LoginText>{cell.contributor.login}</LoginText>}
    </>
  ) : null;

  return <Cell>{cellContent}</Cell>;
}

const borderStyle = ({ theme: { borderStyle } }: ThemeProps) => borderStyle;
const cellSize = ({ theme: { cellSize } }: ThemeProps) => cellSize;

const Cell = styled.div<ThemeProps>`
  border-bottom: ${borderStyle};
  border-right: ${borderStyle};
  height: ${cellSize};
  position: relative;
  width: ${cellSize};
`;

const FittedImage = styled.img<MatrixCell & ThemeProps>`
  border: ${({ isActive }) => (isActive ? 5 : 0)}px solid
    ${({ theme: { primaryColor } }) => primaryColor};
  box-sizing: content-box;
  max-width: 100%;
  position: relative;
  transform: scale(${({ isActive }) => (isActive ? 3 : 1)});
  transition: transform 2s ease;
  z-index: ${({ isActive }) =>
    isActive ? 10 : 1};
`;

const LoginText = styled.div<ThemeProps>`
  color: white;
  font-size: ${cellSize};
  position: absolute;
  text-align: center;
  text-shadow: 1px 1px 2px black;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 11;
`;
