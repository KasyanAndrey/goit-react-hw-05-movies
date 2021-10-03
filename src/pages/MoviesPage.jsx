import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as moviesApi from '../services/moviesApi';

import Searchbar from '../components/Searchbar/Searchbar';
import MovieList from '../components/MovieList/MovieList';

export default function MoviesPage() {
  const location = useLocation();
  const url = new URLSearchParams(location.search).get('query');
  const history = useHistory();
  const [movies, setMovie] = useState(null);
  const [query, setQuery] = useState(url ?? '');

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchMovies = () => {
      moviesApi.fetchQueryMovie(query).then(movie => {
        if (movie.length === 0) {
          toast.error('Please enter a more correct request!');

          return;
        }

        setMovie(movie);
      });
    };

    fetchMovies();
  }, [query, url]);

  const handleFormSubmit = query => {
    history.push({
      ...location,
      search: `query=${query}`,
    });

    setQuery(query);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      
      {movies && <MovieList movies={movies} location={location} />}
      <ToastContainer autoClose={3000} />
    </>
  );
}
