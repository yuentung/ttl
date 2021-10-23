import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 10px 24px;
  border: 2px solid ${({ selected }) => selected ? '#2ECA6A' : '#DCDCDC'};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: ${({ selected }) => selected ? '#FFFFFF' : '#DCDCDC'};
  background-color: ${({ selected }) => selected ? '#2ECA6A' : '#FFFFFF'};

  &:nth-child(1) {
    border-right: none;
  }

  &:nth-child(2) {
    border-left: none;
  }
`;

const SwitchButton = ({ className, selectedIndex, leftHandleButtonClick, rightHandleButtonClick }) => {
  return (
    <Wrapper className={className}>
      <Button onClick={leftHandleButtonClick} selected={selectedIndex === 0}>TTL</Button>
      <Button onClick={rightHandleButtonClick} selected={selectedIndex === 1}>VC</Button>
    </Wrapper>
  );
};

export default SwitchButton;
