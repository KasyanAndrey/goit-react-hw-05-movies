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
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesApi.fetchDetailsMovie(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      {movie && (
        <>
          <MovieCard movie={movie} onClickBack={onGoBack} />
          <InfoContainer url={url} location={location}/>

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
