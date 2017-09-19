import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieItem.scss';

class MovieItem extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    year: PropTypes.number,
    category: PropTypes.string,
    poster: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, year, category, poster } = this.props;
    return (
      <div className={styles.movieContainer}>
        <div className={styles.movieImage}>
          <img src={poster} alt={name}/>
        </div>
        <div className={styles.movieInfo}>
          <div>
            <h4>{name}</h4>
            <p>{category}</p>
          </div>
          <span>{year}</span>
        </div>
      </div>
    );
  }
}

export default MovieItem;