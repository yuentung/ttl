import React from 'react';
import styled from 'styled-components';
import data from '../../constants/data';

const Wrapper = styled.div`
    position: absolute; // change to fixed
    z-index: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 50px 82px 50px 74px;
`;

const LogoLink = styled.a`
    display: block;
    width: 216px;
    height: 46px;
    text-indent: 101%;
    white-space: nowrap;
    overflow: hidden;
    background-image: url(${data.home.navbar.logo});
    cursor: pointer;
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
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
    color: #FFFFFF;
    cursor: pointer;
`;

const Navbar = () => {
    const { navList } = data.home.navbar;

    return (
        <Wrapper>
            <h1><LogoLink href="./index.html">Tay Tzyy Long Co. Ltd</LogoLink></h1>
            <NavList>
                {navList.map(({ text, link }) => (
                    <NavItem key={text}>
                        <NavLink href={link}>{text}</NavLink>
                    </NavItem>
                ))}
            </NavList>
        </Wrapper>
    );
};

export default Navbar;