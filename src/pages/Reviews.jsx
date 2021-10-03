import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as moviesApi from '../services/moviesApi';
import s from '../components/MovieCard/Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setreviews] = useState(null);

  useEffect(() => {
    moviesApi.fetchReviewsMovie(movieId).then(setreviews);
  }, [movieId]);

  return (
    <>
      {reviews && reviews.results[0] ? (
        <ul className={s.list}>
          {reviews.results.map(result => (
            <li key={result.id} className={s.item}>
              <h3 className={s.autor}>Autor: {result.author}</h3>
              <p className={s.content}>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.notification}>{`We don't have any reviews for this movie.`}</p>
      )}
    </>
  );
}
