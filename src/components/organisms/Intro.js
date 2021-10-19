import React from 'react';
import styled from 'styled-components';
import data from '../../constants/data';
import { forDesktop, forMobile } from '../../theme/breakpoints';

const Wrapper = styled.div`
    padding: 180px 0;

    ${forDesktop} {
        padding: 100px 0;
    }

    ${forMobile} {
        padding: 64px 0;
    }
`;

const InnerWrapper = styled.div`
    position: relative;

    & + & {
        margin-top: 260px;
    }

    &:nth-child(odd) {
        > img {
            top: -80px;
            right: 100px;
        }

        > div:nth-child(2) {
            padding: 80px 227px 80px 100px;
        }

        > div:nth-child(3) {
            top: 0;
            right: 0;
            bottom: -60px;
        }
    }

    &:nth-child(even) {
        > img {
            top: -80px;
            left: 100px;
        }

        > div:nth-child(2) {
            margin-left: auto;
            padding: 80px 100px 80px 227px;
        }

        > div:nth-child(3) {
            top: 0;
            left: 0;
            bottom: -60px;
        }
    }

    ${forDesktop} {
        & + & {
            margin-top: 168px;
        }

        &:nth-child(odd) {
            > img {
                top: -20px;
                right: 60px;
            }
    
            > div:nth-child(2) {
                padding: 48px 140px 60px 60px;
            }
    
            > div:nth-child(3) {
                bottom: -48px;
            }
        }
    
        &:nth-child(even) {
            > img {
                top: -20px;
                left: 60px;
            }

            > div:nth-child(2) {
                padding: 48px 60px 60px 140px;
            }
    
            > div:nth-child(3) {
                bottom: -48px;
            }
        }
    }

    ${forMobile} {
        & + & {
            margin-top: 64px;
        }

        &:nth-child(odd) {
            > div:nth-child(2) {
                padding: 40px 32px;
            }
        }
    
        &:nth-child(even) {
            > div:nth-child(2) {
                padding: 40px 32px;
            }
        }
    }
`;

const ContentWrapper = styled.div`
    width: 55%;
    background-color: #FFFFFF;

    ${forMobile} {
        width: 100%;
    }
`;

const SubTitle = styled.span`
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #2ECA6A;

    ${forMobile} {
        font-size: 14px;
        line-height: 17px;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 28px;

    ${forDesktop} {
        align-items: flex-start;
    }

    ${forMobile} {
        margin-top: 24px;
    }
`;

const Line = styled.div`
    width: 8px;
    height: 50px;

    &:nth-child(1) {
        background-color: #2ECA6A;
    }

    &:nth-child(2) {
        background-color: #79E3A2;
    }

    ${forDesktop} {
        height: 40px;
    }

    ${forMobile} {
        height: 24px;
    }
`;

const Title = styled.h3`
    margin-left: 20px;
    font-size: 36px;
    line-height: 42px;
    font-weight: 700;
    color: #2A2A2A;

    ${forDesktop} {
        font-size: 28px;
        line-height: 33px;
    }

    ${forMobile} {
        font-size: 20px;
        line-height: 24px;
    }
`;

const Description = styled.p`
    margin-top: 40px;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.1em;
    font-weight: 400;
    color: #525252;

    ${forDesktop} {
        margin-top: 28px;
    }

    ${forMobile} {
        margin-top: 36px;
    }
`;

const Image = styled.img`
    position: absolute;
    display: block;
    width: 48%;

    ${forMobile} {
        position: static;
        width: 100%;
    }
`;

const Rectangle = styled.div`
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 60%;
    background-color: #C1F1D3;

    ${forMobile} {
        display: none;
    }
`;

const Intro = () => {
    const { intro } = data.home;

    return (
        <Wrapper>
            {intro.map(({ subTitle, title, description, image }) => (
                <InnerWrapper key={subTitle}>
                    <Image src={image} alt={title} />
                    <ContentWrapper>
                        <SubTitle>{subTitle}</SubTitle>
                        <TitleWrapper>
                            <div>
                                <Line />
                                <Line />
                            </div>
                            <Title dangerouslySetInnerHTML={{ __html: title }} />
                        </TitleWrapper>
                        <Description>{description}</Description>
                    </ContentWrapper>
                    <Rectangle />
                </InnerWrapper>
            ))}
        </Wrapper>
    );
};

export default Intro;