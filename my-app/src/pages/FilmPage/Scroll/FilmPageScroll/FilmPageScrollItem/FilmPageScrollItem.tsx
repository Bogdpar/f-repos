import React, { FC } from 'react'
import styles from './FilmPageScrollItem.module.scss'
interface FilmPageScrollItemProps {
    data: { id: string; img: string }
}
const FilmPageScrollItem: FC<FilmPageScrollItemProps> = ({ data }) => {
    return (
        <div className={styles.wraper}>
            <img src={data.img} alt="none" />
        </div>
    )
}
export default FilmPageScrollItem
