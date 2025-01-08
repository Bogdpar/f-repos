import React, { FC, useCallback, useState } from 'react'
import { ArrowLeft, Bookmark } from 'lucide-react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom'


const Header: FC = () => {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()

  const handleSaveClick = useCallback(() => {
    setIsActive((prev) => !prev)
  }, [])

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
          Go back
        </button>
        <h1>Interstellar</h1>
      </div>
      <div className={isActive === false ? styles.headerRight : styles.headerRightActive}>
        <button onClick={handleSaveClick}>
          <Bookmark size={20} />
          Save
        </button>
      </div>
    </div>
  )
}
export default Header
