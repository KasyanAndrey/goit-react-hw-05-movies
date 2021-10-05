import PropTypes from 'prop-types';

import default_poster from '../../images/default_poster.jpg';
import s from './MovieCard.module.css';

export default function MovieCard({ movie, onClickBack }) {
  let poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    : default_poster;

  return (
    <>
      <button type="button" onClick={onClickBack} className={s.Button}>
        Go Back
      </button>
      <div className={s.wrapper}>
        <img src={poster} alt={movie.original_title} className={s.card__image}/>
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
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  onClickBack: PropTypes.func.isRequired,
};
