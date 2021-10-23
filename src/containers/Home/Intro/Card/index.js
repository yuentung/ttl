import React from 'react';
import styled from 'styled-components';
import { forDesktop, forMobile, greaterThanMobile } from '../../../../theme/breakpoints';

const Wrapper = styled.div`
  position: relative;

  & + & {
    ${greaterThanMobile} {
      margin-top: 240px;

      ${forDesktop} {
        margin-top: 120px;
      }
    }

    ${forMobile} {
      margin-top: 64px;
    }
  }
`;

const Image = styled.img`
  display: block;

  ${greaterThanMobile} {
    position: absolute;
    top: -80px;
    ${({ align }) => align === 'left' ? 'right: 100px;' : 'left: 100px;'}
    width: 48%;

    ${forDesktop} {
      top: -24px;
      ${({ align }) => align === 'left' ? 'right: 60px;' : 'left: 60px;'}
    }
  }

  ${forMobile} {
    width: 100%;
  }
`;

const Rectangle = styled.div`
  ${greaterThanMobile} {
    position: absolute;
    top: 0;
    ${({ align }) => align === 'left' ? 'right: 0;' : 'left: 0;'}
    bottom: -60px;
    z-index: -1;
    width: 60%;
    background-color: #C1F1D3;

    ${forDesktop} {
      bottom: -48px;
    }
  }

  ${forMobile} {
    display: none;
  }
`;

const Content = styled.div`
  background-color: #FFFFFF;

  ${greaterThanMobile} {
    width: 55%;
    padding: ${({ align }) => align === 'left' ? '80px 227px 100px 100px' : '80px 100px 100px 227px'};
    margin-left: ${({ align }) => align === 'left' ? '0' : 'auto'};

    ${forDesktop} {
      padding: ${({ align }) => align === 'left' ? '48px 140px 60px 60px' : '48px 60px 60px 140px'};
    }
  }

  ${forMobile} {
    width: 100%;
    padding: 40px 32px;
  }
`;

const SubTitle = styled.div`
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #2ECA6A;

  ${greaterThanMobile} {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 19px;
  }

  ${forMobile} {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 17px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  ${greaterThanMobile} {
    margin-bottom: 36px;

    ${forDesktop} {
      margin-bottom: 28px;
    }
  }
  
  ${forMobile} {
    margin-bottom: 28px;
  }
`;

const LineWrapper = styled.div`
  ${greaterThanMobile} {
    margin-right: 20px;
  }

  ${forMobile} {
    margin-right: 16px;
  }
`;

const Line = styled.div`
  width: 8px;

  &:nth-child(1) {
    background-color: #2ECA6A;
  }

  &:nth-child(2) {
    background-color: #79E3A2;
  }
  
  ${greaterThanMobile} {
    height: 50px;

    ${forDesktop} {
      height: 40px;
    }
  }

  ${forMobile} {
    height: 24px;
  }
`;

const Title = styled.h2`
  color: #2A2A2A;

  ${greaterThanMobile} {
    font-size: 36px;
    line-height: 54px;
    letter-spacing: 4px;
    font-weight: 700;

    ${forDesktop} {
      font-size: 28px;
      line-height: 46px;
      letter-spacing: 2.5px;
    }
  }

  ${forMobile} {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 2.5px;
    font-weight: 500;
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 32px;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #525252;
`;

const Card = ({ align, image, subTitle, title, description }) => (
  <Wrapper>
    <Image align={align} src={image} alt={subTitle} />
    <Content align={align}>
      <SubTitle>{subTitle}</SubTitle>
      <TitleWrapper>
        <LineWrapper>
          <Line />
          <Line />
        </LineWrapper>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
      </TitleWrapper>
      <Description>{description}</Description>
    </Content>
    <Rectangle align={align} />
  </Wrapper>
);

export default Card;
