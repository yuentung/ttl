import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowButton from '../ArrowButton';
import { greaterThanMobile, forMobile } from '../../../theme/breakpoints';

const Wrapper = styled.div``;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 66%;
`;

const Image = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
  object-position: center;
`;

const MainImageWrapper = styled(ImageWrapper)`
  position: relative;

  ${greaterThanMobile} {
    margin-bottom: 32px;
  }

  ${forMobile} {
    margin-bottom: 12px;
  }
`;

const ButtonGroup = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${greaterThanMobile} {
    padding: 0 40px;
  }

  ${forMobile} {
    padding: 0 16px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-wrap;

  ${greaterThanMobile} {
    gap: 20px;
  }

  ${forMobile} {
    gap: 12px;
  }
`;

const SubImageWrapper = styled(ImageWrapper)`
  width: calc(100% / 6);
  padding-bottom: calc(66% / 6);
  opacity: ${({ selected }) => selected ? '1' : '0.5'};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  ${greaterThanMobile} {
    max-width: 170px;
    max-height: 113px;
  }

  ${forMobile} {
    max-width: calc((100% - 48px) / 5);
  }
`;

const ImageSwiper = ({ imageList }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleButtonClick = () => setSelectedIndex(prevIndex => {
    if (prevIndex < 5) return prevIndex + 1;
    else return 0;
  });

  useEffect(() => {
    const timeoutID = setTimeout(handleButtonClick, 5000)

    return () => clearTimeout(timeoutID);
  }, [selectedIndex]);

  return (
    <Wrapper>
      <MainImageWrapper>
        <ButtonGroup>
          <ArrowButton handleButtonClick={handleButtonClick}>chevron-left</ArrowButton>
          <ArrowButton handleButtonClick={handleButtonClick}>chevron-right</ArrowButton>
        </ButtonGroup>
        <Image src={imageList[selectedIndex]} />
      </MainImageWrapper>
      <InnerWrapper>
        {imageList.map((image, index) => {
          return (
            <SubImageWrapper
              key={index}
              selected={index === selectedIndex}
              onClick={() => setSelectedIndex(index)}
            >
              <Image src={image} alt={`case-${index}`} />
            </SubImageWrapper>
          )
        })}
      </InnerWrapper>
    </Wrapper>
  );
};

export default ImageSwiper;
