import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import * as moviesApi from '../services/moviesApi';
import Searchbar from '../components/Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Loader from '../components/Loader/Loader';

export default function MoviesPage() {
  const [movies, setMovie] = useState(null);
  const [query, setQuery] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();

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
  }, [query]);

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
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
      <ToastContainer autoClose={3000} />
    </>
  );
}
