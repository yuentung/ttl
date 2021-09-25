import React from 'react';
import styled from 'styled-components';
import data from '../../constants/data';

const Wrapper = styled.div`
    padding-top: 104px;
`;

const InnerWrapper = styled.div`
    position: relative;
    margin-bottom: 120px;
    height: 600px;
    padding: 80px 0 60px;

    &:nth-child(odd) {
        > div:nth-child(1) {
            padding: 80px 227px 80px 100px;
        }

        > img {
            top: 0;
            right: 100px;
        }

        > div:nth-child(3) {
            right: 0;
        }
    }

    &:nth-child(even) {
        > div:nth-child(1) {
            right: 0;
            padding: 80px 100px 80px 227px;
        }

        > img {
            top: 0;
            left: 100px;
        }

        > div:nth-child(2) {
            left: 0;
        }
    }
`;

const ContentWrapper = styled.div`
    position: absolute;
    width: 55.5%;
    background-color: #FFFFFF;
`;

const SubTitle = styled.span`
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #2ECA6A;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 28px;
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
`;

const Title = styled.h3`
    margin-left: 20px;
    font-size: 36px;
    line-height: 42px;
    font-weight: 700;
    color: #2A2A2A;
`;

const Description = styled.p`
    margin-top: 40px;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.1em;
    font-weight: 400;
    color: #525252;
`;

const Image = styled.img`
    position: absolute;
    display: block;
    width: 47.2%;
`;

const Rectangle = styled.div`
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 61%;
    height: 464px;
    background-color: #C1F1D3;
`;

const Intro = () => {
    const { intro } = data.home;

    return (
        <Wrapper>
            {intro.map(({ subTitle, title, description, image }) => (
                <InnerWrapper key={subTitle}>
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
                    <Image src={image} alt={title} />
                    <Rectangle />
                </InnerWrapper>
            ))}
        </Wrapper>
    );
};

export default Intro;