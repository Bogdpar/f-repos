import MainPageItem from './MainPageItem/MainPageItem'
import styles from './MainPage.module.scss'
import React, { FC } from 'react'
import LeftMenu from '../../components/LeftMenu/LeftMenu'

const MainPage: FC = () => {
  return (
    <div className={styles.wraper}>
      <LeftMenu />
      <MainPageItem />
    </div>
  )
}
export default MainPage
