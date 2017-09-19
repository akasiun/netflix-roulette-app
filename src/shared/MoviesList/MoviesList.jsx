import React from 'react';
import MovieItem from './components/MovieItem';

import styles from './MoviesList.scss';

const movies = [
  {
    id: 6226,
    name: 'Pulp Fiction',
    year: '1994',
    category: 'Oscar-winning Movies',
    poster: 'http://netflixroulette.net/api/posters/880640.jpg'
  },
  {
    id: 4535345,
    name: 'Kill Bill: Vol 1',
    year: '2003',
    category: 'Action & Adventure',
    poster: 'http://netflixroulette.net/api/posters/60031236.jpg'
  },
  {
    id: 345346,
    name: 'Kill Bill: Vol 2',
    year: '2004',
    category: 'Action & Adventure',
    poster: 'http://netflixroulette.net/api/posters/60032563.jpg'
  },
  {
    id: 8654,
    name: 'Django',
    year: '2012',
    category: 'Dramas',
    poster: 'http://netflixroulette.net/api/posters/60010514.jpg'
  },
  {
    id: 34363,
    name: 'Four Rooms',
    year: '1995',
    category: 'Comedies',
    poster: 'http://netflixroulette.net/api/posters/520179.jpg'
  },
  {
    id: 884999,
    name: 'Reservoir Dogs',
    year: '1992',
    category: 'Independent Movies',
    poster: 'http://netflixroulette.net/api/posters/902003.jpg'
  }
];

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMovies = () => {
    return movies.map((movie) => {
      const { id, name, year, category, poster } = movie;
      return (
        <MovieItem
          key={id}
          name={name}
          year={year}
          category={category}
          poster={poster}
        />
      );
    });
  }

  render() {
    return (
      <div className={styles.moviesList}>
        { this.renderMovies() }
      </div>
    );
  }
}

export default MoviesList;