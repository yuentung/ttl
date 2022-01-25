import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ImageSwiper from './ImageSwiper';
import Button from '../../components/Button';
import Card from '../../components/Card';
import YouTubeIframe from '../../components/YouTubeIframe';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { greaterThanMobile, forDesktop, forMobile } from '../../theme/breakpoints';
import data from '../../constants/data';

const Wrapper = styled.div`
  ${greaterThanMobile} {
    max-width: 1440px;
    padding: 134px 100px 120px;
    margin: 0 auto;
  }

  ${forMobile} {
    padding: 120px 32px 0;
  }
`;

const BreadCrumbWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.8px;
  color: #252525;
`;

const BreadCrumb = styled(Button)`
  width: auto;
  height: auto;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.8px;
  font-weight: 400;
  color: #252525;
  text-decoration: underline;
`;

const TopWrapper = styled.div`
  ${greaterThanMobile} {
    display: flex;
    margin-bottom: 44px;
  }

  ${forMobile} {
    margin-bottom: 40px;
  }
`;

const ContentWrapper = styled.div`
  ${greaterThanMobile} {
    margin-left: 64px;
  }

  ${forMobile} {
    margin-top: 40px;
  }
`;

const Title = styled.div`
  font-weight: 500;
  color: #252525;
  overflow: hidden;
  text-overflow: ellipsis;

  ${greaterThanMobile} {
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 8%;
  }

  ${forMobile} {
    margin-bottom: 32px;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 2.5px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  letter-spacing: 1.2px;
  color: #505050;

  ${greaterThanMobile} {
    margin-bottom: 40px;
    line-height: 28px;
  }

  ${forMobile} {
    margin-bottom: 32px;
    line-height: 24px;
  }
`;

const ContactUsButton = styled(Button)`
  width: 100%;
  padding: 18px 0;
  font-weight: 400;

  ${greaterThanMobile} {
    max-width: 430px;
  }
`;

const BottomWrapper = styled.div`
  background-color: #FFFFFF;

  ${greaterThanMobile} {
    padding: 80px 68px 120px;
    margin-bottom: 100px;
  }

  ${forMobile} {
    padding: 32px;
    margin-bottom: 60px;
  }
`;

const Section = styled.div`
  ${greaterThanMobile} {
    & + & {
      margin-top: 120px;
    }
  }

  ${forMobile} {
    & + & {
      margin-top: 40px;
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  ${greaterThanMobile} {
    margin-bottom: 80px;
  }

  ${forMobile} {
    margin-bottom: 32px;
  }
`;

const SquareWrapper = styled.div`
  ${greaterThanMobile} {
    margin-right: 20px;
  }

  ${forMobile} {
    margin-right: 16px;
  }
`

const Square = styled.div`
  width: 8px;

  &:nth-child(1) {
    background-color: #2ECA6A;
  }

  &:nth-child(2) {
    background-color: #79E3A2;
  }

  ${greaterThanMobile} {
    height: 17.5px;
  }

  ${forMobile} {
    height: 12px;
  }
`;

const SubTitle = styled.div`
  color: #252525;

  ${greaterThanMobile} {
    font-size: 24px;
    line-height: 35px;
    letter-spacing: 12%;
    font-weight: 500;
  }

  ${forMobile} {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 2.5px;
    font-weight: 400;
  }
`;

const AgentImage = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
`;

const ProductTitleWrapper = styled.div`
  display: flex;

  ${greaterThanMobile} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
  }

  ${forMobile} {
    margin-bottom: 40px;
  }
`;

const ProductSquareWrapper = styled(SquareWrapper)`
  ${greaterThanMobile} {
    display: flex;
    margin-right: 0;
    margin-bottom: 24px;
  }
`;

const ProductSquare = styled.div`
  ${greaterThanMobile} {
    width: 21px;
    height: 8px;

    &:nth-child(1) {
      background-color: #79E3A2;
    }
  
    &:nth-child(2) {
      background-color: #2ECA6A;
    }
  }

  ${forMobile} {
    width: 8px;
    height: 14px;

    &:nth-child(1) {
      background-color: #2ECA6A;
    }
  
    &:nth-child(2) {
      background-color: #79E3A2;
    }
  }
`;

const ProductTitle = styled.div`
  color: #252525;

  ${greaterThanMobile} {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 4px;
    font-weight: 500;
  }

  ${forMobile} {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 2.5px;
    font-weight: 400;
  }
`;

const ProductWrapper = styled.div`
  ${forMobile} {
    display: flex;
    padding-bottom: 100px;
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

const View = () => {
  const history = useHistory();
  const { id: selectedId } = useParams();
  const { width } = useWindowDimensions();
  const { categoryList, productList } = data;
  const {
    title,
    description,
    imageList,
    mainCategory,
    subCategory,
    youTubeEmbedId,
    agent,
  } = productList.filter(({ id }) => id === Number(selectedId))[0];

  return (
    <Wrapper>
      <BreadCrumbWrapper>
        <BreadCrumb handleButtonClick={() => history.push(`/list/${mainCategory}`)}>{categoryList[mainCategory].text}</BreadCrumb>/
        <BreadCrumb handleButtonClick={() => history.push(`/list/${subCategory}`)}>{categoryList[mainCategory].subCategoryList[subCategory].text}</BreadCrumb>/
        產品介紹
      </BreadCrumbWrapper>
      <TopWrapper>
        <ImageSwiper imageList={imageList} />
        <ContentWrapper>
          <Title>{title}</Title>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          <ContactUsButton
            color="#FFFFFF"
            backgroundColor="#2ECA6A"
            handleButtonClick={() => history.push("/contact")}
          >
            購買請聯絡我們
          </ContactUsButton>
        </ContentWrapper>
      </TopWrapper>
      {(youTubeEmbedId || agent) && (
        <BottomWrapper>
          {youTubeEmbedId && (
            <Section>
              <TitleWrapper>
                <SquareWrapper>
                  <Square />
                  <Square />
                </SquareWrapper>
                <SubTitle>產品操作影片</SubTitle>
              </TitleWrapper>
              <YouTubeIframe id={youTubeEmbedId} />
            </Section>
          )}
          {agent && (
            <Section>
              <TitleWrapper>
                <SquareWrapper>
                  <Square />
                  <Square />
                </SquareWrapper>
                <SubTitle>海外代理商</SubTitle>
              </TitleWrapper>
              <AgentImage src={agent} alt="agent" />
            </Section>
          )}
        </BottomWrapper>
      )}
      <ProductTitleWrapper>
        <ProductSquareWrapper>
          <ProductSquare />
          <ProductSquare />
        </ProductSquareWrapper>
        <ProductTitle>推薦商品</ProductTitle>
      </ProductTitleWrapper>
      <ProductWrapper>
        <ProductList>
          {productList.filter(productItem => {
            return productItem.mainCategory === mainCategory
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
    </Wrapper>
  );
};

export default View;
