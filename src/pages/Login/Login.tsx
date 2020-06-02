import React, { useContext, useReducer } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import { object, string } from 'yup';
import { Formik } from 'formik';
import { LoginForm } from '../../components';
import { initialState, loginReducer } from '../../reducers/loginReducer';
import { GlobalContext, LoginValues } from '../../shared';
import { fetchUserInfo } from '../../shared/utils/fetchUserInfo';
import { LoginContainer } from './LoginCss';

export const Login = (): React.ReactElement => {
  const { userContext } = useContext(GlobalContext);
  const history = useHistory();
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const onLogin = (values: LoginValues) => fetchUserInfo(values, dispatch);
  const {
    isAuthenticated, isError, isSubmitting, errorMessage
  } = state;
  // set usrr is  authenticated to true in context
  userContext.setIsAuthenticated(isAuthenticated);
  React.useEffect(() => {
    // set user  is  authenticated to false in context on coming back to login page
    userContext.setIsAuthenticated(false);
  }, [history, userContext]);

  let login = (
    <LoginContainer>
      {isError && (
        <Alert variant="danger">
          <span>{errorMessage}</span>
        </Alert>
      )}
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={onLogin}
        validationSchema={object().shape({
          userName: string().required('Please Enter User Name'),
          password: string().required('Please Enter Password')
        })}
      >
        {({
          handleSubmit, errors, handleBlur, handleChange
        }) => (
          <LoginForm
            errors={errors}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    </LoginContainer>
  );
  if (isAuthenticated) {
    login = <Redirect to="/home" />;
  }
  return login;
};
