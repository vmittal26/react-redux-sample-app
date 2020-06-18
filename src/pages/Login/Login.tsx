/* eslint-disable no-console */
import { Formik } from 'formik';
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { object, string } from 'yup';

import { LoginForm } from '../../components';
import { AppState, LoginValues } from '../../shared';
import { onLogin } from '../../store';
import { LoginContainer } from './LoginCss';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>)=>({
  onSubmitLoginForm: (values:LoginValues)=> dispatch(onLogin(values))
});

const mapStateToProps = ({ loginState }:AppState)=>({
  ...loginState
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

const LoginPage = (props:PropsFromRedux): React.ReactElement => {
  const {
    onSubmitLoginForm, isError, isAuthenticated, isSubmitting, errorMessage
  } = props;

  const onSubmit = (values:LoginValues):void=> {
    onSubmitLoginForm(values);
  };

  let login = (
    <LoginContainer>
      {isError && (
        <Alert variant="danger">
          <span>{errorMessage}</span>
        </Alert>
      )}
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={object().shape({
          userName: string().required('Please Enter User Name'),
          password: string().required('Please Enter Password')
        })}
      >
        {({
          handleSubmit, errors, handleBlur, touched, handleChange
        }) => (
          <LoginForm
            errors={errors}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            touched= {touched}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    </LoginContainer>
  );
  if (isAuthenticated) {
    login = <Redirect to='/home' />;
  }
  return login;
};


export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
