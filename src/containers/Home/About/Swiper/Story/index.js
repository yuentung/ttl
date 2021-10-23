import React from 'react';
import styled from 'styled-components';
import { forMobile, greaterThanMobile } from '../../../../../theme/breakpoints';

const Wrapper = styled.li``;

const RectangleWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Rectangle = styled.div`
  width: 10px;
  height: 8px;

  &:nth-child(1) {
    background-color: #79E3A2;
  }

  &:nth-child(2) {
    background-color: #2ECA6A;
  }
`;

const Time = styled.div`
  letter-spacing: 0.06em;
  font-weight: 700;
  color: #2A2A2A;
  font-style: italic;

  ${greaterThanMobile} {
    margin-bottom: 16px;
    font-size: 54px;
    line-height: 66px;
  }

  ${forMobile} {
    margin-bottom: 28px;
    font-size: 44px;
    line-height: 54px;
  }
`;

const Line = styled.div`
  margin-bottom: 32px;
  width: 1px;
  height: 27px;
  background-color: #A3A3A3;
`;

const Title = styled.h3`
  position: relative;
  z-index: 0;
  display: inline-block;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: #2A2A2A;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 3px;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: #C1F1D3;
    opacity: 48%;
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #525252;
`;

const Story = ({ time, title, description }) => (
  <Wrapper>
    <RectangleWrapper>
      <Rectangle />
      <Rectangle />
    </RectangleWrapper>
    <Time>{time}</Time>
    <Line />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

export default Story;
