import React from 'react';
import Search from './components/Search';
import MoviesList from '../../shared/MoviesList/MoviesList';

import styles from './styles.scss';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <MoviesList />
      </div>
    );
  }
}

export default MainPage;