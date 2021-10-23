import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { forDesktop, forMobile, greaterThanMobile } from '../../../theme/breakpoints';
import data from '../../../constants/data';

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  ${greaterThanMobile} {
    padding: 180px 0;

    ${forDesktop} {
      padding: 120px 0;
    }
  }

  ${forMobile} {
    padding: 64px 0;
  }
`;

const Intro = () => {
  const { intro } = data.home;

  return (
    <Wrapper>
      <Card align="left" {...intro[0]} />
      <Card align="right" {...intro[1]} />
    </Wrapper>
  );
};

export default Intro;
