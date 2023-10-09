import Emoji from "./Emoji";
import React from "react";

// To check: go to definition on Subheading to find the font-size
import { Subheading } from "./Subheading";

import TwitterButton from "./TwitterButton";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div>
        <Heading>GitHub Codespaces Guestbook</Heading>
        <Subheading>
          Be a part of cloud-based development history <Emoji type="rocket" />
        </Subheading>
      </div>
      <TwitterButton hashTag="codespaces" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 2em;
  margin-bottom: 0.2em;
  text-align: left;
`;
