import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import Card from './Card';
import { greaterThanMobile, forMobile } from '../../theme/breakpoints';
import data from '../../constants/data';

const InnerWrapper = styled.div`
  ${greaterThanMobile} {
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    padding: 96px 120px 120px;
    margin: 0 auto;
  }

  ${forMobile} {
    padding: 60px 32px 120px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${greaterThanMobile} {
    margin-bottom: 116px;
  }

  ${forMobile} {
    margin-bottom: 60px;
  }
`;

const Button = styled.button`
  border-bottom: 4px solid ${({ selected }) => selected ? '#2ECA6A' : '#FFFFFF'};
  line-height: 24px;
  letter-spacing: 1.6px;
  color: #505050;
  background-color: #FFFFFF;

  > span {
    display: block;
    letter-spacing: 12%;
    font-weight: 700;
    color: #2ECA6A;
  }

  ${greaterThanMobile} {
    width: 320px;
    height: 100px;
    font-size: 14px;

    > span {
      margin-bottom: 8px;
      font-size: 20px;
      line-height: 24px;
    }
  }

  ${forMobile} {
    width: 50%;
    height: 64px;
    font-size: 12px;

    > span {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: #F2F3F5;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${greaterThanMobile} {
    gap: 88px 80px;
  
    > div {
      width: calc(50% - 40px);
    }
  }

  ${forMobile} {
    gap: 44px;
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

const Case = () => {
  const { caseList } = data;
  const { banner } = data.case;
  const [selectedCategory, setSelectedCategory] = useState('equipment');
  const [page, setPage] = useState(1);
  const [cases, setCases] = useState([]);
  const totalPage = cases.length % 6 === 0
    ? parseInt(cases.length / 6)
    : parseInt(cases.length / 6) + 1;

  useEffect(() => {
    setCases(caseList.filter(({ mainCategory }) => selectedCategory === mainCategory))
    setPage(1);
  }, [caseList, selectedCategory])

  return (
    <>
      <Banner {...banner} />
      <InnerWrapper>
        <ButtonWrapper>
          <Button
            onClick={() => setSelectedCategory('equipment')}
            selected={selectedCategory === 'equipment'}
          >
            <span>TTL</span>
            機器設備銷售
          </Button>
          <Divider />
          <Button
            onClick={() => setSelectedCategory('vc')}
            selected={selectedCategory === 'vc'}
          >
            <span>VC</span>
            威斯卡系統門窗
          </Button>
        </ButtonWrapper>
        <CardWrapper>
          {cases.map((caseItem, index) => {
            if (index < page * 6 && index >= (page - 1) * 6) {
              return <Card key={caseItem.id} {...caseItem} />;
            }
            return null;
          })}
        </CardWrapper>
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
    </>
  );
};

export default Case;
