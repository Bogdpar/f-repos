import React, { FC } from 'react';
import FilmPageScroll from './FilmPageScroll/FilmPageScroll';
import styles from './Scrol.module.scss';

const Scrol: FC = () => {
  return (
    <div className={styles.scroll}>
      <h1>Gallery</h1>
      <FilmPageScroll />
    </div>
  );
};
export default Scrol;
