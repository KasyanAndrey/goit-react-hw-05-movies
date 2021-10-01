import PropTypes from 'prop-types';

import s from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
    <div className={s.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <ul className={s.description__list}>
        <li>
          <h2>{movie.original_title}</h2>
          <p>User Score: {movie.vote_average}%</p>
        </li>
        <li>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </li>
        <li>
          <h3>Genres</h3>
          <ul className={s.genres__list}>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
