import React from 'react';
import styled from 'styled-components';
import data from '../../constants/data';

const Wrapper = styled.div`
    position: relative;
    padding-top: 100px;
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
`;

const LineWrapper = styled.div`
    display: flex;
    margin-top: 24px;
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
`;

const ContentWrapper = styled.div`
    position: relative;
    padding: 120px 84px 100px;
    border-top: 4px solid #2ECA6A;
    margin: 93px 100px 0;
    background-color: #FFFFFF;
`;

const SquareWrapper = styled.div`
    position: absolute;
    top: -30px;
    left: -30px;
    display: flex;
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
`;

const TimeLine = styled.div`
    position: absolute;
    top: 235px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #DCDCDC;
`;

const StoryList = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StoryWrapper = styled.div`
    position: relative;
    width: 30%;
    padding-top: 20px;
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
`;

const StoryLine = styled.div`
    margin-top: 16px;
    width: 1px;
    height: 27px;
    background-color: #A3A3A3;
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
`;

const Button = styled.button`
    width: 40px;
    height: 40px;
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

const Company = styled.h6`
    position: absolute;
    bottom: -32px;
    left: -2px;
    font-size: 100px;
    line-height: 125px;
    letter-spacing: normal;
    font-weight: 900;
    color: #F6F6F6;
`;

const LastSquare = styled.span`
    position: absolute;
    right: -30px;
    bottom: -12px;
    display: block;
    width: 58px;
    height: 58px;
    background-color: #2ECA6A;
`;

const About = () => {
    const { image, subTitle, title, storyList } = data.home.about;

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
                <StoryList>
                    {storyList.map(({ time, title, description }) => (
                        <StoryWrapper key={time}>
                            <RectangleWrapper>
                                <Rectangle />
                                <Rectangle />
                            </RectangleWrapper>
                            <StoryTime>{time}</StoryTime>
                            <StoryLine />
                            <StoryTitle>{title}</StoryTitle>
                            <StoryDescription>{description}</StoryDescription>
                        </StoryWrapper>
                    ))}
                </StoryList>
                <ButtonList>
                    <Button className="material-icons">chevron_left</Button>
                    <Button className="material-icons">chevron_right</Button>
                </ButtonList>
                <Company>TAY TZYY LONG</Company>
                <LastSquare />
            </ContentWrapper>
        </Wrapper>
    );
};

export default About;