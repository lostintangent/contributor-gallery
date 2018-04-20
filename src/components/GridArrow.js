import Emoji from "./Emoji";
import React from "react";
import styled from "styled-components";

import arrowImageUrl from "./arrow.png";

export default () => {
    return <ArrowContainer>
        <ArrowImage src={arrowImageUrl} />
        <ArrowLabel>Your Picture Here <Emoji type="camera" /></ArrowLabel>
    </ArrowContainer>;
};

const ArrowContainer = styled.div`
    display: flex;    
    position: absolute;
    right: -8%;
    top: 40%;
`;

const ArrowImage = styled.img`
    height: 150px;
    opacity: 0.7;
    margin-right: 0.8em;
    width: 150px;
`;

const ArrowLabel = styled.span`
    color: plum;
    font-size: 1.2em;
    font-weight: bold;
    writing-mode: vertical-lr;
`;