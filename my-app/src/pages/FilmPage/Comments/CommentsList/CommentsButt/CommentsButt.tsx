import React, { FC } from 'react';
import styles from './CommentsButt.module.scss';
interface CommentsButtProps {
  title: number;
  funk: React.Dispatch<React.SetStateAction<number>>;
}
const CommentsButt: FC<CommentsButtProps> = ({ funk, title }) => {
  return (
    <div className={styles.butt}>
      <button onClick={() => funk(title)}>{title}</button>
    </div>
  );
};
export default CommentsButt;
