import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { greaterThanMobile, forMobile } from '../../../theme/breakpoints';

const Wrapper = styled.div`
  cursor: pointer;

  ${greaterThanMobile} {
    width: calc(100% / 3 - 40px);
  }

  ${forMobile} {
    width: calc(100% / 3 - 16px);
    min-width: 260px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 66%;

  ${greaterThanMobile} {
    margin-bottom: 20px;
  }

  ${forMobile} {
    margin-bottom: 16px;
  }
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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 12%;
  color: #252525;
`;

const Icon = styled.i`
  font-size: 16px;
  font-weight: 700;
  color: #2ECA6A;
`;

const Card = ({ image, title, id }) => {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.push(`/case/${id}`)}>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon className="far fa-arrow-right"></Icon>
      </TitleWrapper>
    </Wrapper>
  );
};

export default Card;
