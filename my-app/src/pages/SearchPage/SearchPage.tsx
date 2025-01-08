import { Search } from 'lucide-react';
import styles from './SearchPage.module.scss';
import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import FilmListItem from '../MainPage/FilmList/FilmListItem/FilmLIstItem';
import { useMemo } from 'react';
import { IAxiosQuery } from '../../types/types';
import LeftMenu from '../../components/LeftMenu/LeftMenu';

const SearchPage: FC = () => {
  const [data, setData] = useState<IAxiosQuery[]>([]);
  const [seachQuery, setSearchQuery] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    for (let i = 1; i <= 5; i++) {
      axios.get<IAxiosQuery>(`http://localhost:3001/${i}`).then(response => {
        setData(prev => {
          const newData = [...prev];
          newData[i - 1] = response.data;
          return newData;
        });
        setLoad(false);
      });
    }
  }, []);

  const list = useMemo(() => {
    if (data.length === 0) return [];
    return data.flat();
  }, [data]);

  const filteredList = useMemo(() => {
    return list.filter(item =>
      item.name.toLowerCase().includes(seachQuery.toLowerCase())
    );
  }, [list, seachQuery]);

  if (load && data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <><LeftMenu />
      <div className={styles.wraper}>
        <div className={styles.subWraper}>
          <div className={styles.inp}>
            <input
              type='text'
              placeholder='Search'
              value={seachQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button><Search size={30} /></button>
          </div>
        </div>
        <div className={styles.list}>
          {filteredList.map(item => {
            return <FilmListItem data={item} key={item.id} isInFavor={false}/>;
          })}
        </div>
      </div></>
  );
};
export default SearchPage;
