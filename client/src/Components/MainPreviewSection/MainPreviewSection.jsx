import React from 'react'
import styles from './MainPreviewSection.module.css'
import img from '../../Imgs/HomePage/hero_home_landing.jpg'
import crazy from '../../Imgs/gifs/crazy.gif';

export default function MainPreviewSection({handleRef}) {

    return (
        <div className={`${styles.MainPreviewSection}`} 
            style={{ backgroundImage: `url(${img})` }} 
        >

            <div className={`wrapper ${styles.MainPreviewSection_wrapper}`} >
                
                <div className={`${styles.MPS_header}`}>SWEETS, SMOOTHIES & ICE CREAM WORDPRESS THEME</div>
                <img className={`${styles.MPS_img}`} alt='Ohlala crazy' src={crazy}></img>
                <div className={`${styles.MPS_para}`}>This is the one where we let ourselves go wild!</div>
                <button className={`${styles.MPS_button}`} onClick={()=>handleRef()}>CHECK IT OUT!</button>

            </div>

        </div>
    )
}
