import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Feature.module.css'

export default function Feature({item}) {
    return (
    <div className={`${styles.Feature}`} 
        data-aos-anchor-placement="bottom-center"
        data-aos='fade'
        data-aos-delay={`${item.aosDelay}`}    
    >
        
        <FontAwesomeIcon className={`${styles.Feature_img}`} icon={item.img} size='3x'/>

        <div className={`${styles.Feature_about}`}>
            <div className={`${styles.Feature_name}`}>{item.name}</div>
            <div className={`${styles.Feature_description}`}>{item.description}</div>
        </div>

    </div>
    )
}
