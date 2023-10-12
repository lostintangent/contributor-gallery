import Emoji from "./Emoji";
import React from "react";

import iconUrl from "./icon.svg";
import { Subheading } from "./Subheading";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div>
        <Heading>
          <img src={iconUrl} style={{ width: 25 }} /> GitHub Copilot Guestbook
        </Heading>
        <Subheading>
          Be a part of AI-powered development history <Emoji type="rocket" />
        </Subheading>
      </div>
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
