import React from 'react';
import {
  Formik,
  Form as DefaultForm,
  Field,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
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

const FieldWrapper = styled.div`
  ${greaterThanMobile} {
    & + & {
      margin-top: 24px;
    }
  }

  ${forMobile} {
    & + & {
      margin-top: 20px;
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #7C7C7C;
`;

const Tag = styled.span`
  margin-left: 8px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1.2px;
  font-weight: 300;
  color: #E95B2E;
`;

const CustomField = styled.input`
  width: 100%;
  border: none;
  ${({ isError }) => isError && 'outline: 1px solid #E95B2E;'}
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.2px;
  font-weight: 300;
  background-color: #F2F3F5;
  transition: none;

  &:focus {
    outline: 1px solid #27B95F;
  }

  &::placeholder {
    color: #7C7C7C;
  }

  ${greaterThanMobile} {
    padding: 36px 20px;
    border-radius: 12px;
  }

  ${forMobile} {
    padding: 20px;
    border-radius: 8px;
  }
`;

const CustomTextArea = styled(CustomField)`
  height: 274px;
  resize: none;
`;

const CustomErrorMessage = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.2px;
  font-weight: 400;
  color: #E95B2E;

  > i {
    margin-right: 6px;
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
      {formik => (
        <Wrapper>
          <InnerWrapper>
            <LeftWrapper>
              <FieldWrapper>
                <Label htmlFor="name">姓名<Tag>必填</Tag></Label>
                <Field name="name">
                  {({ field, meta: { touched, error } }) => (
                    <CustomField
                      isError={touched && error}
                      type="text"
                      placeholder="請輸入" {...field}
                    />
                  )}
                </Field>
                <ErrorMessage name="name">
                  {msg => <CustomErrorMessage><i className="fas fa-exclamation-triangle"></i>{msg}</CustomErrorMessage>}
                </ErrorMessage>
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="phone">電話號碼<Tag>必填</Tag></Label>
                <Field name="phone">
                  {({ field, meta: { touched, error } }) => (
                    <CustomField
                      isError={touched && error}
                      type="tel"
                      placeholder="0978639128"
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage name="phone">
                  {msg => <CustomErrorMessage><i className="fas fa-exclamation-triangle"></i>{msg}</CustomErrorMessage>}
                </ErrorMessage>
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="mail">電子信箱<Tag>必填</Tag></Label>
                <Field name="email">
                  {({ field, meta: { touched, error } }) => (
                    <CustomField
                      isError={touched && error}
                      type="email"
                      placeholder="請輸入"
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage name="email">
                  {msg => <CustomErrorMessage><i className="fas fa-exclamation-triangle"></i>{msg}</CustomErrorMessage>}
                </ErrorMessage>
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="content">留言內容<Tag>必填</Tag></Label>
                <Field
                  name="message"
                >
                  {({ field, meta: { touched, error } }) => (
                    <CustomTextArea
                      as="textarea"
                      isError={touched && error}
                      type="text"
                      {...field}
                    />
                  )}
                </Field>
                <ErrorMessage name="message">
                  {msg => <CustomErrorMessage><i className="fas fa-exclamation-triangle"></i>{msg}</CustomErrorMessage>}
                </ErrorMessage>
              </FieldWrapper>
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
            disabled={formik.isSubmitting}
          >
            送出內容
          </CustomButton>
        </Wrapper>
      )}
    </Formik>
  );
};

export default Form;
