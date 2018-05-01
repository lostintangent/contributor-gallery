import Map from "./Map";
import React from "react";
import Subheading from "../Subheading";
import styled from "styled-components";

export default function GuestbookMap({ pins }) {
    return (
        <Container>
            <Subheading>Visual Studio Live Share around the world!</Subheading>
            <Map pins={pins} />
        </Container>
    );
}

const Container = styled.div`
    margin-top: 2em;
`;