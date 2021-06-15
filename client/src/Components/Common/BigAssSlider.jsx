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
            <div className={`${styles.slider_subInfo} satisfy`} >Fortune Cookies!</div>
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
            <div className={`${styles.slider_subInfo} satisfy`} style={{ alignSelf: 'flex-end' }}>Color</div>
          </div>

          <div className={`${styles.slider_secondColumn} ${styles.columns}`} style={{ alignSelf: 'flex-end'}}>
            <img alt={`${lollipop}`} src={`${lollipop}`} style={{width: '580px', height: 'auto'}} />
          </div>
          
          <div className={`${styles.slider_thirdColumn} ${styles.columns}`} style={{ alignSelf: 'center'}}>
            <div className={`${styles.slider_subInfo} satisfy`} >Love</div>
         </div>
        </div>
        
      </div>
  )
}

const ThirdSlide = ()=>{
  return (
    <div className={`${styles.slider_imageContainer}`} >

        <div className={`${styles.slider_content}`} style={{backgroundImage: `url(${bgSecondSlide})`}}>

          <div className={`${styles.slider_macaroons} satisfy`} >Macaroons Land!</div>
          
        </div>
        
      </div>
  )
}

const MyNextArrow = (props)=>{
  const { className, style, onClick } = props
  return (
    <div 
      className={className} 
      style={{ ...style, 
        position: 'absolute', right: '10px', width: '30px', 
        height: '30px', borderTop: '4px solid #fff', borderLeft: '4px solid #fff',
        transform: 'rotate(135deg)', marginRight: '10px'
        }}
      onClick={onClick}
    />
  )
}

const MyPrevArrow = (props)=>{
  const { className, style, onClick } = props
  return (
    <div 
      className={className} 
      style={{ ...style, 
        position: 'absolute', left: '10px', width: '30px',
        height: '30px', borderBottom: '4px solid #fff', borderLeft: '4px solid #fff',
        transform: 'rotate(45deg)', marginLeft: '10px', zIndex: '1'
        }}
      onClick={onClick}
    />
  )
}

export default function BigAssSlider() {

    const settings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <MyNextArrow />,
        prevArrow: <MyPrevArrow />
    }

    return (
    <>
    <Slider className={`${styles.slider} bigAssSlider`} {...settings} >
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
    </Slider>
    </>
    )
}