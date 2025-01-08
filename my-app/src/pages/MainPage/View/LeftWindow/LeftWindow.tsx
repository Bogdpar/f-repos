import React, { FC } from 'react';
import styles from './LeftWindow.module.scss';
const LeftWindow: FC = () => {
  return (
    <div className={styles.leftWindow}>
      <div className={styles.title}>
        <h1>Interstellar</h1>
      </div>
      <div className={styles.descrip}>
        <p>
          When Earth becomes uninhabitable in the future, a farmer and ex-NASA
          pilot, Joseph Cooper tastes to pilot a spacecraf, alone with a time of
          researches, to find a new planet for humans{' '}
        </p>
      </div>
      <div className={styles.data}>
        <span>2014</span>
        <span>Fiction</span>
        <span>1 h 53m</span>
      </div>
    </div>
  );
};
export default LeftWindow;
