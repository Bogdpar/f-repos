import { FC } from 'react';
import styles from './Loader.module.scss';
const Loader: FC = () => {
  return (
    <div className={styles.wraper}>
      <div className={styles.custom_loader}></div>;
    </div>
  );
};
export default Loader;
