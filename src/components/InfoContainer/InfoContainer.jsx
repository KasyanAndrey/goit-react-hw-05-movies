import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import s from './InfoContainer.module.css';

export default function InfoContainer({ url, location }) {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Additional information</p>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location.state.from },
            }} className={s.link}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location.state.from },
            }} className={s.link}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

InfoContainer.propTypes = {
  url: PropTypes.string,
  location: PropTypes.object,
};
