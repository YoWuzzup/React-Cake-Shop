import React from 'react'
import styles from './sides.module.css'

export default function FeaturedProducts() {
    const dummy = [1,2,3]
    return (
    <div className={`${styles.feature}`}>
        <div className={`${styles.feature_header} satisfy`}>Featured products</div>

        <div className={`${styles.feature_allItems}`} >
            {dummy.map((item,index)=>(
                <div className={`${styles.feature_item}`} key={`${item}_${index}`}>
                    <div className={`${styles.feature_itemInner}`}>
                        <div className={`${styles.feature_name}`}>STRAWBERRY MAPLE</div>
                        <div className={`${styles.feature_rating}`}>123</div>
                        <div className={`${styles.feature_price}`}>$222</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}