import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import * as moviesApi from '../services/moviesApi';

import ButtonGoBack from '../components/ButtonGoBack/ButtonGoBack';
import MovieCard from '../components/MovieCard/MovieCard';
import InfoContainer from '../components/InfoContainer/InfoContainer';
import Loader from '../components/Loader/Loader';

const Cast = React.lazy(() =>
  import('./Cast.jsx' /* webpackChunkName: "cast" */),
);
const Reviews = React.lazy(() =>
  import('./Reviews.jsx' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    moviesApi.fetchDetailsMovie(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from.location ?? '/');
  };

  return (
    <>
      <ButtonGoBack onClick={onGoBack}>Go Back</ButtonGoBack>
      {movie && (
        <>
          <MovieCard movie={movie} />
          <InfoContainer url={url} />

          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/movies/:movieId/cast" exact>
                <Cast />
              </Route>

              <Route path="/movies/:movieId/reviews" exact>
                <Reviews />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
}
