import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SwitchButton from './SwitchButton';
import Scroll from './Scroll';
import Button from '../../../components/Button';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { forMobile, greaterThanMobile } from '../../../theme/breakpoints';
import data from '../../../constants/data';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: ${({ fullHeight }) => `${fullHeight}px`};
  min-height: 700px;
  overflow: hidden;

  ${greaterThanMobile} {
    padding: 100px 80px;
  }

  ${forMobile} {
    padding: 48px 32px;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  
  @keyframes scale {
    0% { transform: scale(1); }
    40% { transform: scale(1.2); }
    100% { transform: scale(1.2); }
  }
`;

const PositionedSwitchButton = styled(SwitchButton)`
  position: absolute;
  top: 32%;

  ${greaterThanMobile} {
    right: 80px;
  }
  
  ${forMobile} {
    right: 32px;
  }
`;

const PositionedScroll = styled(Scroll)`
  position: absolute;

  ${greaterThanMobile} {
    right: 80px;
    bottom: 100px;
  }

  ${forMobile} {
    right: 32px;
    bottom: 48px;
  }
`;

const Title = styled.h1`
    margin-top: auto;
    letter-spacing: 0.12em;
    font-weight: 700;
    color: #FFFFFF;

    ${greaterThanMobile} {
      margin-bottom: 32px;
      font-size: 72px;
      line-height: 84px;
    }

    ${forMobile} {
      margin-bottom: 20px;
      font-size: 32px;
      line-height: 36px;
    }
`;

const SubTitle = styled.p`
    letter-spacing: 0.16em;
    font-weight: 500;
    color: #FFFFFF;

    ${greaterThanMobile} {
      margin-bottom: 52px;
      font-size: 24px;
      line-height: 28px;
    }

    ${forMobile} {
      margin-bottom: 40px;
      font-size: 13px;
      line-height: 16px;
    }
`;

const Swiper = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { image, title, subTitle } = data.home.swiper[selectedIndex];
  const { height } = useWindowDimensions();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (selectedIndex === 1) setSelectedIndex(0);
      else setSelectedIndex(1);
    }, 5000);

    setTimeout(() => {
      document.querySelector('.bannerImage').style.animation = 'scale 5s'
    }, 50);

    return () => {
      clearTimeout(timeoutID);
      document.querySelector('.bannerImage').style.animation = '';
    }
  }, [selectedIndex]);

  return (
    <Wrapper fullHeight={height}>
      <Image className="bannerImage" src={image} alt={subTitle} />
      <PositionedSwitchButton
        isTop={selectedIndex === 0}
        switchToTop={() => setSelectedIndex(0)}
        switchToBottom={() => setSelectedIndex(1)}
      />
      <PositionedScroll />
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <SubTitle>{subTitle}</SubTitle>
      <Button
        color="#FFFFFF"
        backgroundColor="#2ECA6A"
      >
        聯絡我們
        <span className="material-icons">east</span>
      </Button>
    </Wrapper>
  );
};

export default Swiper;
