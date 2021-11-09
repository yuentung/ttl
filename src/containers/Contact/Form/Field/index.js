import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import { forMobile, greaterThanMobile } from '../../../../theme/breakpoints';

const Wrapper = styled.div`
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

const Input = styled.input`
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

const Textarea = styled(Input)`
  height: 274px;
  resize: none;
`;

const ErrorMessage = styled.div`
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

const Field = ({
  label,
  isRequired,
  as,
  ...props
}) => {
  const [field, { touched, error }] = useField(props);

  return (
    <Wrapper>
      <Label htmlFor={field.name}>
        {label}
        {isRequired && <Tag>必填</Tag>}
      </Label>
      {as === 'textarea' ? (
        <Textarea
          as="textarea"
          id={field.name}
          isError={touched && error}
          {...field}
          {...props}
        />
      ) : (
        <Input
          id={field.name}
          isError={touched && error}
          {...field}
          {...props}
        />
      )}
      {touched && error ? (
        <ErrorMessage>
          <i className="fas fa-exclamation-triangle"></i>
          {error}
        </ErrorMessage>
      ) : null}
    </Wrapper>
  );
};

export default Field;
