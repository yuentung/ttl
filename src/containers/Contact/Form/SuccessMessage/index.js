import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.4px;
  font-weight: 400;
  color: #505050;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  opacity: ${({ show }) => show ? '1' : '0'};
  
  > i {
    margin-right: 8px;
    color: #1CA04F;
  }
`;

const SuccessMessage = ({ show }) => (
  <Wrapper show={show}>
    <i className="fas fa-check-circle"></i>
    信件已成功送出
  </Wrapper>
);

export default SuccessMessage;
