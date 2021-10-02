import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './Loader.module.css';

const LoaderSpiner = () => (
  <Loader
    type="TailSpin"
    color="#3f51b5"
    height={80}
    width={80}
    className={s.Loader}
    timeout={3000}
  />
);

export default LoaderSpiner;
