import GridArrow from "./GridArrow";
import GuestbookGridCell from "./GuestbookGridCell";
import React, { Component } from "react";

import logoImageUrl from "./logo.svg";
import styled from "styled-components";

export default class GuestbookGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signatures: props.signatures
    }
  }

  componentDidMount() {
    var activeSignatures = this.state.signatures.filter(({ signature }) => signature);
    if (activeSignatures.length === 0) {
      return;
    }

    setInterval(() => {
      activeSignatures.forEach(signature => delete signature.active);

      const activeSignature = Math.floor(Math.random() * activeSignatures.length);
      activeSignatures[activeSignature].active = true;

      this.setState({ signatures: this.state.signatures });
    }, 5000);
  }

  render() {
    const cells = this.state.signatures.map(({ active, signature }) => (
      <GuestbookGridCell active={active} signature={signature} key={signature} />
    ));

    return (
      <GridContainer>
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