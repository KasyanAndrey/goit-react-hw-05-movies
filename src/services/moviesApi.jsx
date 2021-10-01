const KEY = 'f67bdd430ce819844e2a075541409928';
const BASE_URL = 'https://api.themoviedb.org/3/';

function fetchTrendingMovies() {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${KEY}`)
    .then(responce => {
      if (responce.ok) {
        return responce.json();
      }

      return Promise.reject(new Error('Not found'));
    })
    .then(responce => responce.results);
}

function fetchQueryMovie(searchQuery) {
  return fetch(`${BASE_URL}search/movie?api_key=${KEY}&query=${searchQuery}`)
    .then(responce => responce.json())
    .then(responce => responce.results);
}

function fetchDetailsMovie(movieId) {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${KEY}`).then(responce => {
    if (responce.ok) {
      return responce.json();
    }

    return Promise.reject(new Error('Not found'));
  });
}

function fetchActorsMovie(movieId) {
  return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${KEY}`).then(
    responce => {
      if (responce.ok) {
        return responce.json();
      }

      return Promise.reject(new Error('Not found'));
    },
  );
}

function fetchReviewsMovie(movieId) {
  return fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}`).then(
    responce => {
      if (responce.ok) {
        return responce.json();
      }

      return Promise.reject(new Error('Not found'));
    },
  );
}

export {
  fetchTrendingMovies,
  fetchQueryMovie,
  fetchDetailsMovie,
  fetchActorsMovie,
  fetchReviewsMovie,
};
