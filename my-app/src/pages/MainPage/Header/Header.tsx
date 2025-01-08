import React, { FC, useEffect } from 'react'
import styles from './Header.module.scss'
import { useState } from 'react'
import axios from 'axios'
interface HeaderProps {
  callback: React.Dispatch<React.SetStateAction<number>>
}
interface ButtAx {
  body: string
  id: string
}
const Header: FC<HeaderProps> = ({ callback }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [but, setBut] = useState<ButtAx[]>([])
  callback(activeIndex)

  useEffect(() => {
    axios.get<ButtAx[]>('http://localhost:3001/buttons').then((response) => setBut(response.data))
  }, [])

  const handleButtonClick = (index: number) => {
    setActiveIndex(index)
  }
  return (
    <div className={styles.wraper}>
      <h1>My cinema</h1>

      {but.map((item, index) => (
        <button
          key={item.id}
          onClick={() => {
            handleButtonClick(index)
          }}
          className={activeIndex === index ? styles.active_btn : styles.btn}
          dangerouslySetInnerHTML={{ __html: item.body }}
        ></button>
      ))}
    </div>
  )
}
export default Header
