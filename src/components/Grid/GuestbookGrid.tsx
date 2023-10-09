import GridArrow from "./GridArrow";
import { GridLegend } from "./GridLegend";
import GuestbookGridCell from "./GuestbookGridCell";
import React, { Component } from "react";

import logoImageUrl from "./logo.svg";
import signatures from "../../model/signatureMatrix";
import styled from "styled-components";

interface Signature {
  handle: string;
  message: string;
  isActive?: boolean;
  isBonus?: boolean;
  isSpecial?: boolean;
}

interface GuestbookGridState {
  signatures: Array<Signature | null>;
}

/**
 * Represents the primary component, which
 * displays the avatars for each user signature.
 */
export default class GuestbookGrid extends Component<
  Record<string, never>,
  GuestbookGridState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      signatures: signatures,
    };
  }

  componentDidMount() {
    // Determine whether we have any actual signatures
    // before we attempt to start the "active" carousel
    let activeSignatures = this.state.signatures.filter(
      (signature) => signature && typeof signature === "object"
    ) as Signature[];
    if (activeSignatures.length === 0) {
      return;
    }

    this.updateActiveSignature(activeSignatures);
    setInterval(
      this.updateActiveSignature.bind(this, activeSignatures),
      2000
    );
  }

  /**
   * Updates the UI to visually indicate which of the current
   * signatures is "active", and therefore, highlighted more prominently.
   *
   * @param {Array} activeSignatures - An array of active signatures
   */
  updateActiveSignature(activeSignatures: Signature[]) {
    activeSignatures.forEach((signature) => delete signature.isActive);

    const activeSignature = Math.floor(Math.random() * activeSignatures.length);
    activeSignatures[activeSignature].isActive = true;

    this.setState({ signatures: this.state.signatures });
  }

  render() {
    const cells = this.state.signatures.map((signature, index) => (
      <GuestbookGridCell key={index} {...signature} />
    ));

    return (
      <GridContainer>
        <GridLegend />
        <Grid>{cells}</Grid>
        <GridArrow />
      </GridContainer>
    );
  }
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
