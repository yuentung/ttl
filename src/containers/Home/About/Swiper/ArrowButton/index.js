import React, { useEffect } from 'react';
import styled from 'styled-components';

const InnerWrapper = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #DCDCDC;
  border-radius: 50%;
`;

const Icon = styled.i`
  font-weight: 700;
  color: #2ECA6A;
  transition: none;
`;

const HalfBorder = styled.div`
  position: absolute;
  top: 0;
  width: 22px;
  height: 44px;
  border: 2px solid #2ECA6A;
`;

const RightHalfBorder = styled(HalfBorder)`
  z-index: 3;
  right: 0;
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
  border-left: 0;
`;

const LeftHalfBorder = styled(HalfBorder)`
  z-index: 1;
  left: 0;
  border-top-left-radius: 22px;
  border-bottom-left-radius: 22px;
  border-right: 0;
`;

const HalfMask = styled.div`
  position: absolute;
  top: 0;
  width: 22px;
  height: 44px;
  background-color: #FFFFFF;
  transition: none;
`;

const RightHalfMask = styled(HalfMask)`
  z-index: 4;
  right: 0;
  transform-origin: center left;

  @keyframes rotateToLeft {
    0% {
      transform: rotate(0deg);
      visibility: visible;
    }
    50% {
      transform: rotate(180deg);
      visibility: visible;
    }
    51% {
      transform: rotate(180deg);
      visibility: hidden;
    }
    100% {
      transform: rotate(180deg);
      visibility: hidden;
    }
  }
`;

const LeftHalfMask = styled(HalfMask)`
  z-index: 2;
  left: 0;
  transform-origin: center right;

  @keyframes rotateToRight {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(0deg);
    }
    51% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  cursor: pointer;

  &:hover {
    ${RightHalfMask}, ${LeftHalfMask} {
      opacity: 0;
    }
  }
`;

const ArrowButton = ({ handleButtonClick, firstItem, isLastPage, children }) => {
  useEffect(() => {
    const rightHalfMask = document.querySelector('.arrowBtn:nth-child(2) .rightHalfMask');
    const leftHalfMask = document.querySelector('.arrowBtn:nth-child(2) .leftHalfMask');

    if (!isLastPage) {
      var timeoutID = setTimeout(() => {
        rightHalfMask.style.animation = 'rotateToLeft 4.5s linear';
        leftHalfMask.style.animation = 'rotateToRight 4.5s linear';
      }, 500);
    }

    return () => {
      clearTimeout(timeoutID);
      rightHalfMask.style.animation = '';
      leftHalfMask.style.animation = '';
    }
  }, [isLastPage, firstItem]);

  return (
    <Wrapper className="arrowBtn" onClick={handleButtonClick}>
      <InnerWrapper>
        <Icon className={`far fa-${children}`}></Icon>
      </InnerWrapper>
      <RightHalfBorder />
      <LeftHalfBorder />
      <RightHalfMask className="rightHalfMask" />
      <LeftHalfMask className="leftHalfMask" />
    </Wrapper>
  );
};

export default ArrowButton;
