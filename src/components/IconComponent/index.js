import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const LinkWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;

const Icon = styled.span``;

const IconImage = styled.img``;

const IconComponent = ({ name, image, href }) => (
  <>
    {href
      ? (
        <LinkWrapper href={href}>
          {image
            ? <IconImage src={image} alt={name} />
            : <Icon className="material-icons">{name}</Icon>
          }
        </LinkWrapper>
      )
      : (
        <ButtonWrapper>
          {image
            ? <IconImage src={image} alt={name} />
            : <Icon className="material-icons">{name}</Icon>
          }
        </ButtonWrapper>
      )
    }
  </>
);

export default IconComponent;
