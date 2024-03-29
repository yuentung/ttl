import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SwitchButton from './SwitchButton';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { forDesktop, forMobile, greaterThanMobile } from '../../../theme/breakpoints';
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
    display: flex;
    padding-bottom: 80px;
    margin: 0 -32px;
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

    ${forDesktop} {
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
    flex-shrink: 0;
    padding: 0 32px;

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
  margin: 0 auto;
`

const Products = () => {
  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState('equipment');
  const { width } = useWindowDimensions();
  const { home, productList } = data;
  const { subTitle, title } = home.products;

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
            leftHandleButtonClick={() => setSelectedCategory('equipment')}
            rightHandleButtonClick={() => setSelectedCategory('vc')}
            selectedCategory={selectedCategory}
          />
        </TitleWrapper>
      </Header>
      <ProductWrapper>
        <ProductList>
          {productList.filter(productItem => {
            return productItem.mainCategory === selectedCategory
          }).map((productItem, index) => {
            if (width > 1200 && index < 4) {
              return <Card key={productItem.title} {...productItem} />
            }

            if (width > 900 && index < 3) {
              return <Card key={productItem.title} {...productItem} />
            }

            if (width <= 820 && index < 4) {
              return <Card key={productItem.title} {...productItem} />
            }
            return null;
          })}
        </ProductList>
      </ProductWrapper>
      <CustomButton
        borderColor="#2ECA6A"
        color="#2ECA6A"
        hoverColor="#27B95F"
        activeColor="#1CA04F"
        handleButtonClick={() => history.push(`/list/${selectedCategory}`)}
      >
        VIEW MORE
      </CustomButton>
    </Wrapper>
  );
};

export default Products;
