import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMedia from 'use-media';
import styled from 'styled-components';
import { forDesktop, greaterThanDesktop } from '../../../theme/breakpoints';
import data from '../../../constants/data';

const Wrapper = styled.div`
  ${greaterThanDesktop} {
    margin-right: 60px;
  }

  ${forDesktop} {
    flex-grow: 1;
    padding: 60px 40px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
  }
`;

const Background = styled.div`
  ${greaterThanDesktop} {
    position: absolute;
    top: 80px;
    right: 0;
    left: 0;
    height: ${({ show }) => show ? '256px' : '0'};
    background-color: rgba(255, 255, 255, 0.95);
    overflow: hidden;
  }

  ${forDesktop} {
    display: none;
  }
`;

const InnerWrapper = styled.ul`
  display: flex;

  ${forDesktop} {
      flex-direction: column;
  }
`;

const NavItem = styled.li`
  ${greaterThanDesktop} {
    &:hover > ul {
      display: flex
    }
  }

  ${forDesktop} {
    & + & {
      margin-top: 60px;
    }
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #FFFFFF;

  > i {
    margin-left: 12px;
    font-size: 12px;
    transform: rotate(${({ selected }) => selected ? '180deg' : '360deg'});
  }

  ${greaterThanDesktop} {
    position: relative;
    padding: 24px 20px;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.2px;

    &:after {
      content: '';
      position: absolute;
      bottom: 16px;
      left: 20px;
      width: ${({ selected }) => selected ? 'calc(100% - 40px)' : '0px'};
      height: 1px;
      background-color: #FFFFFF;
    }

    &:hover {
      &:after {
        width: calc(100% - 40px);
      }
    }

    > span {
      font-size: 24px;
    }
  }

  ${forDesktop} {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 2.5px;

    > span {
      font-size: 28px;
    }
  }
`;

const SubNavList = styled.ul`
  overflow: hidden;

  ${greaterThanDesktop} {
    display: flex;
    justify-content: flex-end;
    padding: 40px 80px;
    padding-right: ${({ index }) => index === 1 ? '235px' : (index === 2 ? '130px' : '80px')};
    transition: none;
    animation: show .8s;

    @keyframes show {
      0% { opacity: 0 }
      100% { opacity: 1 }
    }
  }

  ${forDesktop} {
    max-height: ${({ selected }) => selected ? '1000px' : '0'};
    margin-left: 24px;
  }
`;

const SubNavItem = styled.li`
  ${greaterThanDesktop} {
    & + & {
      margin-left: 40px;
    }
  }
  ${forDesktop} {
    margin-top: 24px;
  }
`;

const SubNavLink = styled.a`
  display: block;
  font-weight: 500;

  > span {
    letter-spacing: 8%;
  }

  ${greaterThanDesktop} {
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.2px;
    color: #252525;

    > span {
      margin-right: 4px;
      font-weight: 500;
      color: #2ECA6A;
    }
  }

  ${forDesktop} {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 2.5px;
    color: #FFFFFF;

    > span {
      margin-right: 8px;
      font-weight: 700;
    }
  }
`;

const LastNavList = styled.ul`
  ${greaterThanDesktop} {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(4, 24px);
    grid-row-gap: 12px;
    grid-column-gap: 20px;
    margin-top: 12px;
  }

  ${forDesktop} {
    margin-left: 20px;
  }
`;

const LastNavItem = styled.li`
  ${forDesktop} {
    &:nth-child(1) {
      margin-top: 8px;
    }

    & + & {
      margin-top: 12px;
    }
  }
`;

const LastNavLink = styled.a`
  display: block;
  font-weight: 400;

  ${greaterThanDesktop} {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1.2px;
    color: #505050;

    > span {
      margin-right: 4px;
    }
  }

  ${forDesktop} {
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.2px;
    color: #FFFFFF;

    > span {
      margin-right: 8px;
    }
  }
`;

const NavList = ({ setIsOpen }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const isDesktop = useMedia({ minWidth: '1201px' });
  const { navList } = data.home.navbar;

  return (
    <Wrapper>
      <InnerWrapper>
        {navList.map(({ text, link, subNavList }, index) => (
          <NavItem key={text}>
            <NavLink
              to={process.env.PUBLIC_URL + link}
              onClick={(e) => {
                if (subNavList) {
                  e.preventDefault();
                  if (!isDesktop) {
                    if (index !== selectedIndex) setSelectedIndex(index);
                    else setSelectedIndex(-1);
                  }
                } else {
                  setIsOpen(false);
                }
              }}
              onMouseEnter={() => {
                if (isDesktop && subNavList) setSelectedIndex(index);
              }}
              onMouseLeave={() => {
                if (isDesktop && subNavList) setSelectedIndex(-1);
              }}
              selected={index === selectedIndex}
              hasChild={!!subNavList}
            >
              {text}
              {subNavList && (
                <i className="far fa-chevron-down"></i>
              )}
            </NavLink>
            {(!isDesktop && subNavList) && (
              <SubNavList selected={index === selectedIndex}>
                {subNavList.map(({ text, link, lastNavList }, index) => (
                  <SubNavItem key={text}>
                    {text && (
                      <SubNavLink href={link}>
                        <span>{`O${index + 1}`}</span>
                        {text}
                      </SubNavLink>
                    )}
                    {lastNavList && (
                      <LastNavList>
                        {lastNavList.map(({ text, link }) => (
                          <LastNavItem key={text}>
                            <LastNavLink href={link}>
                              <span>−</span>
                              {text}
                            </LastNavLink>
                          </LastNavItem>
                        ))}
                      </LastNavList>
                    )}
                  </SubNavItem>
                ))}
              </SubNavList>
            )}
          </NavItem>
        ))}
      </InnerWrapper>
      <Background
        onMouseEnter={() => setSelectedIndex(selectedIndex)}
        onMouseLeave={() => setSelectedIndex(-1)}
        show={selectedIndex !== -1}
      >
        {(isDesktop && navList[selectedIndex]?.subNavList) && (
          <SubNavList index={selectedIndex}>
            {navList[selectedIndex]?.subNavList.map(({ text, link, lastNavList }, index) => (
              <SubNavItem key={text}>
                {text && (
                  <SubNavLink href={link}>
                    <span>{`O${index + 1}`}</span>
                    {text}
                  </SubNavLink>
                )}
                {lastNavList && (
                  <LastNavList>
                    {lastNavList.map(({ text, link }) => (
                      <LastNavItem key={text}>
                        <LastNavLink href={link}>
                          <span>−</span>
                          {text}
                        </LastNavLink>
                      </LastNavItem>
                    ))}
                  </LastNavList>
                )}
              </SubNavItem>
            ))}
          </SubNavList>
        )}
      </Background>
    </Wrapper>
  );
};

export default NavList;
