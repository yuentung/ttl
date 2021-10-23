import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LineWrapper = styled.div`
  position: relative;
  width: 1px;
  height: 67px;
  margin-bottom: 16px;
`;

const Line = styled.div`
  position: absolute;
  width: 1px;
  background-color: #FFFFFF;
  animation: stretch 1.5s infinite;

  @keyframes stretch {
    0% { top: 0; bottom: 67px; }
    50% { top: 0; bottom: 0; }
    51% { top: 0; bottom: 0; }
    100% { top: 67px; bottom: 0; }
  }
`;

const Text = styled.div`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.25em;
  font-weight: 500;
  color: #FFFFFF;
  writing-mode: vertical-rl;
`;

const Scroll = ({ className }) => {
  return (
    <Wrapper className={className}>
      <LineWrapper>
        <Line />
      </LineWrapper>
      <Text>SCROLL</Text>
    </Wrapper>
  );
};

export default Scroll;
