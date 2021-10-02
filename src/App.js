import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Appbar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';

const HomePage = React.lazy(() =>
  import('./pages/HomePage.jsx' /* webpackChunkName: "home-page" */),
);
const MoviesPage = React.lazy(() =>
  import('./pages/MoviesPage.jsx' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = React.lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

export default function App() {
  return (
    <Container>
      <Appbar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

/* 
+ '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
- '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
+ '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
- /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
- /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
*/
