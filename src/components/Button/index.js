import React from 'react';
import styled from 'styled-components';
import { forMobile, greaterThanMobile } from '../../theme/breakpoints';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isFluid }) => isFluid && 'width: 100%'};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.12em;
  font-weight: 700;
  ${({ border }) => border && `border: ${border}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
  cursor: pointer;

  > span {
    margin-left: 12px;
    font-size: 19px;
    font-weight: 500;
  }

  ${greaterThanMobile} {
    padding: 20px 32px;
  }

  ${forMobile} {
    padding: 12px 24px;
  }
`;

const Button = ({ className, border, color, backgroundColor, isFluid, handleButtonClick, children }) => {
  return (
    <Wrapper
      className={className}
      border={border}
      color={color}
      backgroundColor={backgroundColor}
      isFluid={isFluid}
      onClick={handleButtonClick}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
