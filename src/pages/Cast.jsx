import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as moviesApi from '../services/moviesApi';
import s from '../components/MovieCard/Cast.module.css';


export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesApi.fetchActorsMovie(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul className={s.list}>
          {cast.cast.map(item => (
            <li key={item.id} className={s.item}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                    : null
                }
                alt={item.name}
              />
              <p className={s.name}>{item.name}</p>
              <p className={s.character}>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
