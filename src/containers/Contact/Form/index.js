import React, { useState } from 'react';
import {
  Formik,
  Form as DefaultForm,
} from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import Field from './Field';
import SuccessMessage from './SuccessMessage';
import Map from '../../../components/Map';
import Button from '../../../components/Button';
import { forDesktop, forMobile, greaterThanDesktop, greaterThanMobile } from '../../../theme/breakpoints';

const Wrapper = styled(DefaultForm)`
  background-color: #FFFFFF;

  ${greaterThanMobile} {
    padding: 72px 100px;
  }

  ${forMobile} {
    padding: 32px 20px 40px;
  }
`;

const InnerWrapper = styled.div`
  ${greaterThanDesktop} {
    display: flex;
    margin-bottom: 80px;
  }
`;

const LeftWrapper = styled.div`
  ${greaterThanDesktop} {
    flex-grow: 1;
    margin-right: 56px;
  }

  ${forDesktop} {
    margin-bottom: 24px;
  }
`;

const RightWrapper = styled.div`
  ${greaterThanDesktop} {
    display: flex;
    flex-direction: column;
  }

  ${forDesktop} {
    display: none;
  }
`;

const TopWrapper = styled.div`
  border: 1px solid #D3D3D3;

  ${greaterThanDesktop} {
    padding: 40px;
    margin-top: 36px;
    margin-bottom: auto;
  }

  ${forDesktop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 48px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;

  & + & {
    margin-top: 16px;
  }
`;

const InfoTitle = styled.div`
  width: 70px;
  margin-right: 24px;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #7C7C7C;
`;

const InfoDescription = styled.div`
  line-height: 32px;
  letter-spacing: 0.05em;
  font-size: 20px;
  font-weight: 300;
  color: #7C7C7C;
`;

const Address = styled.div`
  margin-bottom: 48px;
  text-align: center;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #7C7C7C;
`;

const CustomMap = styled(Map)`
  height: 361px;
`;

const CustomButton = styled(Button)`
  margin: 0 auto;
  
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const formatPhoneNumber = number => {
  let numberWithoutHyphen = number.replaceAll('-', '');

  if (numberWithoutHyphen.length > 7) {
    return `${numberWithoutHyphen.slice(0, 4)}-${numberWithoutHyphen.slice(4, 7)}-${numberWithoutHyphen.slice(7, 10)}`;
  } else if (numberWithoutHyphen.length > 4) {
    return `${numberWithoutHyphen.slice(0, 4)}-${numberWithoutHyphen.slice(4)}`;
  } else {
    return numberWithoutHyphen;
  }
};

const Form = () => {
  const [showMessage, setShowMessage] = useState(false);

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
        phone: Yup.string().matches(/^(09)[0-9]{2}-[0-9]{3}-[0-9]{3}$/).required(),
        email: Yup.string().email().required(),
        message: Yup.string().required(),
      })}
      onSubmit={async (values, { resetForm }) => {
        await emailjs.send('service_e1xk04s', 'template_u6ejf0v', { ...values }, 'user_vx8JH9iDr7zISPW0efVHG')
          .then(() => {
            resetForm();
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 2000);
          }, (error) => {
            console.error(JSON.stringify(error));
          });
      }}
    >
      {({ setValues, isSubmitting }) => (
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
                label="手機號碼"
                type="tel"
                placeholder="0978-639-128"
                onChange={event => {
                  setValues(values => ({
                    ...values,
                    phone: formatPhoneNumber(event.target.value),
                  }));
                }}
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
            borderColor="#2ECA6A"
            color="#2ECA6A"
            hoverColor="#27B95F"
            activeColor="#1CA04F"
            type="submit"
            disabled={isSubmitting}
          >
            送出內容
          </CustomButton>
          <SuccessMessage show={showMessage} />
        </Wrapper>
      )}
    </Formik>
  );
};

export default Form;
