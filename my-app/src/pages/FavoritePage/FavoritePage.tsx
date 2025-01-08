import React, { FC } from "react";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import styles from './FavoritePage.module.scss'
import { useAppSelector } from "../../hooks/storeHooks";
import FilmListItem from "../MainPage/FilmList/FilmListItem/FilmLIstItem";

const FavoritePage: FC = () => {
  const bookmarks = useAppSelector((state) => state.bookmarks.items)
  

  return (
    <div>
      <div>
        <LeftMenu />
      </div>
      <div className={styles.title}>
        <h1>Your Favorites</h1>
      </div>
      <div className={styles.wraper}>
        {bookmarks.map(item => {
          return <FilmListItem data={item} key={item.id} isInFavor={true}/>;
        })}
      </div>
    </div>
  )
}

export default FavoritePage;
