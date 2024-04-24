import Emoji from "./Emoji";
import React from "react";

import iconUrl from "./icon.svg";
import { Subheading } from "./Subheading";
import styled from "styled-components";
import { ThemeProps } from "./theme";
import RepoPicker from "./RepoPicker";

export default function Header(): JSX.Element {
  return (
    <Container>
      <div>
        <Heading>
          <img src={iconUrl} style={{ width: 25 }} /> Contributor Gallery
        </Heading>
        <Subheading>
          Celebrating the awesomeness of the open source community! <Emoji type="rocket" />
        </Subheading>
        <RepoPicker />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h1<ThemeProps>`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 2em;
  margin-bottom: 0.2em;
  text-align: left;
`;
