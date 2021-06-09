import React from 'react'
import styles from './Vitamin.module.css'

export default function Vitamin({ img, name, text, vitamins, bgColor, reversed}) {
    return (
    <div className={`${styles.vitamin}`} style={{backgroundColor: bgColor, flexDirection: reversed ? 'row-reverse': 'row'}}>
        
        <div className={`${styles.vitamin_stats}`} >
            <div className={`${styles.vitamin_singleItemStat}`} >
                <div className={`${styles.vitamin_percentage}`}>{vitamins.A.percentage}</div>
                <div className={`${styles.vitamin_singleVi}`}>vitamin {vitamins.A.name}</div>
            </div>
            <div className={`${styles.vitamin_singleItemStat}`} >
                <div className={`${styles.vitamin_percentage}`}>{vitamins.C.percentage}</div>
                <div className={`${styles.vitamin_singleVi}`}>vitamin {vitamins.C.name}</div>
            </div>
            <div className={`${styles.vitamin_singleItemStat}`} >
                <div className={`${styles.vitamin_percentage}`}>{vitamins.C.percentage}</div>
                <div className={`${styles.vitamin_singleVi}`}>vitamin {vitamins.C.name}</div>
            </div>
            <div className={`${styles.vitamin_singleItemStat}`} >
                <div className={`${styles.vitamin_percentage}`}>{vitamins.A.percentage}</div>
                <div className={`${styles.vitamin_singleVi}`}>vitamin {vitamins.A.name}</div>
            </div>
        </div>

        <img alt='logo' src={`${img}`} className={`${styles.vitamin_img}`}/>

        <div className={`${styles.vitamin_about}`} >
        
            <div className={`${styles.vitamin_name} satisfy`} >
                {name}
            </div>
            
            <div className={`${styles.vitamin_para}`} >
                {text}
            </div>
            
            <button className={`${styles.vitamin_btn} rglrBtn`} >ORDER NOW</button>
        
        </div>

    </div>
    )
}
