import React from 'react';
import styled from 'styled-components';
import data from '../../constants/data';
import { forDesktop, forMobile } from '../../constants/breakpoints';

const Wrapper = styled.div`
    position: relative;
    padding-top: 100px;

    ${forMobile} {
        padding-top: 52px;
    }
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 542px;
    object-fit: cover;
    object-position: center;

    ${forMobile} {
        height: 394px;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const LineWrapper = styled.div`
    display: flex;
    margin-top: 24px;

    ${forMobile} {
        margin-top: 20px;
    }
`;

const Line = styled.span`
    display: block;
    width: 21px;
    height: 8px;

    &:nth-child(1) {
        background-color: #79E3A2;
    }

    &:nth-child(2) {
        background-color: #2ECA6A;
    }
`;

const Title = styled.h3`
    margin-top: 16px;
    font-size: 36px;
    line-height: 42px;
    font-weight: 700;
    color: #FFFFFF;

    ${forMobile} {
        font-size: 20px;
        line-height: 24px;
    }
`;

const ContentWrapper = styled.div`
    position: relative;
    padding: 120px 112px 100px 84px;
    border-top: 4px solid #2ECA6A;
    margin: 93px 100px 0;
    background-color: #FFFFFF;

    ${forDesktop} {
        padding: 100px 42px 68px 32px;
        margin: 80px 30px 0;
    }
`;

const SquareWrapper = styled.div`
    position: absolute;
    top: -30px;
    left: -30px;
    display: flex;

    ${forMobile} {
        top: -22px;
        left: -30px;
    }
`;

const Square = styled.span`
    display: block;
    width: 58px;
    height: 58px;

    &:nth-child(1) {
        background-color: #79E3A2;
    }

    &:nth-child(2) {
        background-color: #2ECA6A;
    }

    ${forMobile} {
        width: 42px;
        height: 42px;
    }
`;

const TimeLine = styled.div`
    position: absolute;
    top: 235px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #DCDCDC;

    ${forDesktop} {
        top: 216px;
    }
`;

const StoryWrapper = styled.div`
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const StoryList = styled.ul`
    display: flex;
    flex-shirk: 0;
    width: 1000px;
`;

const StoryItem = styled.li`
    position: relative;
    width: 293px;
    padding-top: 20px;

    & + & {
        margin-left: 82px;
    }

    ${forMobile} {
        width: 100%;
        min-width: 240px;
    }
`;

const RectangleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
`;

const Rectangle = styled.span`
    display: block;
    width: 10px;
    height: 8px;

    &:nth-child(1) {
        background-color: #79E3A2;
    }

    &:nth-child(2) {
        background-color: #2ECA6A;
    }
`;

const StoryTime = styled.span`
    font-size: 54px;
    line-height: 66px;
    letter-spacing: 0.06em;
    font-weight: 700;
    font-style: italic;
    color: #2A2A2A;

    ${forMobile} {
        font-size: 44px;
        line-height: 54px;
    }
`;

const StoryLine = styled.div`
    margin-top: 16px;
    width: 1px;
    height: 27px;
    background-color: #A3A3A3;

    ${forMobile} {
        margin-top: 28px;
    }
`;

const StoryTitle = styled.h4`
    position: relative;
    z-index: 0;
    display: inline-block;
    margin-top: 32px;
    vertical-align: text-top;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.06em;
    font-weight: 700;
    color: #2A2A2A;

    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        bottom: 3px;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: #C1F1D3;
        opacity: 48%;
    }
`;

const StoryDescription = styled.p`
    margin-top: 16px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1em;
    font-weight: 400;
    color: #525252;
`;

const ButtonList = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 64px;
    margin-right: -52px;

    ${forDesktop} {
        margin-top: 32px;
        margin-right: -20px;
    }
`;

const Button = styled.button`
    width: 40px;
    height: 40px;
    padding: 0;
    border: 1px solid #DCDCDC;
    border-radius: 50%;
    font-size: 20px;
    color: #DCDCDC;

    &:hover {
        border: 2px solid #2ECA6A;
        color: #2ECA6A;
    }

    & + & {
        margin-left: 20px;
    }
`;

const TextImage = styled.img`
    position: absolute;
    display: block;
    width: 65%;
    max-width: 808px;
    bottom: 0;
    left: 0;

    ${forMobile} {
        width: 100%;
    }
`

const LastSquare = styled.span`
    position: absolute;
    right: -30px;
    bottom: -12px;
    display: block;
    width: 58px;
    height: 58px;
    background-color: #2ECA6A;

    ${forMobile} {
        right: -29px;
        bottom: -29px;
        z-index: -1;
    }
`;

const About = () => {
    const { image, textImage, subTitle, title, storyList } = data.home.about;

    return (
        <Wrapper>
            <Image src={image} alt={subTitle} />
            <TitleWrapper>
                <SubTitle>{subTitle}</SubTitle>
                <LineWrapper>
                    <Line />
                    <Line />
                </LineWrapper>
                <Title>{title}</Title>
            </TitleWrapper>
            <ContentWrapper>
                <SquareWrapper>
                    <Square />
                    <Square />
                </SquareWrapper>
                <TimeLine />
                <StoryWrapper>
                    <StoryList>
                        {storyList.map(({ time, title, description }) => (
                            <StoryItem key={time}>
                                <RectangleWrapper>
                                    <Rectangle />
                                    <Rectangle />
                                </RectangleWrapper>
                                <StoryTime>{time}</StoryTime>
                                <StoryLine />
                                <StoryTitle>{title}</StoryTitle>
                                <StoryDescription>{description}</StoryDescription>
                            </StoryItem>
                        ))}
                    </StoryList>
                </StoryWrapper>
                <ButtonList>
                    <Button className="material-icons">chevron_left</Button>
                    <Button className="material-icons">chevron_right</Button>
                </ButtonList>
                <TextImage src={textImage} alt="TAY TZYY LONG" />
                <LastSquare />
            </ContentWrapper>
        </Wrapper>
    );
};

export default About;