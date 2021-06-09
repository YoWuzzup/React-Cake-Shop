import React from 'react'
import styles from './Footer.module.css'
import { footerImg } from '../../Imgs/'

export default function Footer({ bgColor }) {
    const footerInfo = [
        {name: 'oh lala sweet street', fisrtLine: '360 Juice street', secondLine: 'Sydney, Australia'},
        {name: 'hours', fisrtLine: 'Mon-Fri: 8:00AM - 6:00PM', secondLine: 'Sat-Sun: 9:00AM - 8:00PM'},
        {name: 'MSG US', fisrtLine: 'ohlala@bold-themes.com', secondLine: 'shop@bold-themes.com'},
        {name: 'CALL US', fisrtLine: 'Phone: (208)440-7895', secondLine: 'Phone: (208)440-7823'}
    ]

    return (
    <div className={`${styles.footer}`} style={{backgroundColor: bgColor}}>
        
        <div className={`${styles.footer_info}`}>
            {footerInfo.map((item,index)=>(
                <div className={`${styles.footer_infoSingle}`} key={`${item}_${index}`}>
                    <div className={`${styles.footer_name}`}>{item.name}</div>
                    <div className={`${styles.footer_firstLine}`}>{item.fisrtLine}</div>
                    <div className={`${styles.footer_secondLine}`}>{item.secondLine}</div>
                </div>
            ))}
        </div>

        <div className={`${styles.footer_imgDiv}`}>
            <img src={footerImg} alt='footerImg' className={`${styles.footer_img}`} />
        </div>

    </div>
    )
}
