import React from 'react';
import styled from 'styled-components';
import { forMobile, greaterThanMobile } from '../../theme/breakpoints';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 640px;
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
`;

const Title = styled.h1`
  margin-top: auto;
  margin-bottom: 4px;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: #FFFFFF;

  ${greaterThanMobile} {
    font-size: 64px;
    line-height: 75px;
  }

  ${forMobile} {
    font-size: 40px;
    line-height: 48px;
  }
`;

const SubTitle = styled.p`
  margin-bottom: 100px;
  letter-spacing: 4px;
  font-weight: 400;
  color: #FFFFFF;

  ${greaterThanMobile} {
    font-size: 36px;
    line-height: 54px;
  }

  ${forMobile} {
    font-size: 24px;
    line-height: 36px;
  }
`;

const Banner = ({ image, title, subTitle }) => {
  return (
    <Wrapper>
      <Image src={image} />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  );
};

export default Banner;
