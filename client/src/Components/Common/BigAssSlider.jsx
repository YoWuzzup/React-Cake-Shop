import React from 'react'
import Slider from "react-slick"
import styles from './commonStyles.module.css'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { bgFirstSlide, cakes2, cakes3, cakes4, cakes5, cakes6, cakes7, cakes8,
        bgSecondSlide, lollipop } from '../../Imgs/TheGoldOne/'

const FirstSlide = ()=>{
  return (
    <div className={`${styles.slider_imageContainer}`} >

        <div className={`${styles.slider_content}`} style={{backgroundImage: `url(${bgFirstSlide})`}}>

          <div className={`${styles.slider_firstColumn} ${styles.columns}`}>
            <img className={`${styles.slider_subImg} ${styles.allCookies}`} alt={`${cakes2}`} src={`${cakes2}`} />
            <div className={`${styles.slider_subInfo}`} >Fortune Cookies!</div>
            <img className={`${styles.slider_subImg} ${styles.allCookies}`} alt={`${cakes3}`} src={`${cakes3}`} />
          </div>

          <div className={`${styles.slider_secondColumn} ${styles.columns}`}>
            <img className={`${styles.slider_subImg} ${styles.allCookies}`} alt={`${cakes4}`} src={`${cakes4}`} />
            <img className={`${styles.slider_subImg} ${styles.allCookies}`} alt={`${cakes5}`} src={`${cakes5}`} />
            <img className={`${styles.slider_subImg} ${styles.allCookies}`} alt={`${cakes6}`} src={`${cakes6}`} />
          </div>
          
          <div className={`${styles.slider_thirdColumn} ${styles.columns}`}>
            <img className={`${styles.slider_subImg} ${styles.allCookies}`} alt={`${cakes7}`} src={`${cakes7}`} />
            <img className={`${styles.slider_subImg} ${styles.allCookies}`} alt={`${cakes8}`} src={`${cakes8}`} />
          </div>
        </div>
        
      </div>
  )
}

const SecondSlide = ()=>{
  return (
    <div className={`${styles.slider_imageContainer}`} >

        <div className={`${styles.slider_content}`} style={{backgroundImage: `url(${bgSecondSlide})`}}>

          <div className={`${styles.slider_firstColumn} ${styles.columns}`} >
            <div className={`${styles.slider_subInfo}`} >Color</div>
          </div>

          <div className={`${styles.slider_secondColumn} ${styles.columns}`} style={{ alignSelf: 'flex-end'}}>
            <img alt={`${lollipop}`} src={`${lollipop}`} style={{width: '580px', height: 'auto'}} />
          </div>
          
          <div className={`${styles.slider_thirdColumn} ${styles.columns}`} style={{ alignSelf: 'center'}}>
            <div className={`${styles.slider_subInfo}`} >Love</div>
         </div>
        </div>
        
      </div>
  )
}
export default function BigAssSlider() {

    const settings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return (
    <>
    <Slider className={`${styles.slider}`} {...settings} >
      <FirstSlide />
      <SecondSlide />

    </Slider>
    </>
    )
}