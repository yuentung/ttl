import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../constants/data';
import { forMobile } from '../../constants/breakpoints';

const Wrapper = styled.div`
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 44px 82px 44px 74px;
    background-color: rgba(256, 256, 256, ${({ isTop }) => isTop ? '0' : '0.8'});

    ${forMobile} {
        padding: 40px;
    }
`;

const LogoLink = styled.a`
    display: block;
    width: 216px;
    height: 46px;
    text-indent: 101%;
    white-space: nowrap;
    overflow: hidden;
    background-image: ${({ isTop }) => isTop ? `url(${data.home.navbar.logo})` : `url(${data.home.navbar.darkLogo})`};
    background-size: cover;
    background-position: center;
    cursor: pointer;

    ${forMobile} {
        width: 160px;
        height: 34px;
    }
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;

    ${forMobile} {
        display: none;
    }
`;

const NavItem = styled.li`
    & + & {
        margin-left: 78px;
    }
`;

const NavLink = styled.a`
    display: block;
    padding: 12px 0;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: ${({ isTop }) => isTop ? '#FFFFFF' : '#525252'};
    cursor: pointer;
`;

const Navbar = () => {
    const [isTop, setIsTop] = useState(true);
    const { navList } = data.home.navbar;

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if (window.pageYOffset === 0) setIsTop(true);
            else setIsTop(false);
        });

        return () => window.removeEventListener('scroll', () => { });
    }, []);

    return (
        <Wrapper isTop={isTop}>
            <h1><LogoLink href="./index.html" isTop={isTop}>Tay Tzyy Long Co. Ltd</LogoLink></h1>
            <NavList>
                {navList.map(({ text, link }) => (
                    <NavItem key={text}>
                        <NavLink href={link} isTop={isTop}>{text}</NavLink>
                    </NavItem>
                ))}
            </NavList>
        </Wrapper>
    );
};

export default Navbar;