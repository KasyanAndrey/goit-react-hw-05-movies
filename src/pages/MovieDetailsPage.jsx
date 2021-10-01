import { useState, useEffect } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import * as moviesApi from '../services/moviesApi';

import ButtonGoBack from '../components/ButtonGoBack/ButtonGoBack';
import MovieCard from '../components/MovieCard/MovieCard';

import Cast from './Cast';
import Reviews from './Reviews';


export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    moviesApi.fetchDetailsMovie(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <ButtonGoBack>Go Back</ButtonGoBack>

      {movie && (
        <>
          <MovieCard movie={movie} />

          <hr />
          <p>Additional information</p>
          <ul>
            <Link to={`${url}/cast`}>Cast</Link>
            <Link to={`${url}/reviews`}>Reviews</Link>
          </ul>

          <hr />
          <Switch>
            <Route path="/movies/:movieId/cast" exact>
              <Cast />
            </Route>

            <Route path="/movies/:movieId/reviews"exact>
            <Reviews />
          </Route>
          </Switch>
        </>
      )}
    </>
  );
}
