import styles from './FilmListItem.module.scss';
import React, { FC, useState } from 'react';
import { IAxiosQuery } from '../../../../types/types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../resources/routes-constants';
import { Bookmark } from 'lucide-react';
import { addBookmark, removeBookmark } from '../../../../store/slice/BookmarkSlice'
import { useAppDispatch } from '../../../../hooks/storeHooks';
import { X } from 'lucide-react';
interface FilmLIstItemProps {
  data: IAxiosQuery;
  isInFavor: boolean;
}
const FilmListItem: FC<FilmLIstItemProps> = ({ data, isInFavor }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddBookmark = () => {
    const newBookm = data;
    dispatch(addBookmark(newBookm))
    setIsActive(prev => !prev);
  }
  const handleRemoveBookmark = (id: string) => {
    dispatch(removeBookmark(id));
  }

  return (
    <div className={styles.wrap}>
      < Link to={ROUTES.FILMPAGE_ROUTE}>
        <div
          onClick={() => {
            window.scrollTo({
              top: 0
            });
          }}
          className={styles.wraper}
        >
          <div className={styles.img}>
            <img src={data.img} alt={data.name} />
          </div>
          <div className={styles.subWraper}>
            <div className={styles.name}>
              <h3>{data.name}</h3>
            </div>
            <div className={styles.info}>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </Link >
      <div className={styles.bookmWrap}>
        {isInFavor
          ?
          <div onClick={() => handleRemoveBookmark(data.id)} className={styles.bookm}><X size={30} /></div>
          :
          <div onClick={handleAddBookmark} className={isActive === false ? styles.bookm : styles.bookmActive}><Bookmark size={30} /></div>}
      </div>
    </div>
  );
};
export default FilmListItem;
