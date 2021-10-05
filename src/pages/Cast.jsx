import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as moviesApi from '../services/moviesApi';
import default_avatar from '../images/default_avatar.png';
import s from '../components/MovieCard/Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesApi.fetchActorsMovie(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && cast.cast[0] ? (
        <ul className={s.list}>
          {cast.cast.map(item => {
            let avatar = item.profile_path
              ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
              : default_avatar;
            return (
              <li key={item.id} className={s.item}>
                <img src={avatar} alt={item.name} className={s.cast__image}/>
                <p className={s.name}>{item.name}</p>
                <p className={s.character}>Character: {item.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p
          className={s.notification}
        >{`We have no information about the actors in this film.`}</p>
      )}
    </>
  );
}
