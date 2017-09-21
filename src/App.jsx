import React from 'react';
import MainPage from './pages/MainPage';

import styles from './shared/styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <MainPage />
      </div>
    );
  }
}

export default App;
