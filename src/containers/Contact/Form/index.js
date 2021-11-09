import React from 'react';
import {
  Formik,
  Form as DefaultForm,
} from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Field from './Field';
import Map from '../../../components/Map';
import Button from '../../../components/Button';
import { forMobile, forSmallMobile, greaterThanMobile } from '../../../theme/breakpoints';

const Wrapper = styled(DefaultForm)`
  background-color: #FFFFFF;

  ${greaterThanMobile} {
    padding: 72px 100px;
  }

  ${forMobile} {
    padding: 32px 20px 60px;
  }
`;

const InnerWrapper = styled.div`
  ${greaterThanMobile} {
    display: flex;
    margin-bottom: 80px;
  }
  
  ${forMobile} {
    margin-bottom: 60px;
  }
`;

const LeftWrapper = styled.div`
  ${greaterThanMobile} {
    flex-grow: 1;
    margin-right: 56px;
  }

  ${forMobile} {
    margin-bottom: 48px;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  border: 1px solid #D3D3D3;

  ${greaterThanMobile} {
    padding: 40px;
    margin-top: 36px;
    margin-bottom: auto;
  }

  ${forMobile} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 48px;
  }
`;

const InfoWrapper = styled.div`
  ${greaterThanMobile} {
    display: flex;

    & + & {
      margin-top: 16px;
    }
  }

  ${forMobile} {
    ${forSmallMobile} {
      &:last-child {
        margin-top: 16px;
      }
    }
  }
`;

const InfoTitle = styled.div`
  width: 70px;
  line-height: 32px;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #7C7C7C;

  ${greaterThanMobile} {
    margin-right: 24px;
    font-size: 16px;
  }

  ${forMobile} {
    font-size: 14px;
  }
`;

const InfoDescription = styled.div`
  line-height: 32px;
  letter-spacing: 0.05em;
  font-weight: 300;
  color: #7C7C7C;

  ${greaterThanMobile} {
    font-size: 20px;
  }

  ${forMobile} {
    font-size: 16px;
  }
`;

const Address = styled.div`
  margin-bottom: 48px;
  text-align: center;
  line-height: 32px;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #7C7C7C;

  ${greaterThanMobile} {
    font-size: 16px;
  }

  ${forMobile} {
    font-size: 14px;
  }
`;

const CustomMap = styled(Map)`
  ${greaterThanMobile} {
    height: 361px;
  }

  ${forMobile} {
    height: 271px;
  }
`;

const CustomButton = styled(Button)`
  font-weight: 400;

  ${greaterThanMobile} {
    padding: 21px 156px;  
    margin: 0 auto;
  }

  ${forMobile} {
    width: 100%;
    padding: 17px 0;
  }
`

const Form = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required(),
        phone: Yup.string().matches(/^(09)[0-9]{8}$/).required(),
        email: Yup.string().email().required(),
        message: Yup.string().required(),
      })}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Wrapper>
          <InnerWrapper>
            <LeftWrapper>
              <Field
                name="name"
                label="姓名"
                type="text"
                placeholder="請輸入"
                isRequired
              />
              <Field
                name="phone"
                label="電話號碼"
                type="tel"
                placeholder="0978639128"
                isRequired
              />
              <Field
                name="email"
                label="電子信箱"
                type="email"
                placeholder="請輸入"
                isRequired
              />
              <Field
                as="textarea"
                name="message"
                label="留言內容"
                isRequired
              />
            </LeftWrapper>
            <RightWrapper>
              <TopWrapper>
                <InfoWrapper>
                  <InfoTitle>聯絡電話</InfoTitle>
                  <InfoDescription>03-3753270</InfoDescription>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>傳真</InfoTitle>
                  <InfoDescription>03-3620057</InfoDescription>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoTitle>信箱</InfoTitle>
                  <InfoDescription>t3753270@gmail.com</InfoDescription>
                </InfoWrapper>
              </TopWrapper>
              <Address>桃園市八德區廣福路1123巷51之6號</Address>
              <CustomMap />
            </RightWrapper>
          </InnerWrapper>
          <CustomButton
            border="1px solid #2ECA6A"
            color="#2ECA6A"
            hoverColor="#27B95F"
            activeColor="#1CA04F"
            type="submit"
            disabled={isSubmitting}
          >
            送出內容
          </CustomButton>
        </Wrapper>
      )}
    </Formik>
  );
};

export default Form;
