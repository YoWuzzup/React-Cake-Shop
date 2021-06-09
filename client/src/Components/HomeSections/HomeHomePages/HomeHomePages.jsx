import React from 'react'
import styles from './HomeHomePages.module.css'

import { HomePreviewProduct } from '../../'

export default function HomeHomePages({nextSectionRef, previewProducts}) {

    return (
    <div ref={nextSectionRef} className={`${styles.HomePages}`}>
        
        <div 
            data-aos='fade'
            data-aos-anchor-placement="bottom-bottom"
            className={`${styles.HomePages_wrapper}`}
        >
        
            <div className={`${styles.HomePages_header}`}>HOMEPAGES</div>
            <div className={`${styles.HomePages_slogan} satisfy`}>You Can Have Them All!</div>
            <div className={`${styles.HomePages_para}`}>With One Click Demo Installation!</div>

        </div>

        <div className={`${styles.HomePages_content}`}>

            {previewProducts.map((item, index)=>(
                <HomePreviewProduct key={`${item}_${index}`} 
                    itemImage={item.img} 
                    itemName={item.name}
                    aosAnimation={item.aosAnimation}
                    aosDelay={item.aosDelay}
                />)
            )}

        </div>

    </div>
    )
}
