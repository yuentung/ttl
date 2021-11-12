import React from 'react';
import styled from 'styled-components';
import { forMobile, greaterThanMobile } from '../../../theme/breakpoints';

const Wrapper = styled.div`
  position: relative;

  ${greaterThanMobile} {
    display: flex;
    
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

    &nth-child(even) {
      flex-direction: row;
    }

    & + & {
      margin-top: 100px;
    }
  }

  ${forMobile} {
    & + & {
      margin-top: 40px;
    }
  }
`;

const ImageWrapper = styled.div`
  ${greaterThanMobile} {
    position: relative;
    flex-shrink: 0;
    width: 45%;
  }

  ${forMobile} {
    width: 100%;
    height: 240px;
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const GreenRectangle = styled.div`
  ${greaterThanMobile} {
    position: absolute;
    top: -40px;
    ${({ align }) => align === 'left' ? 'left: -40px;' : 'right: -40px;'}
    width: 188px;
    height: 157px;
    background-color: #C1F1D3;
    opacity: 48%;
  }

  ${forMobile} {
    display: none;
  }
`;

const WhiteRectangle = styled.div`
  ${greaterThanMobile} {
    position: absolute;
    bottom: -60px;
    ${({ align }) => align === 'left' ? 'right: 0;' : 'left: 0;'}
    width: calc(100% - 70px);
    height: 60px;
    background-color: #FFFFFF;
  }

  ${forMobile} {
    display: none;
  }
`;

const Content = styled.div`
  ${greaterThanMobile} {
    display: flex;
    flex-direction: ${({ align }) => align === 'left' ? 'row' : 'row-reverse'};
    align-items: center;
    ${({ align }) => align === 'left' ? 'padding-left: 100px;' : 'padding-right: 100px;'}
    ${({ align }) => align === 'left' ? 'margin-right: 7%;' : 'margin-left: 7%;'}
  }

  ${forMobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 32px;
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: #2ECA6A;

  ${greaterThanMobile} {
    ${({ align }) => align === 'left' ? 'margin-right: 48px;' : 'margin-left: 48px;'}
    writing-mode: vertical-rl;
  }

  ${forMobile} {
    margin-bottom: 20px;
  }
`;

const Title = styled.h3`
  letter-spacing: 2.5px;
  font-weight: 400;
  color: #252525;

  ${greaterThanMobile} {
    margin-bottom: 40px;
    font-size: 28px;
    line-height: 34px;
  }

  ${forMobile} {
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 28px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 2.5px;
  font-weight: 400;
  color: #505050;
`;

const Card = ({ align, image, subTitle, title, description }) => (
  <Wrapper>
    <ImageWrapper>
      <Image align={align} src={image} alt={subTitle} />
      <GreenRectangle align={align} />
      <WhiteRectangle align={align} />
    </ImageWrapper>
    <Content align={align}>
      <SubTitle align={align}>{subTitle}</SubTitle>
      <div>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </Content>
  </Wrapper>
);

export default Card;
