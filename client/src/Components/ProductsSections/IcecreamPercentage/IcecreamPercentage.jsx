import React from 'react'
import styles from './IcecreamPercentage.module.css'
import { OrderNowButton } from '../../'

export default function IcecreamPercentage({ bgImgs, reversed, icecreamInfo, header }) {
    const width = window.innerWidth 

    return (
    <div className={`${styles.icecream}`} 
        style={{backgroundImage: width >= 1100 ? `url(${bgImgs})`: 'none',
        backgroundColor: width < 1100 ? `#f0ecd4` : 'none', 
        justifyContent: reversed ? 'flex-end' : 'flex-start'}}
    >

        <div className={`${styles.icecream_info}`} style={{textAlign: reversed ? 'left' : 'right'}}>
            <div className={`${styles.icecream_slogan} satisfy`} >
                {header.header}
            </div>

            <div className={`${styles.icecream_para}`} >
                {header.para}
            </div>

            <div className={`${styles.icecream_percentage}`} >
                {icecreamInfo.map((item, index)=>(
                    <div className={`${styles.icecream_percentageSingle}`} key={`${item}_${index}`}>
                        <div className={`${styles.icecream_numbers} satisfy`}>{item.level}</div>
                        <div className={`${styles.icecream_name}`}>{item.name}</div>
                    </div>
                ))}
            </div>

            <OrderNowButton reversed={reversed} />
        </div>
        
    </div>
    )
}
