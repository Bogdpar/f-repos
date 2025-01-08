import { House, Search, LogOut } from 'lucide-react'
import styles from './LeftMenu.module.scss'
import React from 'react'
import { ROUTES } from '../../resources/routes-constants'
import { Link, useLocation } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useAppDispatch } from '../../hooks/storeHooks'
import { log } from '../../store/slice/AuthSlice'

const LeftMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  return (
    <div className={styles.wraper}>
      <div className={styles.subWrap}>
        <button className={location.pathname === '/' ? styles.active : styles.btn}
        >
          <Link to={ROUTES.MAINPAGE_ROUTE}> <House size={35} /></Link>
        </button>
        <button className={location.pathname === '/search' ? styles.active : styles.btn} >
          <Link to={ROUTES.SEARCHPAGE_ROUTE}> <Search size={35} /></Link>
        </button>
        <button className={location.pathname === '/favorite' ? styles.active : styles.btn} >
          <Link to={ROUTES.FAVORITE_ROUTE}> <Star size={35} /></Link>
        </button>
      </div>
      <div className={styles.subWrap}>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(log(false))
          }}
        >
          <Link to={ROUTES.AUTHPAGE_ROUTE}> <LogOut size={35} /></Link>
        </button>
      </div>
    </div>
  )
}

export default LeftMenu
