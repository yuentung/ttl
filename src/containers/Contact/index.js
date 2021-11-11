import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import Form from './Form';
import { forMobile, greaterThanMobile } from '../../theme/breakpoints';
import data from '../../constants/data';

const InnerWrapper = styled.div`
  ${greaterThanMobile} {
    max-width: 1440px;
    padding: 120px 100px 160px;
    margin: 0 auto;
  }

  ${forMobile} {
    padding: 80px 32px;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 2.5px;
  font-weight: 400;
  color: #505050;

  ${greaterThanMobile} {
    width: 360px;
    margin: 0 auto 100px;
  }

  ${forMobile} {
    margin-bottom: 80px;
  }
`;

const Contact = () => {
  const { banner, title, subTitle, description } = data.contact;

  return (
    <>
      <Banner
        image={banner}
        title={title}
        subTitle={subTitle}
      />
      <InnerWrapper>
        <Description>{description}</Description>
        <Form />
      </InnerWrapper>
    </>
  )
};

export default Contact;
