import React from 'react'
import styles from './MonthlyMenu.module.css'

export default function MonthlyMenu({ bgImg, img }) {
    return (
    <div className={`${styles.MonthlyMenu}`} 
        style={{backgroundImage: `url(${bgImg})`, height: '100vh', 
        backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
    >
        <div className={`${styles.MonthlyMenu_content}`}>
            <img className={`${styles.MonthlyMenu_img}`} alt='MonthlyMenu' 
                src={`${img}`}
            />    
            <div className={`${styles.MonthlyMenu_words} satisfy`}>Our monthly menu</div>
        </div>
        
        <button className={`${styles.MonthlyMenu_button} rglrBtn`}>DOWNLOAD</button>
    </div>
    )
}
