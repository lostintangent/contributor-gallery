import React from 'react';
import styled from 'styled-components';
import AvatarImage from './AvatarImage';
import LoginText from './LoginText';

const Cell = ({ avatarUrl, login, active }) => {
  return (
    <CellWrapper>
      <AvatarImage src={avatarUrl} />
      {active && <LoginText>{login}</LoginText>}
    </CellWrapper>
  );
};

const CellWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

export default Cell;
