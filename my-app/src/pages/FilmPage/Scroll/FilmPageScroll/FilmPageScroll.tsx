import axios from 'axios'
import React, { FC, useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import FilmPageScrollItem from './FilmPageScrollItem/FilmPageScrollItem'

interface FilmPageScrollAx {
    id: string
    img: string
}

const FilmPageScroll: FC = () => {
    const settings = {
        arrows: false,
        adaptiveHeight: true,
        adaptiveWidth: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }
    const [data, setData] = useState<FilmPageScrollAx[]>([])
    useEffect(() => {
        axios.get<FilmPageScrollAx[]>('http://localhost:3001/FilmPageScrollItem').then((response) => setData(response.data))
    }, [])
    return (
        <div>
            <Slider {...settings}>
                {data.map((item) => {
                    return <FilmPageScrollItem data={item} key={item.id} />
                })}
            </Slider>
        </div>
    )
}
export default FilmPageScroll
