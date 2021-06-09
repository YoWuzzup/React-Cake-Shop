import React from 'react'
import styles from './HomePreviewProduct.module.css'

export default function HomePreviewProduct({ itemImage, itemName, aosAnimation, aosDelay }) {
    const gridClass = itemName.split(' ').join('')

    return (
    <div className={`${styles.HomePreviewProduct} ${gridClass}`}
        data-aos={`${aosAnimation}`}
        data-aos-anchor-placement="center-bottom"
        data-aos-delay={`${aosDelay}`}
    >

        <div className={`${styles.HomePreviewProduct_wrapper} wrapper`} 
            style={{backgroundImage:`url(${(itemImage)})`}}>

            <div className={`${styles.HomePreviewProduct_upperLayer} satisfy`}>
                <span className={`${styles.HomePreviewProduct_name} satisfy`}>
                    {itemName}
                </span> 
            </div>
        
        </div>

    </div>
    )
}
