import React from 'react'
import styles from './TriangleAndPic.module.css'
import { TriangleInfo } from '../'

export default function TriangleAndPic({ sideImg, img, text, color, reversed, btn }) {
    return (
        <div className={`${styles.container}`} style={{flexDirection: reversed ? 'row-reverse' : 'row' }} >
            {!Array.isArray(sideImg) ? 
                <img alt={text} src={sideImg} className={`${styles.container_img}`} />
            :
            <div className={`${styles.container_arrayImgs}`}>
                {sideImg.map((item,index)=>(
                    <img 
                    className={`${styles.container_imgInArray}`}
                    alt={text} src={item} key={`${item}_${index}`} 
                    />
                ))}
            </div>
            }
            <TriangleInfo img={img} text={text} color={color} reversed={reversed} btn={btn} /> 
        </div>
    )
}
