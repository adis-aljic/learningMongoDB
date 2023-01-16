import React, { useContext } from 'react';
import AuthContext from '../Store/Auth-context';

import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedCtx = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      <ul>
        {isLoggedCtx.isLogged && (
          <li>
            <a href="/">Profile</a>
          </li>
        )}
        {isLoggedCtx.isLogged && (
          <li>
            <a href="/">Find user</a>
          </li>
        )}
        {isLoggedCtx.isLogged && (
          <li>
            <a href="/">Find all users</a>
          </li>
        )}
        {isLoggedCtx.isLogged && (
          <li>
            <a href="/">Update user</a>
          </li>
        )}
        {isLoggedCtx.isLogged && (
          <li>
            <a href="/">Delete user</a>
          </li>
        )}
        {isLoggedCtx.isLogged && <li onClick={isLoggedCtx.onLogout}>Logout</li>}
      </ul>
    </nav>
  );
};

export default Navigation;
