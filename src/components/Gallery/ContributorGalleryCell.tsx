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
  // Conditionally render the GitHub handle when the cell is active
  const GitHubHandle = cell.isActive && cell.contributor ? (
    <GitHubHandleText>{cell.contributor.login}!</GitHubHandleText>
  ) : null;

  const cellContent = cell.contributor ? (
    <>
      {GitHubHandle}
      <FittedImage src={cell.contributor.avatar_url} {...cell} />
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
  z-index: ${({ isActive }) => isActive ? 10 : 1};
`;

// Styled component for displaying the GitHub handle
const GitHubHandleText = styled.span<ThemeProps>`
  color: ${({ theme }) => theme.specialColor};
  font-size: ${({ theme }) => theme.cellSize};
  position: absolute;
  text-shadow: 1px 1px 2px black; 
  top: 0;
  transform: translate(-50%, -100%);
  left: 50%;
  z-index: 11;
`;
