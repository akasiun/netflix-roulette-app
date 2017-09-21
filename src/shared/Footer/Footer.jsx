import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Footer.css';

class Footer extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={styles.footerContainer}>
        <Logo />
      </div>
    );
  }
}

export default Footer;