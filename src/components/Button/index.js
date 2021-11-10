import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isFluid }) => isFluid && 'width: 100%'};
  padding: 18px 72px;
  ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor};`}
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.8px;
  font-weight: 500;
  ${({ color }) => color && `color: ${color}`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
  cursor: pointer;

  &:hover {
    ${({ borderColor, hoverColor }) => borderColor ? `color: ${hoverColor}; border-color: ${hoverColor}; transform: scale(0.9);` : `background-color: ${hoverColor}`};
  }

  &:active {
    ${({ borderColor, activeColor }) => borderColor ? `color: ${activeColor} border-color: ${activeColor};` : `background-color: ${activeColor}`};
  }

  > span {
    margin-left: 12px;
    font-size: 19px;
    font-weight: 500;
  }
`;

const Button = ({ isFluid, handleButtonClick, children, ...props }) => {
  return (
    <Wrapper
      {...props}
      isFluid={isFluid}
      onClick={handleButtonClick}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
