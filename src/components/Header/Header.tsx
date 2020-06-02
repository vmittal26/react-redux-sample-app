import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../images/logout_blue.svg';
import { GlobalContext } from '../../shared';
import HeaderWrapper from './HeaderJss';


/**
 * Header Component
 */
export const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const { userContext } = useContext(GlobalContext);
  const history = useHistory();

  const onLogout = () => {
    userContext.setIsAuthenticated(false);
    history.push('/');
  };

  React.useEffect(() => {
    const unlisten = history.listen(() => {
      // on coming back to login page authentication flag should be set to false
      setIsLoggedIn(userContext.getIsAuthenticated());
    });

    return unlisten;
  }, [history, userContext]);

  return (
    <HeaderWrapper>
      <button className='home-button' onClick={onLogout}>Swapi React</button>
      {isLoggedIn && <img onClick={onLogout} src={logo} alt='swapi react'></img>}
    </HeaderWrapper>
  );
};
