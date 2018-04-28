import GridArrow from "./GridArrow";
import GuestbookGridCell from "./GuestbookGridCell";
import React, { Component } from "react";
import styled from "styled-components";
  
import logoImageUrl from "./logo.svg";
 
export default class GuestbookGrid extends Component {
    render() {
        var cells = this.props.signatures.map(({ signature }) =>
            <GuestbookGridCell signature={signature} key={signature} />);

        return <GridContainer>
            <Grid>{cells}</Grid>
            <GridArrow />
        </GridContainer>;
    }
}

const Grid = styled.div`
    border-left: ${({ theme: { borderStyle }}) => borderStyle };
    border-top: ${({ theme: { borderStyle }}) => borderStyle };
    display: flex;
    flex-wrap: wrap;
    width: 901px;

    &::before {
        position: absolute;
        background: no-repeat center/50% url(${logoImageUrl});
        content: "";
        opacity: 0.3;
        width: 100%; 
        height: 100%; 
    }
`;

const GridContainer = styled.div`position: relative`;