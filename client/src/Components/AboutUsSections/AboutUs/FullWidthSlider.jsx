import React from 'react'
import Slider from "react-slick"

import styles from './FullWidthSlider.module.css'

export default function FullWidthSlider({ imgs }) {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className={`${styles.fullWidthSlider}`}>
            <Slider {...settings}>
                {imgs.map((item, index)=>(
                <div className={`${styles.fullWidthSlider_singleSlide}`} key={`${item}_${index}`}>
                    <img className={`${styles.fullWidthSlider_singleImage} scaleAnimated`} alt={`slide`} src={item} />
                </div>
                ))}
            </Slider>
        </div>
    )
}
