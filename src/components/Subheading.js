import styled from "styled-components";

export default styled.h2`
    margin: 0 0 2.5em 0;
    padding: 0;
    font-size: 1em;
    text-align: left;
    color: ${({ theme }) => theme.secondaryColor};
    font-weight: bold;
`;