import styles from './MainPageItem.module.scss'
import React, { FC, useEffect, useState } from 'react'
import FilmList from '../FilmList/FilmList'
import Header from '../Header/Header'
import Scroll from '../Scroll/Scroll'
import View from '../View/View'
import axios from 'axios'
import { IAxiosQuery } from '../../../types/types'

const MainPageItem: FC = () => {
  const [data, setData] = useState<IAxiosQuery[]>([])
  const [call, setCall] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IAxiosQuery[]>(`http://localhost:3001/${call}`)
        setData(response.data)
      } catch (e) {
        console.error(e)
      }
    }
    if (call !== 0) {
      fetchData()
    }
  }, [call])

  return (
    <div className={styles.wraper}>
      <div>
        <div className={styles.subWraper}>
          <Header callback={setCall} />
        </div>
        {call === 0 ? (
          <div className={styles.subWraper}>
            <View />
            <Scroll />
          </div>
        ) : (
          <FilmList data={data} />
        )}
      </div>
    </div>
  )
}
export default MainPageItem
