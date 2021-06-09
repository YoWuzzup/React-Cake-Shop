import React from 'react'
import styles from './ProductsNewOffer.module.css'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ProductsNewOffer({ imgs }) {

    const settings = {
        dots: true,
        dotsClass: `${styles.newOfferDots}`,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
    <div className={`${styles.ProductsNewOffer}`}>

        <div className={`${styles.ProductsNewOffer_info}`}>
            <div className={`${styles.ProductsNewOffer_infoInner}`}>
                <div className={`${styles.ProductsNewOffer_header}`}>NEW OFFER</div>
                <div className={`${styles.ProductsNewOffer_slogan} satisfy`}>
                    Premium Belgian chocolate
                </div>
                <div className={`${styles.ProductsNewOffer_para}`}>
                    Belgium is famous around the world for its high quality chocolate. 
                    The chocolate bonbon, or praline, was invented in Brussels in 1912 by jean Neuhaus, 
                    and has become the hallmark of belgian confctionery. 
                    Nonetheless chocolate bars are also enormously popular.
                </div>
            </div>
        </div>

        <div className={`${styles.ProductsNewOffer_carousel}`} >
            <Slider {...settings} style={{height: '633px'}}>

                {imgs.map((i, index)=>(
                    <img className={`${styles.singleSlide}`}
                        key={`${i}_${index}`}
                        alt={`slide ${index}`}
                        src={i}
                        style={{height: '633px'}}
                    />
                ))}
            </Slider>
        </div>

    </div>
    )
}
