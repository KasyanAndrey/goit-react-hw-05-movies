// import PropTypes from 'prop-types';

import s from './ButtonGoBack.module.css'

export default function ButtonGoBack(props) {
  return (
    <button type="button" onClick={props.onClick} className={s.Button}>
      {props.children}
    </button>
  );
}

// ButtonGoBack.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.string,
// };
