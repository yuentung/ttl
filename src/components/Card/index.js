import React from 'react';
import styled from 'styled-components';
import { greaterThanMobile } from '../../theme/breakpoints';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  filter: drop-shadow(16px 16px 24px rgba(203, 201, 201, 0.25));
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 237px;
  object-fit: cover;
  object-position: center;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-top: 4px solid #2ECA6A;
  background-color: #FFFFFF;
`;

const Title = styled.h3`
  margin-bottom: 12px;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000000;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #525252;

  ${greaterThanMobile} {
    margin-bottom: 20px;
  }
`;

const Icon = styled.span`
  margin-top: auto;
  margin-left: auto;
  font-size: 20px;
  font-weight: 700;
  color: #2ECA6A;
  cursor: pointer;
`;

const Card = ({ image, title, description }) => {

  return (
    <Wrapper>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Icon className="material-icons">arrow_forward</Icon>
      </Content>
    </Wrapper>
  );
};

export default Card;
