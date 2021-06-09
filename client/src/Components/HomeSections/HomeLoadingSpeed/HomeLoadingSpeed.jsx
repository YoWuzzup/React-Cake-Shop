import React from 'react'

import styles from './HomeLoadingSpeed.module.css'

import bg from '../../../Imgs/HomePage/inner_liquid.jpg'
import raspberry from '../../../Imgs/HomePage/raspberry-1.png'
import fastLoad from '../../../Imgs/gifs/fast_load.gif'

export default function HomeLoadingSpeed() {
    return (
        <div className={`${styles.HomeLoadingSpeed}`} 
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className={`${styles.HomeLoadingSpeed_wrapper}`} >

                <img alt='raspberry' src={raspberry} 
                    className={`${styles.HomeLoadingSpeed_raspberry}`} 
                    data-aos='fade-down'
                    data-aos-anchor-placement="bottom-center"
                />
                <img alt='fast load' src={fastLoad} 
                    className={`${styles.HomeLoadingSpeed_gif}`} />

                <div className={`${styles.HomeLoadingSpeed_content}`}>
                    <div className={`${styles.HomeLoadingSpeed_header}`}>LOADING SPEED</div>
                    <div className={`${styles.HomeLoadingSpeed_slogan} satisfy`}>Crazy Fast</div>
                    <div className={`${styles.HomeLoadingSpeed_para}`}>
                        Our theme makes your site faster and more mobile-friendly. 
                        Combined with other industry standard tools you will be able to optimize your 
                        site following web best practices and excel on speed tests.
                    </div>
                </div>

            </div>
        </div>
    )
}
