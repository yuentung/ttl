import React, { useState } from 'react';
import styled from 'styled-components';
import { greaterThanMobile, forMobile } from '../../../theme/breakpoints';

const Wrapper = styled.div``;

const MainImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;

  ${greaterThanMobile} {
    width: 580px;
    height: 435px;
    margin-bottom: 20px;
  }

  ${forMobile} {
    width: 100%;
    margin-bottom: 12px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const SubImage = styled.img`
  display: block;
  border: 1px solid ${({ selected }) => selected ? '#2ECA6A' : '#F6F6F6'};
  object-fit: cover;
  object-position: center;
  cursor: pointer;

  &:hover {
    border: 1px solid #2ECA6A;
  }

  ${greaterThanMobile} {
    width: 100px;
    height: 100px;

    & + & {
      margin-left: 20px;
    }
  }

  ${forMobile} {
    width: calc((100% - 48px) / 5);

    & + & {
      margin-left: 12px;
    }
  }
`;

const ImageSwiper = ({ imageList }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Wrapper>
      <MainImage src={imageList[selectedIndex]} />
      <InnerWrapper>
        {imageList.map((image, index) => {
          return (
            <SubImage
              key={index}
              src={image}
              onClick={() => setSelectedIndex(index)}
              selected={index === selectedIndex}
            />
          )
        })}
      </InnerWrapper>
    </Wrapper>
  );
};

export default ImageSwiper;
