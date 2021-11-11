import React from 'react';
import { useHistory } from 'react-router-dom';
import useMedia from 'use-media';
import styled from 'styled-components';
import Map from '../Map';
import LogoLink from '../LogoLink';
import Button from '../Button';
import { forDesktop, forMobile, greaterThanMobile, forSmallMobile } from '../../theme/breakpoints';
import data from '../../constants/data';
import ArrowImage from '../../constants/images/arrow.svg';

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
    padding: 40px 32px;
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
    margin-bottom: 32px;
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

  > i {
    margin-left: 36px;
    font-size: 22px;
    color: #FFFFFF;
  }

  ${forDesktop} {
    position: absolute;
    right: 165px;
    bottom: 120px;
  }

  ${forMobile} {
    position: static;
    right: unset;
    bottom: unset;
    margin-bottom: 32px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;

  > i {
    margin-right: 12px;
    font-size: 16px;
    color: #FFFFFF;
  }

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

const InfoText = styled.p`
  font-size: 16px;
  letter-spacing: 0.15em;
  font-weight: 400;
  color: #FFFFFF;

  ${greaterThanMobile} {
    line-height: 19px;
  }

  ${forMobile} {
    line-height: 24px;

    @media (max-width: 360px) {
      font-size: 13px;
    }
  }
`;

const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 132px);

  ${greaterThanMobile} {
    grid-gap: 48px 72px;
  }

  ${forMobile} {
    grid-gap: 28px 40px;
    margin-bottom: 40px;

    @media (max-width: 360px) {
      grid-template-columns: repeat(2, 120px);
      grid-gap: 16px 16px;
    }
  }
`;

const NavItem = styled.li`
  > a {
    padding-left: 10px;
    border-left: 4px solid #2ECA6A;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.2px;
    font-weight: 500;
    color: #FFFFFF;

    @media (max-width: 360px) {
      font-size: 14px;
      line-height: 28px;
    }
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

    @media (max-width: 360px) {
      font-size: 13px;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 60px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.12em;
  font-weight: 400;
  color: #FFFFFF;

  ${forMobile} {
    margin-top: 0;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.02em;
    white-space: nowrap;

    @media (max-width: 360px) {
      font-size: 9px;
    } 
  }
`;

const MapWrapper = styled(Map)`
  display: block;
  margin-bottom: 36px;

  ${greaterThanMobile} {
    width: 300px;
    height: 287px;

    ${forDesktop} {
      width: 100%;
      min-width: 300px;
      height: auto;
      max-height: 400px;
    }
  }

  ${forMobile} {
    height: 174px;
  }
`;

const MobileBottomWrapper = styled.div`
  ${forMobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ArrowIcon = styled.img`
    margin-left: 8px;
`;

const CustomButton = styled(Button)`
  ${forMobile} {
    padding: 18px 0;
  }
`;

const Footer = () => {
  const { image, info, navList } = data.home.footer;
  const { address, serviceHours, mail, phone } = info;
  const isMobile = useMedia({ maxWidth: '768px' });
  const history = useHistory();

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
                  <i className="fas fa-clock"></i>
                  <InfoText>{serviceHours.text}</InfoText>
                </InfoWrapper>
                <InfoWrapper>
                  <i className="fas fa-envelope"></i>
                  <InfoText>{mail.text}</InfoText>
                </InfoWrapper>
                <InfoWrapper>
                  <i className="fas fa-phone"></i>
                  <InfoText>{phone.text}</InfoText>
                </InfoWrapper>
              </MiddleWrapper>
              {!isMobile && (
                <BottomWrapper>
                  <InfoText>SOCIAL</InfoText>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-facebook-square"></i>
                </BottomWrapper>
              )}
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
              {!isMobile && <Copyright>Copyright © Tay Tzyy LongCo.Ltc. all rights reserved</Copyright>}
            </InnerRightWrapper>
          </InnerWrapper>
        </div>
        <RightWrapper>
          <MapWrapper />
          <CustomButton
            borderColor="#FFFFFF"
            color="#FFFFFF"
            hoverColor="#FFFFFF"
            activeColor="#FFFFFF"
            handleButtonClick={() => history.push(`${process.env.PUBLIC_URL}/contact`)}
            isFluid
          >
            聯絡我們
            <ArrowIcon src={ArrowImage} alt="arrow icon" />
          </CustomButton>
        </RightWrapper>
        {isMobile && (
          <MobileBottomWrapper>
            <BottomWrapper>
              <InfoText>SOCIAL</InfoText>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-square"></i>
            </BottomWrapper>
            <Copyright>Copyright © Tay Tzyy LongCo.Ltc. all rights reserved</Copyright>
          </MobileBottomWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default Footer;
