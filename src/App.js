import { Switch, Route } from 'react-router-dom';
import Appbar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import DetailsMoviePage from './pages/DetailsMoviePage';

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
          <DetailsMoviePage />
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
}
