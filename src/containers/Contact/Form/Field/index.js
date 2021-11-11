import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import { forMobile, greaterThanMobile } from '../../../../theme/breakpoints';

const Wrapper = styled.div`
  ${greaterThanMobile} {
    & + & {
      margin-top: 16px;
    }
  }

  ${forMobile} {
    & + & {
      margin-top: 12px;
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
  border: 1px solid ${({ isError }) => isError ? '#E95B2E' : '#F2F3F5'};
  outline: none;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.2px;
  font-weight: 400;
  color: #252525;
  background-color: #F2F3F5;

  &:focus {
    border: 1px solid #27B95F;
  }

  &::placeholder {
    font-weight: 300;
    color: #7C7C7C;
  }

  ${greaterThanMobile} {
    padding: 18px 20px;
    border-radius: 12px;
  }

  ${forMobile} {
    padding: 12px 20px;
    border-radius: 8px;
  }
`;

const Textarea = styled(Input)`
  height: 274px;
  resize: none;
`;

const ErrorMessage = styled.div`
  height: 24px;
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
      <ErrorMessage>
        {touched && error ? (
          <>
            <i className="fas fa-exclamation-triangle"></i>
            {error}
          </>
        ) : null}
      </ErrorMessage>

    </Wrapper>
  );
};

export default Field;
