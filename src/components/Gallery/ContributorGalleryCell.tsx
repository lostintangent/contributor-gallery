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
      <GitHubHandle isActive={cell.isActive}>{cell.contributor.login}</GitHubHandle>
      <FittedImage
        src={cell.contributor.avatar_url}
        {...cell}
      />
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

const GitHubHandle = styled.div<{ isActive?: boolean } & ThemeProps>`
  color: ${({ theme }) => theme.specialColor};
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};

  font-size: ${({ theme }) => theme.cellSize};
  position: absolute;
  text-align: center;
  text-shadow: 1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000;
  top: 0;
  width: 100%;
  z-index: 11;
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
