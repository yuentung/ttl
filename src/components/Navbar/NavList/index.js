import React, { useState } from 'react';
import useMedia from 'use-media';
import styled from 'styled-components';
import { greaterThanMobile, forMobile } from '../../../theme/breakpoints';
import data from '../../../constants/data';

const Wrapper = styled.div`
  ${greaterThanMobile} {
    margin-right: 60px;
  }

  ${forMobile} {
    flex-grow: 1;
    padding: 60px 40px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
  }
`;

const Background = styled.div`
  ${greaterThanMobile} {
    position: absolute;
    top: 110px;
    right: 0;
    left: 0;
    height: ${({ show }) => show ? '256px' : '0'};
    background-color: rgba(255, 255, 255, 0.95);
    overflow: hidden;
  }

  ${forMobile} {
    display: none;
  }
`;

const InnerWrapper = styled.ul`
  display: flex;

  ${forMobile} {
      flex-direction: column;
  }
`;

const NavItem = styled.li`
  ${greaterThanMobile} {
    &:hover > ul {
      display: flex
    }
  }

  ${forMobile} {
    & + & {
      margin-top: 60px;
    }
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #FFFFFF;

  > span {
    margin-left: 4px;
    transform: rotate(${({ selected }) => selected ? '180deg' : '360deg'});
  }

  ${greaterThanMobile} {
    padding: 39px 20px;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.2px;

    > span {
      font-size: 24px;
    }
  }

  ${forMobile} {
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

  ${greaterThanMobile} {
    display: flex;
    justify-content: flex-end;
    padding: 40px 80px;
  }

  ${forMobile} {
    max-height: ${({ selected }) => selected ? '1000px' : '0'};
    margin-left: 24px;
  }
`;

const SubNavItem = styled.li`
  ${greaterThanMobile} {
    & + & {
      margin-left: 40px;
    }
  }
  ${forMobile} {
    margin-top: 24px;
  }
`;

const SubNavLink = styled.a`
  display: block;
  font-weight: 500;

  > span {
    letter-spacing: 8%;
  }

  ${greaterThanMobile} {
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

  ${forMobile} {
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
  ${greaterThanMobile} {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(4, 24px);
    grid-row-gap: 12px;
    grid-column-gap: 20px;
    margin-top: 12px;
  }

  ${forMobile} {
    margin-left: 20px;
  }
`;

const LastNavItem = styled.li`
  ${forMobile} {
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

  ${greaterThanMobile} {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1.2px;
    color: #505050;

    > span {
      margin-right: 4px;
    }
  }

  ${forMobile} {
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.2px;
    color: #FFFFFF;

    > span {
      margin-right: 8px;
    }
  }
`;

const NavList = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const isDesktop = useMedia({ minWidth: '769px' });
  const { navList } = data.home.navbar;

  return (
    <Wrapper>
      <InnerWrapper>
        {navList.map(({ text, link, subNavList }, index) => (
          <NavItem key={text}>
            <NavLink
              href={link}
              onClick={(e) => {
                if (subNavList) {
                  e.preventDefault();
                  if (!isDesktop) {
                    if (index !== selectedIndex) setSelectedIndex(index);
                    else setSelectedIndex(-1);
                  }
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
                <span className="material-icons">expand_more</span>
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
      <Background show={selectedIndex !== -1}>
        {(isDesktop && navList[selectedIndex]?.subNavList) && (
          <SubNavList>
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
