import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
`;

const Button = styled.div`
  display: flex;
  cursor: pointer;
`;

const Text = styled.div`
  margin-right: 12px;
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.12em;
  font-weight: 500;
  color: #FFFFFF;
  writing-mode: vertical-rl;
`;

const LineTrack = styled.div`
  width: 4px;
  height: 100px;
  background-color: #C4C4C4;
`;

const LineThumb = styled.div`
  position: absolute;
  top: ${({ isTop }) => isTop ? '0' : '50%'};
  right: 0;
  width: 4px;
  height: 100px;
  background-color: #2ECA6A;
  animation: ${({ isTop }) => isTop ? 'bottomToTop' : 'topToBottom'} .5s;

  @keyframes bottomToTop {
    0% { top: 50%; }
    50% { top: 100%; }
    51% { top: -50%; }
    100% { top: 0; }
  }

  @keyframes topToBottom {
    0% { top: 0; }
    100% { top: 50%; }
  }
`;

const SwitchButton = ({ className, switchToTop, switchToBottom, isTop }) => {
  return (
    <Wrapper className={className}>
      <Button onClick={switchToTop}>
        <Text>VC</Text>
        <LineTrack />
      </Button>
      <Button onClick={switchToBottom}>
        <Text>TTL</Text>
        <LineTrack />
      </Button>
      <LineThumb isTop={isTop} />
    </Wrapper>
  );
};

export default SwitchButton;
