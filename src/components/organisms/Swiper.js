import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../constants/data';
import { forMobile } from '../../constants/breakpoints';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    min-height: 800px;
    padding: 80px;

    ${forMobile} {
        // min-height: 400px;
        padding: 40px;
    }
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

const Title = styled.h2`
    margin-top: auto;
    font-size: 72px;
    line-height: 84px;
    font-weight: 700;
    color: #FFFFFF;

    ${forMobile} {
        font-size: 32px;
        line-height: 38px;
    }
`;

const SubTitle = styled.p`
    margin-top: 32px;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    color: #FFFFFF;

    ${forMobile} {
        margin-top: 16px;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.16em;
    }
`;

const Link = styled.a`
    margin-top: 52px;
    padding: 18px 32px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #FFFFFF;
    background-color: #2ECA6A;
    cursor: pointer;

    ${forMobile} {
        margin-top: 40px;
    }
`;

const ButtonWrapper = styled.div`
    position: absolute;
    top: 32%;
    right: 80px;

    ${forMobile} {
        right: 40px;
    }
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    > div {
        background-color: ${({ selected }) => selected ? '#2ECA6A' : '#FFFFFF'};
    }

    &:hover {
        > div {
            background-color: #2ECA6A;
        }
    }
`;

const ButtonText = styled.span`
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    color: #FFFFFF;
    writing-mode: vertical-rl;
`;

const ButtonLine = styled.div`
    margin-left: 12px;
    width: 4px;
    height: 100px;
`;

const ScrollWrapper = styled.div`
    position: absolute;
    right: 80px;
    bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${forMobile} {
        right: 40px;
        bottom: 40px;
    }
`;

const ScrollLine = styled.div`
    width: 1px;
    height: 67px;
    background-color: #FFFFFF;
`;

const ScrollText = styled.span`
    margin-top: 16px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.2em;
    font-weight: 700;
    color: #FFFFFF;
    writing-mode: vertical-rl;
`;

const Swiper = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (index === 1) setIndex(0);
            else setIndex(1);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [index]);

    const { image, title, subTitle } = data.home.swiper[index];

    return (
        <Wrapper>
            <Image src={image} alt={subTitle} />
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <SubTitle>{subTitle}</SubTitle>
            <Link>聯絡我們</Link>
            <ButtonWrapper>
                <Button onClick={() => setIndex(0)} selected={index === 0}>
                    <ButtonText>VC</ButtonText>
                    <ButtonLine />
                </Button>
                <Button onClick={() => setIndex(1)} selected={index === 1}>
                    <ButtonText>TTL</ButtonText>
                    <ButtonLine />
                </Button>
            </ButtonWrapper>
            <ScrollWrapper>
                <ScrollLine />
                <ScrollText>SCROLL</ScrollText>
            </ScrollWrapper>
        </Wrapper>
    );
};

export default Swiper;