import GridArrow from "./GridArrow";
import GuestbookGridCell from "./GuestbookGridCell";
import React from "react";
import styled from "styled-components";

import logoImageUrl from "./logo.svg";

export default function GuestbookGrid({ signatures }) {
  var cells = signatures.map(({ signature }) => (
    <GuestbookGridCell signature={signature} key={signature} />
  ));

  return (
    <GridContainer>
      <Grid>{cells}</Grid>
      <GridArrow />
    </GridContainer>
  );
}

const Grid = styled.div`
  border-left: ${({ theme: { borderStyle } }) => borderStyle};
  border-top: ${({ theme: { borderStyle } }) => borderStyle};
  display: flex;
  flex-wrap: wrap;
  width: 901px;

  &::before {
    background: no-repeat center/50% url(${logoImageUrl});
    content: "";
    height: 100%;
    opacity: 0.3;
    position: absolute;
    width: 100%;
  }
`;

const GridContainer = styled.div`
  position: relative;
`;
