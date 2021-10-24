import React, { useState } from 'react';
import styled from 'styled-components';
import SwitchButton from './SwitchButton';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { forMobile, greaterThanMobile } from '../../../theme/breakpoints';
import data from '../../../constants/data';

const Wrapper = styled.div`
  max-width: 1240px;

  ${greaterThanMobile} {
    padding: 160px 0;
    margin: 0 100px;

    @media (min-width: 1440px) {
      margin: 0 auto;
    }
  }

  ${forMobile} {
    padding: 92px 0;
    margin: 0 32px;
  }
`;

const Header = styled.div`
  ${greaterThanMobile} {
    margin-bottom: 80px;
  }

  ${forMobile} {
    margin-bottom: 40px;
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: #2ECA6A;

  ${greaterThanMobile} {
    margin-bottom: 28px;
  }

  ${forMobile} {
    margin-bottom: 24px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LineWrapper = styled.div`
  ${greaterThanMobile} {
    margin-right: 20px;
  }

  ${forMobile} {
    margin-right: 16px;
  }
`;

const Line = styled.div`
  width: 8px;

  &:nth-child(1) {
    background-color: #2ECA6A;
  }

  &:nth-child(2) {
    background-color: #79E3A2;
  }

  ${greaterThanMobile} {
    height: 21px;
  }

  ${forMobile} {
    height: 14px;
  }
`;

const Title = styled.h2`
  margin-right: auto;
  color: #2A2A2A;

  ${greaterThanMobile} {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.12em;
    font-weight: 700;
  }

  ${forMobile} {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 2.5px;
    font-weight: 500;
  }
`;

const ProductWrapper = styled.div`
  ${greaterThanMobile} {
    margin-bottom: 100px;
  }

  ${forMobile} {
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ProductList = styled.ul`
  display: flex;
  justify-content: space-between;

  ${greaterThanMobile} {
    > li {
      width: 23.5%;
    }

    @media (max-width: 1200px) {
      > li {
        width: 32%;
      }
    }

    @media (max-width: 900px) {
      > li {
        width: 47%;
      }
    }
  }

  ${forMobile} {
    > li {
      flex-shrink: 0;
      width: 260px;
    }

    > li + li {
      margin-left: 24px;
    }
  }
`;

const CustomButton = styled(Button)`
  padding: 20px 72px;
  border: 2px solid #2ECA6A;
  margin: 0 auto;
  color: #2ECA6A;

  ${forMobile} {
    display: none;
  }
`

const Products = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { width } = useWindowDimensions();
  const { subTitle, title, productList } = data.home.products;

  return (
    <Wrapper>
      <Header>
        <SubTitle>{subTitle}</SubTitle>
        <TitleWrapper>
          <LineWrapper>
            <Line />
            <Line />
          </LineWrapper>
          <Title>{title}</Title>
          <SwitchButton
            leftHandleButtonClick={() => setSelectedIndex(0)}
            rightHandleButtonClick={() => setSelectedIndex(1)}
            selectedIndex={selectedIndex}
          />
        </TitleWrapper>
      </Header>
      <ProductWrapper>
        <ProductList>
          {productList[selectedIndex].map((productItem, index) => {
            if (width > 1200 && index < 4) {
              return <Card {...productItem} />
            }

            if (width > 900 && index < 3) {
              return <Card {...productItem} />
            }

            if (width > 768 && index < 2) {
              return <Card {...productItem} />
            }
            if (width <= 768) {
              return <Card {...productItem} />
            }
            return null;
          })}
        </ProductList>
      </ProductWrapper>
      <CustomButton>VIEW MORE</CustomButton>
    </Wrapper>
  );
};

export default Products;
