import React from 'react';
import styled from 'styled-components';
import LogoLink from '../LogoLink';
import Button from '../Button';
import { forDesktop, forMobile, greaterThanMobile, forSmallMobile } from '../../theme/breakpoints';
import data from '../../constants/data';

const Wrapper = styled.div`
  position: relative;
  background-color: rgba(37, 37, 37, 0.6);
`;

const Image = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Container = styled.div`
  display: flex;

  ${greaterThanMobile} {
    justify-content: space-between;
    max-width: 1440px;
    padding: 120px 100px;
    margin: 0 auto;
  }

  ${forMobile} {
    flex-direction: column;
    padding: 40px 32px 140px;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${forDesktop} {
    justify-content: flex-start;
  }

  ${forMobile} {
    width: 100%;
  }
`;

const LogoLinkWrapper = styled.div`
  margin-bottom: 72px;

  ${forDesktop} {
    margin-bottom: 32px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;

  ${forDesktop} {
    justify-content: space-between;
    flex-wrap: wrap;
  }

  ${forMobile} {
    flex-wrap: nowrap;
  }

  ${forSmallMobile} {
    flex-wrap: wrap;
  }
`;

const InnerLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 100px;

  ${forDesktop} {
    margin-right: auto;
    margin-bottom: 40px;
  }
`;

const InnerRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiddleWrapper = styled.div`
  ${forDesktop} {
    margin-top: 40px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;

  ${forDesktop} {
    position: absolute;
    right: 165px;
    bottom: 120px;
  }

  ${forMobile} {
    right: unset;
    left: 50%;
    transform: translateX(-50%);
    bottom: 80px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;

  ${greaterThanMobile} {
    & + & {
      margin-top: 24px;
    }
  }

  ${forMobile} {
    & + & {
      margin-top: 16px;
    }
  }
`;

const InfoIcon = styled.img`
  margin-right: 12px;
`

const InfoText = styled.p`
  font-size: 16px;
  letter-spacing: 0.15em;
  font-weight: 400;
  color: #FFFFFF;
  white-space: nowrap;

  ${greaterThanMobile} {
    line-height: 19px;
  }

  ${forMobile} {
    line-height: 24px;
  }
`;

const MediaIcon = styled.img`
  margin-left: 36px;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  ${forMobile} {
    margin-bottom: 40px;
  }
`;

const NavItem = styled.li`
  width: 50%;

  &:nth-child(3), &:nth-child(4) {
    margin-top: 48px;

    ${forDesktop} {
      margin-top: 28px;
    }
  }

  > a {
    padding-left: 10px;
    border-left: 4px solid #2ECA6A;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.2px;
    font-weight: 500;
    color: #FFFFFF;
  }
`;

const SubNavItem = styled.li`
  margin-top: 16px;

  > a {
    padding-left: 14px;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.15em;
    color: #FFFFFF;
  }
`;

const Copyright = styled.p`
  margin-top: 60px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.12em;
  font-weight: 400;
  color: #FFFFFF;

  ${forDesktop} {
    display: none;
  }
`;

const Map = styled.img`
  display: block;
  width: 300px;
  height: 287px;
  object-fit: cover;

  ${forDesktop} {
    width: 100%;
    min-width: 300px;
    height: auto;
    max-height: 400px;
    margin-bottom: 36px;
  }
`;

const Footer = () => {
  const { image, info, navList, map } = data.home.footer;
  const { address, serviceHours, mail, phone, ig, fb } = info;

  return (
    <Wrapper>
      <Image src={image} alt="footer" />
      <Container>
        <div>
          <LogoLinkWrapper>
            <LogoLink width={184} color="light" />
          </LogoLinkWrapper>
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
                <InfoText>SOCIAL</InfoText>
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
          <Button
            border="1px solid #FFFFFF"
            color="#FFFFFF"
          >
            聯絡我們
            <span className="material-icons">east</span>
          </Button>
        </RightWrapper>
      </Container>
    </Wrapper>
  );
};

export default Footer;
