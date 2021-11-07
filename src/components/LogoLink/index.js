import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../constants/data';

export const Wrapper = styled(Link)`
  display: block;
  width: ${({ width }) => `${width}px`};
  height: ${({ width }) => `${Math.ceil(width / 4.7)}px`};
  background-image: ${({ color }) => color === 'dark' ? `url(${data.home.navbar.darkLogo})` : `url(${data.home.navbar.logo})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const LogoLink = ({ width, color }) => {
  return (
    <Wrapper
      to={process.env.PUBLIC_URL}
      width={width}
      color={color}
    />
  );
};

export default LogoLink;
