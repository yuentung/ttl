import React from 'react';
import styled from 'styled-components';
import { forMobile, greaterThanMobile } from '../../../../theme/breakpoints';

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: 2px solid ${({ selected }) => selected ? '#2ECA6A' : '#DCDCDC'};
  margin: 0;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: ${({ selected }) => selected ? '#FFFFFF' : '#DCDCDC'};
  background-color: ${({ selected }) => selected ? '#2ECA6A' : '#FFFFFF'};

  &:nth-child(1) {
    border-right: none;
    padding-right: 26px;
  }

  &:nth-child(2) {
    border-left: none;
    padding-left: 26px;
  }

  ${greaterThanMobile} {
    padding: 10px 24px;
    font-size: 16px;
    line-height: 19px;
  }

  ${forMobile} {
    padding: 6px 24px;
    font-size: 14px;
    line-height: 17px;
  }
`;

const SwitchButton = ({ className, selectedCategory, leftHandleButtonClick, rightHandleButtonClick }) => {
  return (
    <Wrapper className={className}>
      <Button onClick={leftHandleButtonClick} selected={selectedCategory === 'equipment'}>TTL</Button>
      <Button onClick={rightHandleButtonClick} selected={selectedCategory === 'vc'}>VC</Button>
    </Wrapper>
  );
};

export default SwitchButton;
