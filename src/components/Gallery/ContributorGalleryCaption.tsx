import Emoji from "../Emoji";
import React from "react";
import styled from "styled-components";
import { ThemeProps } from "../theme";

export default function ContributorGalleryCaption(): JSX.Element {
  return (
    <CaptionContainer>
      <CaptionLabel>
        Thanks to these amazing developers <Emoji type="foldedHands" />
      </CaptionLabel>
    </CaptionContainer>
  );
}

const CaptionContainer = styled.div`
  position: absolute;
  right: -6%;
  top: 12%;
`;

const CaptionLabel = styled.span<ThemeProps>`
  color: ${({ theme: { primaryColor } }) => primaryColor};
  font-size: 1.5em;
  font-weight: bold;
  writing-mode: vertical-lr;
`;
