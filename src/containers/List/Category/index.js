import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { greaterThanMobile, forMobile } from '../../../theme/breakpoints';

const Wrapper = styled.div`
  border-top: 8px solid #2ECA6A;
  background-color: #FFFFFF;

  ${greaterThanMobile} {
    flex-shrink: 0;
    width: 264px;
    padding: 24px 32px;
    margin-right: 60px;
  }

  ${forMobile} {
    position: fixed;
    bottom: ${({ isOpen }) => isOpen ? '0' : '-640px'};
    z-index: 10;
    width: 100%;
    height: 640px;
    padding: 24px 32px 0;

  }
`;

const Label = styled.div`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.8px;
  color: #7C7C7C;
`;

const InnerWrapper = styled.div`
  height: ${({ isOpen, amount }) => isOpen ? `${(amount+1) * 57}px` : '57px'};
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E9E9E9;
  letter-spacing: 1.2px;
  color: ${({ isSelected }) => isSelected ? '#1CA04F' : '#252525'};
  cursor: pointer;

  > span {
    margin-right: 8px;
    letter-spacing: 8%;
    color: #2ECA6A;
  }
`;

const MainRow = styled(Row)`
  padding: 12px 4px 12px 8px;
  font-size: 16px;
  line-height: 32px;

  > span {
    font-weight: 700;
  }
`;

const SubRow = styled(Row)`
  padding: 16px 4px 16px 8px;
  font-size: 14px;
  line-height: 24px;

  > span {
    font-weight: 500;
  }
`;

const ArrowIcon = styled.i`
  padding: 8px;
  margin-right: -8px;
  margin-left: auto;
  font-size: 10px;
  color: #7C7C7C;
`

const Category = ({ categoryList, selectedCategory }) => {
  const history = useHistory();
  const [openStatus, setOpenStatus] = useState({
    equipment: false,
    vc: false,
  });

  return (
    <Wrapper isOpen={false}>
      <Label>分類</Label>
        {Object.entries(categoryList).map(([key, { text, subCategoryList }], index) => (
          <InnerWrapper
            key={text}
            isOpen={openStatus[key]}
            amount={subCategoryList && Object.keys(subCategoryList).length}
          >
            <MainRow
              isSelected={key === selectedCategory}
              onClick={() => history.push(key)}
            >
              <span>{`O${index + 1}`}</span>
              {text}
              {subCategoryList && (
                <ArrowIcon
                  className={`far fa-chevron-${openStatus[key] ? 'down' : 'up'}`}
                  onClick={e => {
                    e.stopPropagation();
                    setOpenStatus(prevStatus => ({
                      ...prevStatus,
                      [key]: !prevStatus[key],
                    }));
                  }}
                />
              )}
            </MainRow>
            {subCategoryList && Object.entries(subCategoryList).map(([key, { text }]) => (
              <SubRow
                key={text}
                isSelected={key === selectedCategory}
                onClick={() => history.push(key)}
              >
                <span>−</span>
                {text}
              </SubRow>
            ))}
          </InnerWrapper>
        ))}
    </Wrapper>
  );
};

export default Category;
