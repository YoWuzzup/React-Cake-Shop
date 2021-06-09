import React from 'react'
import styles from './ProductsPreviewSection.module.css'

import { Vitamin } from '../../'

export default function ProductsPreviewSection({ bg, logo, vitaminImg, strawberry }) {
    

    const bgColor = '#fcacbc'

    return (
    <div style={{width: '100%'}}>
        <div className={`${styles.previewSection}`} style={{backgroundImage: `url(${bg})`}}>
            <div className={`${styles.previewSection_wrapper} wrapper`} >
                
                <img alt='logo' src={`${logo}`} className={`${styles.previewSection_logo}`}/>
                
            </div>
        </div>

        <div className={`${styles.previewSection_vitamins}`} >

            <Vitamin img={vitaminImg} name={strawberry.name} text={strawberry.text} vitamins={strawberry.vitamins} bgColor={bgColor}/>

        </div>
    </div>
    )
}
