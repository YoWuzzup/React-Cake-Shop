import React from 'react'
import { HomePreviewPage } from '../../'

import styles from './HomeInnerPages.module.css'
import commerceImg from '../../../Imgs/HomePage/HomeInnerPages/woo_logo_shop_landing.png'
import pagesImg from '../../../Imgs/HomePage/HomeInnerPages/sample_shop_preview.png'

export default function HomeInnerPages({ innerPages }) {


    return (
    <div className={`${styles.HomeInnerPages_wrapper}`}>
        
        <div className={`${styles.HomeInnerPages_headerBlock}`}>
            <div className={`${styles.HomeInnerPages_name}`}>INNER PAGES</div>
            <div className={`${styles.HomeInnerPages_slogan} satisfy`}>More fun inside!</div>
        </div>

        <div className={`HomeInnerPages_content`}>
            {innerPages.map((item, index)=>(
                    <HomePreviewPage key={`${item}_${index}`} 
                        itemImage={item.img} 
                        itemName={item.name}
                        aosAnimation={item.aosAnimation}
                        aosDelay={item.aosDelay}
                    />)
            )}
        </div>
        
        <div className={`${styles.HomeInnerPages_commerce}`} >
            <div className={`${styles.HomeInnerPages_text} satisfy`} 
                data-aos-anchor-placement="center-center"
                data-aos='fade'
            >
                The one with
            </div>
            <img className={`${styles.HomeInnerPages_commerceImg}`} alt='WOOcommerce' src={commerceImg} 
                data-aos-anchor-placement="center-bottom"
                data-aos='fade'
            />
            <img className={`${styles.HomeInnerPages_pagesImg}`} alt='pages' src={pagesImg} 
                data-aos-anchor-placement="top-center"
                data-aos='fade-up'
            />
        </div>

    </div>
    )
}
