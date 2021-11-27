import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isFluid }) => isFluid ? '100%' : '180px'};
  height: 60px;
  // padding: 18px 72px;
  ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor}; border-radius: 1px;`}
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

const Loading = styled.div`
  width: 30px;
  height: 30px;
  border: 4px solid #C1E9C8;
  border-top-color: #2ECA6A;
  border-radius: 50%;
  animation: rotate .5s infinite linear;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = ({ isFluid, handleButtonClick, loading, children, ...props }) => {
  return (
    <Wrapper
      {...props}
      isFluid={isFluid}
      onClick={handleButtonClick}
    >
      {loading ? <Loading /> : children}
    </Wrapper>
  );
};

export default Button;
