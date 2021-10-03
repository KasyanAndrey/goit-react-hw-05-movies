import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as moviesApi from '../services/moviesApi';

import MovieList from '../components/MovieList/MovieList';

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(setMovies);
  }, []);

  return <>{movies && <MovieList movies={movies} location={location} />}</>;
}
