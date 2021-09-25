import React from 'react';
import styled from 'styled-components';
import data from '../../constants/data';
import { desktop } from '../../constants/media';

const Wrapper = styled.div`
    position: relative;
    padding: 120px 100px;
    background-color: rgba(0, 0, 0, 0.8);
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1240px;
    margin: 0 auto;
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${desktop} {
        justify-content: flex-start;
        width: 60%;
    }
`;

const LogoLink = styled.a`
    display: block;
    width: 184px;
    height: 38px;
    margin-bottom: 72px;
    background-image: url(${data.home.navbar.logo});
    background-size: cover;
    cursor: pointer;

    ${desktop} {
        margin-bottom: 36px;
    }
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const InnerLeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 110px;

    ${desktop} {
        margin-bottom: 36px;
    }
`;

const InnerRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const MiddleWrapper = styled.div`
    ${desktop} {
        margin-top: 24px;
    }
`;

const BottomWrapper = styled.div`
    display: flex;
    align-items: center;

    ${desktop} {
        margin-top: 24px;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;

    & + & {
        margin-top: 24px;
    }
`;

const InfoIcon = styled.img`
    margin-right: 12px;
`

const InfoText = styled.p`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.15;
    color: #FFFFFF;
`;

const MediaIcon = styled.img`
    margin-left: 36px;
`;

const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 64px;

    ${desktop} {
        margin-bottom: 36px;
    }
`;

const NavItem = styled.li`
    width: 50%;

    &:nth-child(3), &:nth-child(4) {
        margin-top: 64px;

        ${desktop} {
            margin-top: 24px;
        }
    }

    > a {
        padding-left: 10px;
        border-left: 4px solid #2ECA6A;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.15;
        color: #FFFFFF;
    }
`;

const SubNavItem = styled.li`
    margin-top: 20px;

    > a {
        padding-left: 14px;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.15;
        color: #FFFFFF;
    }
`;

const Copyright = styled.p`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.12;
    color: #FFFFFF;
`;

const Map = styled.img`
    display: block;
    width: 300px;
    height: 287px;

    ${desktop} {
        width: 100%;
        height: auto;
        margin-bottom: 36px;
    }
`;

const Button = styled.button`
    border: 1px solid #FFFFFF;
    width: 100%;
    font-size: 16px;
    line-height: 49px;
    letter-spacing: 0.12;
    color: #FFFFFF;
    cursor: pointer;
`;

const Footer = () => {
    const { image, info, navList, map } = data.home.footer;
    const { address, serviceHours, mail, phone, share, ig, fb } = info;

    return (
        <Wrapper>
            <Image src={image} alt="footer" />
            <Container>
                <div>
                    <LogoLink href="./index.html" />
                    <InnerWrapper>
                        <InnerLeftWrapper>
                            <InfoText>{address.text}</InfoText>
                            <MiddleWrapper>
                                <InfoWrapper>
                                    <InfoIcon src={serviceHours.icon} alt={serviceHours.text} />
                                    <InfoText>{serviceHours.text}</InfoText>
                                </InfoWrapper>
                                <InfoWrapper>
                                    <InfoIcon src={mail.icon} alt={mail.text} />
                                    <InfoText>{mail.text}</InfoText>
                                </InfoWrapper>
                                <InfoWrapper>
                                    <InfoIcon src={phone.icon} alt={phone.text} />
                                    <InfoText>{phone.text}</InfoText>
                                </InfoWrapper>
                            </MiddleWrapper>
                            <BottomWrapper>
                                <InfoText>SHARE</InfoText>
                                <MediaIcon src={ig.icon} alt="Instagram" />
                                <MediaIcon src={fb.icon} alt="Facebook" />
                            </BottomWrapper>
                        </InnerLeftWrapper>
                        <InnerRightWrapper>
                            <NavList>
                                {navList.map(({ text, link, subNavList }) => (
                                    <NavItem key={text}>
                                        <a href={link}>{text}</a>
                                        {subNavList ? (
                                            <ul>
                                                {subNavList.map(({ text, link }) => (
                                                    <SubNavItem key={text}>
                                                        <a href={link}>{text}</a>
                                                    </SubNavItem>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </NavItem>
                                ))}
                            </NavList>
                            <Copyright>Copyright © Tay Tzyy LongCo.Ltc. all rights reserved</Copyright>
                        </InnerRightWrapper>
                    </InnerWrapper>
                </div>
                <RightWrapper>
                    <Map src={map} alt="map" />
                    <Button>聯絡我們</Button>
                </RightWrapper>
            </Container>
        </Wrapper>
    );
};

export default Footer;