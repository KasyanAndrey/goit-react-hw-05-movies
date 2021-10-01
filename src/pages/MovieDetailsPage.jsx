import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../services/moviesApi';

import ButtonGoBack from '../components/ButtonGoBack/ButtonGoBack';
import MovieCard from '../components/MovieCard/MovieCard';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    moviesApi.fetchDetailsMovie(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <ButtonGoBack>Go Back</ButtonGoBack>

      {movie && (
        <>
          <MovieCard movie={movie}/>
        </>
      )}
    </>
  );
}
