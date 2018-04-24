import Emoji from "./Emoji";
import React from "react";
import Subheading from "./Subheading";
import TwitterButton from "./TwitterButton";

import styled from "styled-components";

export default () => {
    return <Container>
    <div>
            <Heading>Visual Studio Live Share Guestbook</Heading>
            <Subheading>Be a part of collaborative development history at //Build 2018! <Emoji type="rocket" /></Subheading>
</div>
        <TwitterButton hashTag="vsliveshare" />
    </Container>;
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Heading = styled.h1`
    color: ${({ theme }) => theme.primaryColor};
    font-size: 2em;
    margin: 0 0 0.2em 0;
    padding: 0;
    text-align: left;
`;