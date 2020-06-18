/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Action, Dispatch } from 'redux';

import logo from '../../images/logout_blue.svg';
import { AppState } from '../../shared';
import { logOut } from '../../store';
import HeaderWrapper from './HeaderJss';


const mapStateToProps = ({ loginState }: AppState) => ({
  isAuthenticated: loginState.isAuthenticated
});

const mapDispatchToProps = (dispatch:Dispatch<Action<any>>)=>({
  onLogout: ()=>dispatch(logOut())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export type HeaderProps = ConnectedProps<typeof connector>;


/**
 * Header Component
 */
export const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }:HeaderProps) => {
  const history = useHistory();
  const onClickLogout = () => {
    onLogout();
    history.push('/');
  };

  return (
    <HeaderWrapper>
      <button className='home-button' onClick={onClickLogout}>Swapi React</button>
      {isAuthenticated && <img test-id='logout-icon' onClick={onLogout} src={logo} alt='swapi react'></img>}
    </HeaderWrapper>
  );
};
export default connector(Header);
