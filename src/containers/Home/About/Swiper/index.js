import React from 'react';
import styled from 'styled-components';
import Story from './Story';
import ArrowButton from './ArrowButton';
import usePagination from '../../../../hooks/usePagination';
import { forDesktop, forMobile, greaterThanMobile } from '../../../../theme/breakpoints';
import data from '../../../../constants/data';

const Wrapper = styled.div`
  position: relative;
  border-top: 4px solid #2ECA6A;
  background-color: #FFFFFF;

  ${greaterThanMobile} {
    max-width: 1240px;
    padding: 124px 32px 200px 84px;
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
`;

const StoryList = styled.ul`
  display: flex;

  > li {
    width: ${({ amount }) => `calc(100% / ${amount})`};
  }

  ${greaterThanMobile} {
    width: ${({ amount }) => `calc(${amount} * 33.33%)`};
    margin-left: ${({ firstItem }) => `calc(${firstItem} * -33.33%)`};

    > li {
      margin-right: 80px;
    }

    ${forDesktop} {
      width: ${({ amount }) => `calc(${amount} * 50%)`};
      margin-left: ${({ firstItem }) => `calc(${firstItem} * -50%)`};
    }
  }

  ${forMobile} {
    width: ${({ amount }) => `calc(${amount} * 100%)`};
    margin-left: ${({ firstItem }) => `calc(${firstItem} * -100%)`};
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
  const { textImage, storyList } = data.home.about;
  const [firstItem, setPage] = usePagination(storyList.length);

  return (
    <Wrapper className={className}>
      <StoryWrapper>
        <StoryList amount={storyList.length} firstItem={firstItem}>
          {storyList.map(storyItem => (
            <Story key={storyItem.time} {...storyItem} />
          ))}
        </StoryList>
      </StoryWrapper>
      <ButtonGroup>
        <ArrowButton handleButtonClick={() => setPage(-1)}>chevron-left</ArrowButton>
        <ArrowButton handleButtonClick={() => setPage(1)}>chevron-right</ArrowButton>
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
