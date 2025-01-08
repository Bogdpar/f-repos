import React,   { FC } from 'react';
import styles from './CommentsListItem.module.scss';
import { IComment } from '../../../../../types/types';
const CommentsListItem: FC<IComment> = ({ data }) => {
  return (
    <div className={styles.wraper}>
      <div className={styles.wra}>
        <div className={styles.comment}>
          <h3>{data.email}</h3>
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};
export default CommentsListItem;
