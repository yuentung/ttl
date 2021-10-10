import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../../constants/data';
import { forDesktop, forMobile } from '../../constants/breakpoints';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 100px 160px;

    ${forMobile} {
        padding: 100px 32px;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 28px;

    ${forMobile} {
        margin-top: 24px;
    }
`;

const SubTitle = styled.span`
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #2ECA6A;
`;

const Line = styled.span`
    display: block;
    width: 8px;
    height: 21px;

    &:nth-child(1) {
        background-color: #2ECA6A;
    }

    &:nth-child(2) {
        background-color: #79E3A2;
    }

    ${forMobile} {
        height: 14px;
    }
`;

const Title = styled.h3`
    margin-left: 21px;
    font-size: 36px;
    line-height: 42px;
    font-weight: 700;
    color: #2A2A2A;

    ${forMobile} {
        margin-left: 16px;
        font-size: 24px;
        line-height: 28px;
    }
`;

const SwitchButton = styled.button`
    width: 80px;
    height: 40px;
    border: 2px solid ${({ selected }) => selected ? '#2ECA6A' : '#DCDCDC'};
    font-weight: 700;
    color: ${({ selected }) => selected ? '#FFFFFF' : '#DCDCDC'};
    background-color: ${({ selected }) => selected ? '#2ECA6A' : '#FFFFFF'};

    &:hover {
        border: 2px solid #2ECA6A;
        color: #FFFFFF;
        background-color: #2ECA6A;
    }

    &:nth-child(1) {
        border-right: none;
    }

    &:nth-child(2) {
        border-left: none;
    }

    ${forMobile} {
        width: 76px;
        height: 28px;
    }
`;

const ProductWrapper = styled.div`
    width: 100%;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ProductList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 80px;

    ${forMobile} {
        width: ${({ size }) => `${size * 260 + (size - 1) * 24}px`};
        flex-wrap: nowrap;
        justify-content: flex-start;
        margin-top: 40px;
    }
`;

const ProductItem = styled.li`
    width: 23.5%;
    background-color: #FFFFFF;

    &:nth-child(n+5) {
        margin-top: 40px;
    }

    ${forDesktop} {
        width: 30%;

        &:nth-child(n+4) {
            margin-top: 40px;
        }
    }

    ${forMobile} {
        width: 260px;

        & + & {
            margin-top: 0;
            margin-left: 24px;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    border-bottom: 4px solid #2ECA6A;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 24px 20px;
`;

const ProductTitle = styled.h4`
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;

    ${forMobile} {
        font-size: 18px;
        line-height: 21px;
    }
`;

const Description = styled.p`
    margin-top: 20px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.05;
    color: #525252;
`;

const ArrowButton = styled.button`
    align-self: flex-end;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #2ECA6A;

    ${forMobile} {
        margin-top: 0;
    }
`;

const Button = styled.button`
    padding: 20px 72px;
    border: 2px solid #2ECA6A;
    margin-top: 100px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #2ECA6A;

    ${forMobile} {
        display: none;
    }
`;

const Products = () => {
    const [index, setIndex] = useState(0);
    const { subTitle, title, productList } = data.home.products;

    return (
        <Wrapper>
            <Header>
                <div>
                    <SubTitle>{subTitle}</SubTitle>
                    <TitleWrapper>
                        <div>
                            <Line />
                            <Line />
                        </div>
                        <Title>{title}</Title>
                    </TitleWrapper>
                </div>
                <div>
                    <SwitchButton onClick={() => setIndex(0)} selected={index === 0}>TTL</SwitchButton>
                    <SwitchButton onClick={() => setIndex(1)} selected={index === 1}>VC</SwitchButton>
                </div>
            </Header>
            <ProductWrapper>
                <ProductList size={productList[index].length}>
                    {productList[index].map(({ image, title, description }) => (
                        <ProductItem key={title}>
                            <Image src={image} alt={title} />
                            <ContentWrapper>
                                <ProductTitle>{title}</ProductTitle>
                                <Description>{description}</Description>
                                <ArrowButton className="material-icons">arrow_forward</ArrowButton>
                            </ContentWrapper>
                        </ProductItem>
                    ))}
                </ProductList>
            </ProductWrapper>
            <Button>VIEW MORE</Button>
        </Wrapper>
    );
};

export default Products;