import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './MovieList.module.css';

export default function MovieList({ movies, location }) {
  return (
    <>
      <ul className={s.list}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id} className={s.item}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }} className={s.link}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.original_title}
                />
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};
