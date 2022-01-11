import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../components/Card';
import Category from './Category';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { greaterThanMobile, forMobile } from '../../theme/breakpoints';
import data from '../../constants/data';

const Wrapper = styled.div`
  ${greaterThanMobile} {
    display: flex;
    align-items: flex-start;
    max-width: 1440px;
    padding: 180px 100px 84px 60px;
    margin: 0 auto;
  }

  ${forMobile} {
    padding: 140px 0 100px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${greaterThanMobile} {
    width: calc(100% - 324px);
  }
`;

const Title = styled.div`
  color: #252525;

  ${greaterThanMobile} {
    margin-bottom: 60px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 4px;
  }

  ${forMobile} {
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 12%;
  }
`;

const SquareWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Square = styled.div`
  width: 21px;
  height: 8px;

  &:nth-child(1) {
    background-color: #79E3A2;
  }

  &:nth-child(2) {
    background-color: #2ECA6A;
  }
`;

const SubTitle = styled.div`
  letter-spacing: 12%;
  font-weight: 700;
  color: #2ECA6A;

  ${greaterThanMobile} {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 19px;
  }

  ${forMobile} {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 17px;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${greaterThanMobile} {
    gap: 40px;

    > li {
      width: calc(33.33% - 26.66px);
    }

    @media (max-width: 1200px) {
      > li {
        width: calc(50% - 20px);
      }
    }

    @media (max-width: 960px) {
      > li {
        width: 100%;
      }
    }
  }

  ${forMobile} {
    gap: 32px;
    padding: 0 32px;

    > li {
      width: calc(50% - 16px);
    }

    @media (max-width: 600px) {
      > li {
        width: 100%;
      }
    }
  }
`;

const PageNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${greaterThanMobile} {
    margin-top: 48px;
    margin-left: auto;
  }

  ${forMobile} {
    margin-top: 60px;
  }
`;

const ArrowIcon = styled.i`
  color: #A7A7A7;
  cursor: pointer;
  transition: none;

  &:hover {
    color: #2ECA6A;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const Page = styled.div`
  line-height: 28px;
  letter-spacing: 0.8px;
  color: ${({ isSelected }) => isSelected ? '#2ECA6A' : '#A7A7A7'};
  cursor: pointer;
  transition: none;

  &:hover {
    color: #2ECA6A;
  }

  ${greaterThanMobile} {
    font-size: 14px;
  }

  ${forMobile} {
    font-size: 20px;
  }
`;

const categoryList = {
  all: {
    text: '全部產品',
  },
  equipment: {
    text: '機器設備銷售',
    subCategoryList: {
      laminated_glass_production_line: {
        text: '複層玻璃生產線',
      },
      window_cutting_machine: {
        text: '玻璃切割機',
      },
      hot_glue_machine: {
        text: '熱熔膠機',
      },
    },
  },
  vc: {
    text: 'VC 威斯卡門窗',
    subCategoryList: {
      doors_and_window: {
        text: '門窗產品',
      },
      consumable_products: {
        text: '消耗性產品',
      },
    },
  },
};

const List = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { productList } = data.home.products;
  const totalPage = products.length % 9 === 0
    ? parseInt(products.length / 9)
    : parseInt(products.length / 9) + 1;

  useEffect(() => {
    setProducts(productList.filter(({ mainCategory, subCategory }) => {
      if (category === 'all') return true;
      else return category === mainCategory || category === subCategory
    }))
    setPage(1);
  }, [productList, category])

  return (
    <Wrapper>
      {!isMobile && (
        <Category
          categoryList={categoryList}
          selectedCategory={category}
        />
      )}
      <InnerWrapper>
        <SubTitle>PRODUCT LIST</SubTitle>
        <SquareWrapper>
          <Square />
          <Square />
        </SquareWrapper>
        <Title>
          {
            categoryList[category]?.text
            || categoryList.equipment.subCategoryList[category]?.text
            || categoryList.vc.subCategoryList[category]?.text
          }
        </Title>
        {isMobile && (
          <Category
            categoryList={categoryList}
            selectedCategory={category}
          />
        )}
        <ProductWrapper>
          {products.map((productItem, index) => {
            if (index < page * 9 && index >= (page - 1) * 9) {
              return <Card key={productItem.title} {...productItem} />;
            }
            return null;
          })}
        </ProductWrapper>
        <PageNavigation>
          <ArrowIcon
            className="far fa-chevron-left"
            onClick={() => {
              if (page - 1 >= 1) setPage(prevPage => prevPage - 1);
            }}
          />
          <PageWrapper>
            {[...Array(totalPage).keys()].map(pageIndex => (
              <Page
                key={pageIndex}
                isSelected={pageIndex + 1 === page}
                onClick={() => {
                  setPage(pageIndex + 1);
                }}
              >
                {pageIndex + 1}
              </Page>
            ))}
          </PageWrapper>
          <ArrowIcon
            className="far fa-chevron-right"
            onClick={() => {
              if (page + 1 <= totalPage) setPage(prevPage => prevPage + 1);
            }}
          />
        </PageNavigation>
      </InnerWrapper>
    </Wrapper>
  );
};

export default List;
