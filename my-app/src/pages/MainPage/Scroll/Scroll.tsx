import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import ScrollItem from './ScrollItem/ScrollItem'
import styles from './Scroll.module.scss'
import Slider from 'react-slick'

interface ScrollAx {
  year: string
  grade: string
  name: string
  img: string
  id: string
}

const Scroll: FC = () => {
  const [data, setData] = useState<ScrollAx[]>([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    axios
      .get<ScrollAx[]>('http://localhost:3001/ScrollItem')
      .then((response) => {
        setData(response.data)
        setLoad(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoad(false)
      })
  }, [])

  if (load) {
    return <p>Loading...</p>
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  return (
    <div className={styles.wraper}>
      <div className={styles.title}>
        <h2>Special for you</h2>
      </div>
      <div className={styles.slider}>
        <Slider {...settings}>
          {data.map((item) => (
            <ScrollItem data={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Scroll
