import React from 'react'
import styles from './MonthlyMenu.module.css'
import { TriangleInfo } from '../../'

export default function MonthlyMenu({ bgImg, img }) {
    const text = 'Our monthly menu'
    return (
    <div className={`${styles.MonthlyMenu}`} 
        style={{backgroundImage: `url(${bgImg})`, height: '100vh', 
        backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
    >
        <TriangleInfo img={img} text={text} />
        
        <button className={`${styles.MonthlyMenu_button} rglrBtn`}>DOWNLOAD</button>
    </div>
    )
}
