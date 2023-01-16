import React from 'react';
import Navigation from './Navigation';

import styles from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={`${styles.header} ${props.className}`}>
        <p>Welcome to my little project</p>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
