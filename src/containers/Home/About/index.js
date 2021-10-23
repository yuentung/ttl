import React from 'react';
import styled from 'styled-components';
import Swiper from './Swiper';
import { forMobile, greaterThanMobile } from '../../../theme/breakpoints';
import data from '../../../constants/data';

const Wrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  z-index: -1;
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;

  ${greaterThanMobile} {
    height: 542px;
  }

  ${forMobile} {
    height: 394px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${greaterThanMobile} {
    padding: 100px 0 92px;
  }

  ${forMobile} {
    padding: 52px 0 80px;
  }
`;

const SubTitle = styled.div`
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #2ECA6A;

  ${greaterThanMobile} {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 19px;
  }

  ${forMobile} {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 17px;
  }
`;

const LineWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Line = styled.div`
  width: 21px;
  height: 8px;

  &:nth-child(1) {
    background-color: #79E3A2;
  }

  &:nth-child(2) {
    background-color: #2ECA6A;
  }
`;

const Title = styled.h2`
  letter-spacing: 0.12em;
  font-weight: 700;
  color: #FFFFFF;

  ${greaterThanMobile} {
    font-size: 36px;
    line-height: 42px;
  }

  ${forMobile} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const About = () => {
  const { image, subTitle, title } = data.home.about;

  return (
    <Wrapper>
      <Image src={image} alt={subTitle} />
      <TitleWrapper>
        <SubTitle>{subTitle}</SubTitle>
        <LineWrapper>
          <Line />
          <Line />
        </LineWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <Swiper />
    </Wrapper>
  );
};

export default About;
