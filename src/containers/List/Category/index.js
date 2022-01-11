import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { greaterThanMobile, forMobile } from '../../../theme/breakpoints';

const Wrapper = styled.div`
  ${forMobile} {
    position: relative;
    width: 100%;
    margin-bottom: 28px;
  }
`;

const SelectedWrapper = styled.div`
  ${greaterThanMobile} {
    display: none;
    width: 100%;
  }

  ${forMobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    padding: 0 16px;
    border: 1px solid #E9E9E9;
    border-radius: 4px;
    margin: 0 32px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.8px;
    color: #252525;
    background-color: #FFFFFF;
  }
`;

const DropdownWrapper = styled.div`
  background-color: #FFFFFF;

  ${greaterThanMobile} {
    flex-shrink: 0;
    width: 264px;
    padding: 24px 32px 12px;
    border-top: 8px solid #2ECA6A;
    margin-right: 60px;
  }

  ${forMobile} {
    position: absolute;
    top: 62px;
    z-index: 10;
    width: calc(100% - 64px);
    max-height: ${({ isOpen }) => isOpen ? '358px' : '0px'};
    border: ${({ isOpen }) => isOpen ? '1px solid #E9E9E9' : '0 solid #E9E9E9'};
    border-radius: 4px;
    margin: 0 32px;
    overflow: hidden;
  }
`;

const Label = styled.div`
  ${greaterThanMobile} {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.8px;
    color: #7C7C7C;
  }

  ${forMobile} {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  overflow: hidden;

  ${greaterThanMobile} {
    height: ${({ isOpen, amount }) => isOpen ? `${(amount) * 48 + 57}px` : '57px'};
  }

  ${forMobile} {
    height: ${({ isOpen, amount }) => isOpen ? `${amount * 36 + 60}px` : '56px'};
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  color: ${({ isSelected }) => isSelected ? '#1CA04F' : '#252525'};
  cursor: pointer;

  > span {
    margin-right: 8px;
    letter-spacing: 8%;
    color: #2ECA6A;
  }
`;

const MainRow = styled(Row)`
  &:not(:last-child) {
    border-top: 1px solid #E9E9E9;
  }

  > span {
    font-weight: 700;
  }

  ${greaterThanMobile} {
    padding: 12px 4px 12px 8px;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.2px;
  }

  ${forMobile} {
    height: 56px;
    margin: 0 20px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.8px;
  }
`;

const SubRow = styled(Row)`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.2px;

  > span {
    font-weight: 500;
  }

  ${greaterThanMobile} {
    padding: 12px 4px 12px 8px;
  }

  ${forMobile} {
    margin: 12px 20px 0;

    &:nth-child(2) {
      margin-top: -4px;
    }

    &:last-child {
      margin-bottom: 16px;
    }
  }
`;

const ArrowIcon = styled.i`
  padding: 8px;
  margin-right: -8px;
  margin-left: auto;
  color: #7C7C7C;

  ${greaterThanMobile} {
    font-size: 10px;
  }

  ${forMobile} {
    font-size: 14px;
  }
`

const Category = ({ categoryList, selectedCategory }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState({
    equipment: false,
    vc: false,
  });

  useEffect(() => {
    setOpenStatus({
      equipment: false,
      vc: false,
    })
  }, [isOpen])

  return (
    <Wrapper>
      <SelectedWrapper
        isOpen={isOpen}
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        {
          categoryList[selectedCategory]?.text
          || categoryList.equipment.subCategoryList[selectedCategory]?.text
          || categoryList.vc.subCategoryList[selectedCategory]?.text
        }
        <ArrowIcon className={`far fa-chevron-${isOpen ? 'down' : 'up'}`} />
      </SelectedWrapper>
      <DropdownWrapper isOpen={isOpen}>
        <Label>分類</Label>
        {Object.entries(categoryList).map(([key, { text, subCategoryList }], index) => (
          <InnerWrapper
            key={text}
            isOpen={openStatus[key]}
            amount={subCategoryList && Object.keys(subCategoryList).length}
          >
            <MainRow
              isSelected={key === selectedCategory}
              onClick={() => {
                history.push(key);
                setIsOpen(false);
              }}
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
                onClick={() => {
                  history.push(key);
                  setIsOpen(false);
                }}
              >
                <span>−</span>
                {text}
              </SubRow>
            ))}
          </InnerWrapper>
        ))}
      </DropdownWrapper>
    </Wrapper>
  );
};

export default Category;
