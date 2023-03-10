import React from 'react';

import styles from './Footer.module.css';

const Footer = (props) => {
  return (
    <>
      <footer className={`${styles.footer} ${props.className}`}>
        {props.children}
        <p>Created by profa</p>
      </footer>
    </>
  );
};

export default Footer;
