import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import ImageSwiper from './ImageSwiper';
import Card from './Card';
import data from '../../constants/data';
import { greaterThanMobile, forMobile } from '../../theme/breakpoints';

const InnerWrapper = styled.div`
  ${greaterThanMobile} {
    max-width: 1440px;
    padding: 100px 160px 160px;
    margin: 0 auto;
  }

  ${forMobile} {
    padding: 60px 32px 120px;
  }
`;

const HorTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${greaterThanMobile} {
    margin-bottom: 60px;
  }

  ${forMobile} {
    margin-bottom: 40px;
  }
`;

const VerTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  ${greaterThanMobile} {
    margin-top: 100px;
    margin-bottom: 60px;
  }

  ${forMobile} {
    margin-top: 76px;
    margin-bottom: 40px;
  }
`;

const HorSquareWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const VerSquareWrapper = styled.div`
  ${greaterThanMobile} {
    margin-right: 20px;
  }

  ${forMobile} {
    margin-right: 16px;
  }
`;

const HorSquare = styled.div`
  width: 21px;
  height: 8px;

  &:nth-child(1) {
    background-color: #79E3A2;
  }

  &:nth-child(2) {
    background-color: #2ECA6A;
  }
`;

const VerSquare = styled.div`
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

const Title = styled.div`
  color: #252525;

  ${greaterThanMobile} {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 4px;
  }

  ${forMobile} {
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 12%;
    font-weight: 500;
  }
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 1.2px;
  color: #505050;

  ${greaterThanMobile} {
    margin-bottom: 60px;
  }

  ${forMobile} {
    margin-bottom: 56px;
  }
`;

const CardWrapper = styled.div`
  ${forMobile} {
    display: flex;
    margin: 0 -32px;
    overflow: auto;
  
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CardList = styled.div`
  position: relative;
  display: flex;

  ${greaterThanMobile} {
    gap: 60px;
  }

  ${forMobile} {
    gap: 24px;
    padding: 0 32px;
  }
`;

const Rectangular = styled.div`
  position: absolute;
  top: 60px;
  z-index: -1;
  background-color: #FFFFFF;

  ${greaterThanMobile} {
    left: -160px;
    width: calc(100% + 320px);
    height: 248px;
  }

  ${forMobile} {
    left: -32px;
    width: calc(100% + 32px);
    height: 184px;
  }
`;

const CaseView = () => {
  const { id: selectedId } = useParams();
  const { caseList } = data;
  const {
    title,
    description,
    mainCategory: selectedMainCategory,
    banner,
    imageList,
  } = caseList.filter(({ id }) => id === Number(selectedId))[0];

  return (
    <>
      <Banner image={banner} title="CASES" subTitle={title} />
      <InnerWrapper>
        <HorTitleWrapper>
          <HorSquareWrapper>
            <HorSquare />
            <HorSquare />
          </HorSquareWrapper>
          <Title>案例介紹</Title>
        </HorTitleWrapper>
        <Description>{description}</Description>
        <ImageSwiper imageList={imageList} />
        <VerTitleWrapper>
          <VerSquareWrapper>
            <VerSquare />
            <VerSquare />
          </VerSquareWrapper>
          <Title>其他案例</Title>
        </VerTitleWrapper>
        <CardWrapper>
          <CardList>
            <Rectangular />
            {caseList.filter(({ mainCategory }) => mainCategory === selectedMainCategory).map((caseItem, index) => {
              if (index < 3) return <Card key={caseItem.title} {...caseItem} />;
              else return null;
            })}
          </CardList>
        </CardWrapper>
      </InnerWrapper>
    </>
  );
};

export default CaseView;
