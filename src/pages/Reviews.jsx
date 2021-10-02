import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as moviesApi from '../services/moviesApi';

export default function Cast({ movies }) {
  const { movieId } = useParams();
  const [reviews, setreviews] = useState(null);

  useEffect(() => {
    moviesApi.fetchReviewsMovie(movieId).then(setreviews);
  }, [movieId]);

  return (
    <>
      {reviews && reviews.results[0] ? (
        <ul>
          {reviews.results.map(result => (
            <li key={result.id}>
              <h3>Autor: {result.author}</h3>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        `We don't have any reviews for this movie.`
      )}
    </>
  );
}
