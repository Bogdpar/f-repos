import styles from './FilmPage.module.scss'
import Header from './Header/Header'
import Inner from './Inner/Inner'
import Scrol from './Scroll/Scrol'
import Comments from './Comments/Comments'
import React, { FC } from 'react'
import LeftMenu from '../../components/LeftMenu/LeftMenu'
const FilmPage: FC = () => {
  return (
    <><LeftMenu />
      <div className={styles.wraper}>
        <Header />
        <Inner />
        <Scrol />
        <Comments />
      </div>
    </>

  )
}
export default FilmPage
