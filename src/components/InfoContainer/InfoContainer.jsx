import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function InfoContainer({ url }) {
  return (
    <div>
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`${url}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}

InfoContainer.propTypes = {
  url: PropTypes.string.isRequired,
};
