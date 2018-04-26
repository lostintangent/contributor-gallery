import React, { Component } from "react";
import GuestbookGridCell from "./GuestbookGridCell";
import styled from "styled-components";
import GridArrow from "./GridArrow";

export default class GuestbookGrid extends Component {
    render() {
        const cells = this.props.signatures.map(({ key, signature = null }) =>
            <GuestbookGridCell signature={signature} key={key} />);

        return <GridContainer>
            <Grid>{cells}</Grid>
            <GridArrow />
        </GridContainer>;
    }
}

const Grid = styled.div`
    border-left: ${( { theme: { borderStyle } }) => borderStyle };
    border-top: ${( { theme: { borderStyle } }) => borderStyle };
    display: flex;
    flex-wrap: wrap;
    width: 901px;

    &::before {
        position: absolute;
        background: no-repeat center/50% url(https://ms-vsliveshare.gallerycdn.vsassets.io/extensions/ms-vsliveshare/vsliveshare/0.2.399/1524081584622/Microsoft.VisualStudio.Services.Icons.Default);
        content: "";
        opacity: 0.3;
        width: 100%; 
        height: 100%; 
    }
`;

const GridContainer = styled.div`position: relative`;