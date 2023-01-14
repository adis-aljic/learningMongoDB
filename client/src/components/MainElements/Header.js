import React from 'react';

import styles from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={`${styles.header} ${props.className}`}>
        {props.children}
        <p>Welcome to my little project</p>
      </header>
    </>
  );
};

export default Header;
