import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import default_poster from '../../images/default_poster.jpg';
import s from './MovieList.module.css';

export default function MovieList({ movies, location }) {
  return (
    <>
      <ul className={s.list}>
        {movies &&
          movies.map(movie => {
            let poster = movie.poster_path
              ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
              : default_poster;
            return (
              <li key={movie.id} className={s.item}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                  className={s.link}
                >
                  <img src={poster} alt={movie.original_title} className={s.movie__list}/>
                  {movie.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};
