import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Story from './Story';
import ArrowButton from './ArrowButton';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { forMobile, greaterThanMobile } from '../../../../theme/breakpoints';
import data from '../../../../constants/data';

const Wrapper = styled.div`
  position: relative;
  border-top: 4px solid #2ECA6A;
  background-color: #FFFFFF;

  ${greaterThanMobile} {
    max-width: 1240px;
    padding: 124px 112px 200px 84px;
    margin: 0 100px;

    @media (min-width: 1440px) {
      margin: 0 auto;
    }
  }

  ${forMobile} {
    padding: 100px 44px 140px 32px;
    margin: 0 32px;
  }
`;

const StoryWrapper = styled.div`
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  ${greaterThanMobile} {  
    --item-width: calc(30%);
    --gap-width: calc(5%);

    @media (max-width: 1200px) {
      --item-width: calc(45%);
      --gap-width: calc(10%);
    }
  }
`;

const StoryList = styled.ul`
  display: flex;
  
  ${greaterThanMobile} {
    width: ${({ amount }) => `calc(${amount} * 30% + ${amount - 1} * 5%)`};

    > li {
      width: var(--item-width);
    }
  
    > li + li {
      margin-left: var(--gap-width);
    }

    @media (max-width: 1200px) {
      width: ${({ amount }) => `calc(${amount} * 45% + ${amount - 1} * 10%)`};
    }
  }

  ${forMobile} {
    > li {
      flex-shrink: 0;
      width: 100%;
    }
  }
`;

const ButtonGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100px;

  ${greaterThanMobile} {
    right: 60px;
    bottom: 100px;
  }

  ${forMobile} {
    right: 22px;
    bottom: 68px;
  }
`;

const Timeline = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  height: 1px;
  background-color: #DCDCDC;

  ${greaterThanMobile} {
    top: 238px;
  }

  ${forMobile} {
    top: 216px;
  }
`;

const SquareWrapper = styled.div`
  position: absolute;
  display: flex;

  ${greaterThanMobile} {
    top: -30px;
    left: -30px;
  }

  ${forMobile} {
    top: -22px;
    left: -30px;
  }
`;

const Square = styled.div`
  &:nth-child(1) {
    background-color: #79E3A2;
  }

  &:nth-child(2) {
    background-color: #2ECA6A;
  }

  ${greaterThanMobile} {
    width: 58px;
    height: 58px;
  }

  ${forMobile} {
    width: 42px;
    height: 42px;
  }
`;

const LastSquare = styled.div`
  position: absolute;
  display: block;
  width: 58px;
  height: 58px;
  background-color: #2ECA6A;

  ${greaterThanMobile} {
    right: -30px;
    bottom: -12px;
  }

  ${forMobile} {
    right: -32px;
    bottom: -32px;
    z-index: -1;
  }
`;

const TextImage = styled.img`
  position: absolute;
  left: 0;
  display: block;

  ${greaterThanMobile} {
    bottom: -2px;
    width: 65%;
  }

  ${forMobile} {
    bottom: 0px;
    width: 100%;
  }
`;

const Swiper = ({ className }) => {
  const { width } = useWindowDimensions();
  const [selectedIndex, setSelectedIndex] = useState(() => {
    if (width > 1200) return 2;
    else if (width > 768) return 1;
    else return 0;
  });
  const { textImage, storyList } = data.home.about;

  const setSpecificIndex = dir => {
    let amount = dir === 'minus' ? -1 : 1;

    if (width > 1200) amount *= 3;
    else if (width > 768) amount *= 2;
    else amount *= 1;

    const targetIndex = selectedIndex + amount;

    if (targetIndex < 0 || targetIndex > storyList.length - 1) return;
    else setSelectedIndex(targetIndex);
  };

  const scrollToTarget = useCallback(targetIndex => {
    const target = document.querySelector(`.storyList > li:nth-child(${targetIndex + 1})`);
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }, []);

  useEffect(() => {
    scrollToTarget(selectedIndex);
  }, [scrollToTarget, selectedIndex]);

  return (
    <Wrapper className={className}>
      <StoryWrapper>
        <StoryList className="storyList" amount={storyList.length}>
          {storyList.map(storyItem => (
            <Story key={storyItem.time} {...storyItem} />
          ))}
        </StoryList>
      </StoryWrapper>
      <ButtonGroup>
        <ArrowButton handleButtonClick={() => setSpecificIndex('minus')}>chevron_left</ArrowButton>
        <ArrowButton handleButtonClick={() => setSpecificIndex('plus')}>chevron_right</ArrowButton>
      </ButtonGroup>
      <Timeline />
      <SquareWrapper>
        <Square />
        <Square />
      </SquareWrapper>
      <TextImage src={textImage} alt="TAY TZYY LONG" />
      <LastSquare />
    </Wrapper>
  );
};

export default Swiper;
