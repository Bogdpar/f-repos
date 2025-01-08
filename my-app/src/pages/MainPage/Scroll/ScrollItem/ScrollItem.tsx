import React, { FC } from 'react';
import styles from './ScrollItem.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../resources/routes-constants';
interface ScrollItemProps {
  data: {
    year: string;
    grade: string;
    name: string;
    img: string;
    id: string;
  };
}
const ScrollItem: FC<ScrollItemProps> = ({ data }) => {

  return (


    <Link to={ROUTES.FILMPAGE_ROUTE}>
      <div className={styles.wraper}>
        <div className={styles.img}>
          <img src={data.img} alt={data.name} />
        </div>
        <div className={styles.data}>
          <div>
            <h3>{data.name}</h3>
          </div>
          <div>
            <span>
              {data.year} &#x2B50; {data.grade}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ScrollItem;
