import React from 'react'
import styles from './HomeFeatures.module.css'

import Feature from './Feature'

export default function HomeFeatures({ featuresInfo, bgImg }) {
    return (
    <div className={`${styles.HomeFeatures}`}>
        
        <div className={`${styles.HomeFeatures_block}`}  style={{backgroundImage: `url(${bgImg})`}}>
            <div className={`${styles.HomeFeatures_header}`}>FEATURES</div>
            <div className={`${styles.HomeFeatures_slogan} satisfy`}>If you must, you can adjust!</div>
        </div>

        <div className={`${styles.HomeFeatures_features}`} >
            {featuresInfo.map((item, index)=>(
                <Feature key={`${index}_${item}`} 
                    item={item}
                />
            ))}
        </div>

    </div>
    )
}
