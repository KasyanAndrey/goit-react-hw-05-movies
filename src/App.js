import { Switch, Route } from 'react-router-dom';
import Appbar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

export default function App() {
  return (
    <Container>
      <Appbar />

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
