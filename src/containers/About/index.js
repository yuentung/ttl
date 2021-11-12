import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import Card from './Card';
import { forMobile, greaterThanMobile } from '../../theme/breakpoints';
import data from '../../constants/data';
import QuoteImage from '../../constants/images/quote.png';

const InnerWrapper = styled.div`
  ${greaterThanMobile} {
    max-width: 1440px;
    padding: 100px 0 160px;
    margin: 0 auto;
  }

  ${forMobile} {
    padding: 80px 0 40px;
  }
`;

const Container = styled.div`
  ${greaterThanMobile} {
    padding: 0 100px;
  }

  ${forMobile} {
    padding: 0 32px;
  }
`;

const QuoteIcon = styled.img`
  display: block;
  margin: 0 auto 12px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 500;
  color: #252525;

  ${greaterThanMobile} {
    margin-bottom: 60px;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: 4px;
  }

  ${forMobile} {
    margin-bottom: 40px;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 2.5px;
  }
`;

const Description = styled.p`
  margin: 0 auto;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 2.5px;
  font-weight: 400;
  color: #505050;

  ${greaterThanMobile} {
    max-width: 670px;
    margin-bottom: 80px;
  }

  ${forMobile} {
    margin-bottom: 40px;
    text-align: center;
  }
`;

const FeatureWrapper = styled.div`
  ${greaterThanMobile} {
    margin-bottom: 140px;
  }

  ${forMobile} {
    display: flex;
    margin-bottom: 80px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const FeatureList = styled.ul`
  display: flex;

  ${greaterThanMobile} {
    justify-content: space-between;
    padding: 0 100px;
  }

  ${forMobile} {
    flex-shrink: 0;
    padding: 0 32px;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;

  ${greaterThanMobile} {
    width: 31%;
    min-width: 200px;
    padding: 20px 0 48px;
  }

  ${forMobile} {
    flex-shrink: 0;
    width: 260px;
    padding: 20px 0 40px;

    & + & {
      margin-left: 24px;
    }
  }
`;

const FeatureIcon = styled.img`
  display: block;

  ${greaterThanMobile} {
    width: 140px;
  }

  ${forMobile} {
    width: 132px;
    margin-bottom: 12px;
  }
`;

const Divider = styled.div`
  height: 1px;
  margin-bottom: 28px;
  background-color: #D3D3D3;

  ${greaterThanMobile} {
    width: 70%;
  }

  ${forMobile} {
    width: 77%;
  }
`;

const FeatuerDescription = styled.p`
  letter-spacing: 2.5px;
  font-weight: 400;
  color: #505050;

  ${greaterThanMobile} {
    font-size: 20px;
    line-height: 40px;
  }

  ${forMobile} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const Contact = () => {
  const { banner, content: { title, description, featureList, introList } } = data.about;

  return (
    <>
      <Banner {...banner} />
      <InnerWrapper>
        <Container>
          <QuoteIcon src={QuoteImage} alt="quote icon" />
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          <Description>{description}</Description>
        </Container>
        <FeatureWrapper>
          <FeatureList>
            {featureList.map(({ image, description }) => (
              <FeatureItem key={description}>
                <FeatureIcon src={image} alt={description} />
                <Divider />
                <FeatuerDescription dangerouslySetInnerHTML={{ __html: description }} />
              </FeatureItem>
            ))}
          </FeatureList>
        </FeatureWrapper>
        <Card align="left" {...introList[0]} />
        <Card align="right" {...introList[1]} />
      </InnerWrapper>
    </>
  )
};

export default Contact;
