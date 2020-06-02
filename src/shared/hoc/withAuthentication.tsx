/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useContext, ReactElement } from 'react';
import { Redirect } from 'react-router-dom';

import { GlobalContext, GlobalContextType } from '../utils/context/GlobalContext';


export const withAuthentication = (Component: React.FC) => ():ReactElement =>{
  const { userContext } = useContext<GlobalContextType>(GlobalContext);
  return (userContext.getIsAuthenticated() ? <Component /> : <Redirect to="/"/>);
};
