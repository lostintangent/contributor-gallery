import Emoji from "../Emoji";
import React from "react";
import styled from "styled-components";

export default function GridArrow() {
  return (
    <ArrowContainer>
      <ArrowLabel>
        Your Picture Should be here <Emoji type="camera" />
      </ArrowLabel>
    </ArrowContainer>
  );
}

const ArrowContainer = styled.div`
  position: absolute;
  right: -6%;
  top: 30%;
`;

/*
import arrowImageUrl from "./arrow.png";
const ArrowImage = styled.img`
  //  height: 150px;
    opacity: 0.7;
    margin-right: 0.8em;
    width: 150px;
`;*/
const ArrowLabel = styled.span`
  color: ${({ theme: { primaryColor } }) => primaryColor};
  font-size: 1.5em;
  font-weight: bold;
  writing-mode: vertical-lr;
`;
