import ContributorGalleryCaption from "./ContributorGalleryCaption";
import ContributorGalleryCell from "./ContributorGalleryCell";
import React, { Component } from "react";

import logoImageUrl from "./logo.svg";
import cells, { MatrixCell } from "../../model/contributorsMatrix";
import styled from "styled-components";
import { ThemeProps } from "../theme";

interface ContributorGalleryState {
  cells: MatrixCell[];
}

export default class ContributorGallery extends Component<object, ContributorGalleryState> {
  constructor(props: object) {
    super(props);
    this.state = {
      cells,
    };
  }

  componentDidMount() {
    // Determine whether we have any actual signatures
    // before we attempt to start the "active" carousel
    const activeSignatures = this.state.cells.filter(
      ({ contributor: signature }) => typeof signature?.login === "string"
    );
    if (activeSignatures.length === 0) {
      return;
    }

    this.updateActiveSignature(activeSignatures);
    setInterval(this.updateActiveSignature.bind(this, activeSignatures), 2000);
  }

  /**
   * Updates the UI to visually indicate which of the current
   * signatures is "active", and therefore, highlighted more prominently.
   *
   * @param {Array} activeSignatures - An array of active signatures
   */
  updateActiveSignature(activeSignatures: MatrixCell[]) {
    activeSignatures.forEach((signature) => delete signature.isActive);

    const activeSignature = Math.floor(Math.random() * activeSignatures.length);
    activeSignatures[activeSignature].isActive = true;

    this.setState({ cells: this.state.cells });
  }

  render() {
    const cells = this.state.cells.map((cell, index) => (
      <ContributorGalleryCell key={index} cell={cell} />
    ));

    return (
      <GridContainer>
        <Grid>{cells}</Grid>
        <ContributorGalleryCaption />
      </GridContainer>
    );
  }
}

const Grid = styled.div<ThemeProps>`
  border-left: ${({ theme: { borderStyle } }) => borderStyle};
  border-top: ${({ theme: { borderStyle } }) => borderStyle};
  display: flex;
  flex-wrap: wrap;
  width: 901px;

  &::before {
    background: no-repeat center/40% url(${logoImageUrl});
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
