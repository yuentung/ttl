import React from 'react';
import styled from 'styled-components';
import data from '../../constants/data';
import { betweenDesktopAndPad, pad } from '../../constants/media';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 100px 160px;
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
`;

const Title = styled.h3`
    margin-left: 21px;
    font-size: 36px;
    line-height: 42px;
    font-weight: 700;
    color: #2A2A2A;
`;

const SwitchButton = styled.button`
    width: 80px;
    height: 40px;
    border: 2px solid ${({ selected }) => selected ? '#2ECA6A' : '#DCDCDC'};
    font-weight: 700;
    color: ${({ selected }) => selected ? '#FFFFFF' : '#DCDCDC'};
    background-color: ${({ selected }) => selected ? '#2ECA6A' : 'transparent'};

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
`;

const ProductList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 80px;
`;

const ProductItem = styled.li`
    width: 23.5%;
    background-color: #FFFFFF;

    &:nth-child(n+5) {
        margin-top: 40px;
    }

    ${betweenDesktopAndPad} {
        width: 30%;

        &:nth-child(n+4) {
            margin-top: 40px;
        }
    }

    ${pad} {
        width: 45%;

        &:nth-child(n+3) {
            margin-top: 40px;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    padding: 16px 16px 0;
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
`;

const Button = styled.button`
    padding: 20px 72px;
    border: 2px solid #2ECA6A;
    margin-top: 100px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    color: #2ECA6A;
`;

const Products = () => {
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
                    <SwitchButton selected={true}>TTL</SwitchButton>
                    <SwitchButton>VC</SwitchButton>
                </div>
            </Header>
            <ProductList>
                {productList.map(({ image, title, description }) => (
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
            <Button>VIEW MORE</Button>
        </Wrapper>
    );
};

export default Products;