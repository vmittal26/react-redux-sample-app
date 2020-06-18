import React, { ReactElement } from 'react';
import { Form, Button } from 'react-bootstrap';
import { LoginValues, ErrorMessage } from '../../shared';
import { FormikErrors, FormikTouched } from 'formik';

interface LoginFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  touched:FormikTouched<LoginValues>;
  isSubmitting: boolean;
  errors: FormikErrors<LoginValues>;
}

export const LoginForm = (props: LoginFormProps): ReactElement => {
  const {
    handleSubmit,
    touched: { userName: userNameTouched, password: passwordTouched },
    handleChange,
    handleBlur,
    isSubmitting,
    errors: { userName, password }
  } = props;
  return (
    <Form onSubmit={handleSubmit} autoComplete='false'>
      <Form.Group>
        <Form.Label>User name</Form.Label>
        <Form.Control
          id="userName"
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter username"
        />
        {userNameTouched && userName && <ErrorMessage>{userName}</ErrorMessage>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          id="password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Password"
        />
        {passwordTouched && password && <ErrorMessage>{password}</ErrorMessage>}
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isSubmitting}>
        Login
      </Button>
    </Form>
  );
};
