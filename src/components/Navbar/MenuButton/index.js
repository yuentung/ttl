import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;

const InnerWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const Line = styled.div`
  position: absolute;
  right: 0;
  height: 2px;
  background-color: #FFFFFF;
  transition: top .2s ${({ isOpen }) => isOpen ? '0s' : '.3s'},
              transform .2s ${({ isOpen }) => isOpen ? '.3s' : '0s'},
              opacity .1s .2s;

  &:nth-child(1) {
    top: ${({ isOpen }) => isOpen ? '14px' : '3px'};
    transform: rotate(${({ isOpen }) => isOpen ? '45deg' : '0'});
    width: 30px;
  }

  &:nth-child(2) {
    top: 14px;
    transform: rotate(${({ isOpen }) => isOpen ? '-45deg' : '0'});
    width: 30px;
  }

  &:nth-child(3) {
    top: ${({ isOpen }) => isOpen ? '14px' : '25px'};
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    width: 18px;
  }
`;

const MenuButton = ({ isOpen, handleButtonClick }) => {
  return (
    <Wrapper onClick={handleButtonClick}>
      <InnerWrapper isOpen={isOpen}>
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
        <Line isOpen={isOpen} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default MenuButton;
