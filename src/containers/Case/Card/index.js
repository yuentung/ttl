import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { greaterThanMobile, forMobile } from '../../../theme/breakpoints';

const Wrapper = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;

  ${greaterThanMobile} {
    margin-bottom: 16px
  }

  ${forMobile} {
    margin-bottom: 20px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.div`
  letter-spacing: 12%;
  color: #252525;

  ${greaterThanMobile} {
    font-size: 22px;
    line-height: 32px;
  }

  ${forMobile} {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Icon = styled.i`
  font-size: 16px;
  font-weight: 700;
  color: #2ECA6A;
`;

const Description = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.2px;
  color: #7C7C7C;
  overflow: hidden;

  ${greaterThanMobile} {
    -webkit-line-clamp: 3;
  }

  ${forMobile} {
    -webkit-line-clamp: 2;
  }
`;

const Card = ({ image, title, description, id }) => {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.push(`/case/${id}`)}>
      <Image src={image} alt={title} />
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon className="far fa-arrow-right"></Icon>
      </TitleWrapper>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Card;
