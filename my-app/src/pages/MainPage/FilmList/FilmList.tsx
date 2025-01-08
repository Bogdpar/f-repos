import FilmListItem from './FilmListItem/FilmLIstItem';
import styles from './FilmList.module.scss';
import React, { FC } from 'react';
import { IAxiosQuery } from '../../../types/types';
interface FilmListProps {
  data: IAxiosQuery[];
}
const FilmList: FC<FilmListProps> = ({ data }) => {
  return (
    <div className={styles.wraper}>
      {data.map(item => {
        return <FilmListItem data={item} key={item.id} isInFavor={false}/>;
      })}
    </div>
  );
};
export default FilmList;
