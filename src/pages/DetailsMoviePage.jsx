import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as moviesApi from '../services/moviesApi';

export default function DetailsMoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesApi.fetchDetailsMovie(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img src={movie.poster_path} alt={movie.media_type} />
        </>
      )}
    </>
  );
}
