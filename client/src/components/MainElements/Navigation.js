import React, { useContext } from 'react';
import AuthContext from '../Store/Auth-context';
import Button from '../UI/Button';
import styles from './Navigation.module.css';
import classes from '../UI/Button.module.css';

const Navigation = () => {
  const isLoggedCtx = useContext(AuthContext);
  // const isRegisteredCtx = useContext(AuthContext)
  return (
    <nav className={styles.nav}>
      <ul>
        {isLoggedCtx.isLogged && (
          <li>
            <Button
              className={classes.buttonNav}
              onClick={isLoggedCtx.isLogged ? isLoggedCtx.isShownProfile : ''}>
              Profile
            </Button>
          </li>
        )}
        {isLoggedCtx.isLogged && (
          <li>
            <Button
              className={classes.buttonNav}
              onClick={isLoggedCtx.isLogged ? isLoggedCtx.isShownFindUser : ''}>
              Find user
            </Button>
          </li>
        )}
        {isLoggedCtx.isLogged && (
          <li>
            <Button
              className={classes.buttonNav}
              onClick={
                isLoggedCtx.isLogged ? isLoggedCtx.isShownFindAllUsers : ''
              }>
              Find all users
            </Button>
          </li>
        )}
        {isLoggedCtx.isLogged && (
          <li>
            <Button
              className={classes.buttonNav}
              onClick={
                isLoggedCtx.isLogged ? isLoggedCtx.isShownUpdateUser : ''
              }>
              Update user
            </Button>
          </li>
        )}
        {isLoggedCtx.isLogged && (
          <li>
            <Button
              className={classes.buttonNav}
              onClick={
                isLoggedCtx.isLogged ? isLoggedCtx.isShownDeleteUser : ''
              }>
              Delete user
            </Button>
          </li>
        )}
        {isLoggedCtx.isLogged && (
          <li>
            <Button
              className={classes.buttonNav}
              onClick={isLoggedCtx.onLogout}>
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
