import React from 'react';
import Logo from '../../../shared/Logo/Logo';
import styles from './Search.scss';

class Search extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.searchContainer}>
          <Logo />
          <h2 className={styles.title}>Find Your Movie</h2>
          <div className={styles.searchBlock}>
            <div>
              <label htmlFor="search"></label>
              <input className={styles.searchField} name="search" type="text" placeholder="Search for a movie ..."/>
            </div>
            <div className={styles.searchFilter}>
              <div>
                <span className={styles.text}>Search by</span>
                <button className={styles.filterBtn}>Title</button>
                <button className={styles.filterBtn}>Director</button>
              </div>
              <button className={styles.searchBtn}>Search</button>
            </div>
          </div>
        </div>
        <div className={styles.sortContainer}>
          <span className={styles.searchResult}>7 movies found</span>
          <div className={styles.sortOptions}>
            <span>Sort by</span>
            <a href="#">release date</a>
            <a href="#">rating</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;