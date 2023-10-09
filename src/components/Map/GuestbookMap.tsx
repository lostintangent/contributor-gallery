import Map from "./Map";
import React from "react";
import { Subheading } from "../Subheading";
import styled from "styled-components";

interface Pin {
  location: string;
  signatureCount: number;
  latitude: number;
  longitude: number;
}

interface GuestbookMapProps {
  pins: Pin[];
}

export default function GuestbookMap({ pins }: GuestbookMapProps) {
  return (
    <Container>
      <Subheading>GitHub Codespaces around the world!</Subheading>
      <Map pins={pins} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2em;
`;
