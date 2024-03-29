import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useMedia from 'use-media';
import styled from 'styled-components';
import LogoLink, { Wrapper as LogoLinkImage } from '../LogoLink';
import MenuButton from './MenuButton';
import NavList from './NavList';
import { forDesktop, greaterThanDesktop } from '../../theme/breakpoints';
import data from '../../constants/data';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
`;

const LogoLinkWrapper = styled.div`
  ${greaterThanDesktop} {
    padding: 24px 80px;
    background-color: rgba(256, 256, 256, ${({ isTop }) => isTop ? '0' : '0.95'});
  }

  ${forDesktop} {
    display: inline-block;
    vertical-align: top;
    padding: ${({ isOpen }) => isOpen ? '32px 40px' : '24px 32px'};
    background-color: rgba(256, 256, 256, ${({ isTop, isOpen }) => (!isTop || isOpen) ? '0.95' : '0'});
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  background-color: rgba(28, 160, 79, ${({ isTop }) => isTop ? '0' : '0.7'});

  ${greaterThanDesktop} {
    justify-content: space-between;
    backdrop-filter: blur(${({ isTop }) => isTop ? '0' : '54.3656px'});

    &:hover {
      background-color: rgba(28, 160, 79, 0.7);
      backdrop-filter: blur(54.3656px);

      ${LogoLinkWrapper} {
        background-color: rgba(256, 256, 256, 0.95);
      }

      ${LogoLinkImage} {
        background-image: ${`url(${data.home.navbar.darkLogo})`};
      }
    }
  }

  ${forDesktop} {
    position: absolute;
    top: ${({ isOpen, fullHeight }) => isOpen ? '0' : `calc(80px - ${fullHeight}px)`};
    right: 0;
    left: 0;
    flex-direction: column-reverse;
    height: ${({ fullHeight }) => `${fullHeight}px`};
    ${({ isOpen }) => isOpen && 'background-color: rgba(46, 202, 106, 0.7);'}
    backdrop-filter: blur(${({ isTop, isOpen }) => (!isTop || isOpen) ? '54.3656px' : '0'});
  }
`;

const Mask = styled.div`
  ${greaterThanDesktop} {
    display: none;
  }

  ${forDesktop} {
    position: absolute;
    top: 73%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(39, 185, 95, 0) 0%, rgba(39, 185, 95, 1) 65.04%);
  }
`;

const Header = styled.div`
  ${forDesktop} {
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const MenuButtonWrapper = styled.div`
  ${greaterThanDesktop} {
    display: none;
  }

  ${forDesktop} {
    position: absolute;
    z-index: 3;
    top: 24px;
    right: 32px;
  }
`;

const MediaLinkWrapper = styled.div`
  ${greaterThanDesktop} {
    display: none;
  }

  ${forDesktop} {
    display: flex;
    justify-content: space-between;
    width: 72px;
    margin-right: 32px;
  }
`;

const MediaIcon = styled.i`
  font-size: 22px;
  color: #FFFFFF;
`;

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const isDesktop = useMedia({ minWidth: '1201px' });
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset === 0) setIsTop(true);
      else setIsTop(false);
    });

    return () => window.removeEventListener('scroll', () => { });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    });

    return () => window.removeEventListener('resize', () => { });
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [isDesktop]);

  return (
    <Wrapper isOpen={isOpen}>
      <MenuButtonWrapper>
        <MenuButton
          isOpen={isOpen}
          handleButtonClick={() => setIsOpen(prevState => !prevState)}
        />
      </MenuButtonWrapper>
      <InnerWrapper isTop={isHomePage && isTop} isOpen={isOpen} fullHeight={height}>
        {isOpen && <Mask />}
        <Header>
          <LogoLinkWrapper isTop={isHomePage && isTop} isOpen={isOpen}>
            <LogoLink
              width={isDesktop ? 150 : (isOpen ? 128 : 160)}
              color={(!isHomePage || !isTop || isOpen) ? 'dark' : 'light'}
            />
          </LogoLinkWrapper>
          {isOpen && (
            <MediaLinkWrapper>
              <a href={data.home.footer.info.ig.link}>
                <MediaIcon className="fab fa-instagram"></MediaIcon>
              </a>
              <a href={data.home.footer.info.ig.link}>
                <MediaIcon className="fab fa-facebook-square"></MediaIcon>
              </a>
            </MediaLinkWrapper>
          )}
        </Header>
        <NavList setIsOpen={setIsOpen} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Navbar;
