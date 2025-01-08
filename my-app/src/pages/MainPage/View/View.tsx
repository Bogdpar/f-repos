import RightWindow from './RightWindow/RightWindow';
import LeftWindow from './LeftWindow/LeftWindow';
import React, { FC } from 'react';
import styles from './View.module.scss';

const View: FC = () => {
  return (
    <div className={styles.wraper}>
      <LeftWindow />
      <RightWindow />
    </div>
  );
};
export default View;
