import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #DCDCDC;
  border-radius: 50%;
  transition: none;

  &:hover {
    border: 2px solid #2ECA6A;

    > i {
      color: #2ECA6A;
    }
  }
`;

const Icon = styled.i`
  line-height: 40px;
  color: #C4C4C4;
  transition: none;
`;

const ArrowButton = ({ handleButtonClick, children }) => (
  <Wrapper onClick={handleButtonClick}>
    <Icon className={`far fa-${children}`}></Icon>
  </Wrapper>
);

export default ArrowButton;