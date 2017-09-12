import React from 'react';
import style from './Hello.css';

class Hello extends React.Component {
  render() {
    return (
      <div className={style.greetings}>
        <h1>Hello beautiful people!!! :)</h1>
      </div>
    );
  }
}

export default Hello;