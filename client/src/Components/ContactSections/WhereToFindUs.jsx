import React from 'react'
import styles from './WhereToFindUs.module.css'

export default function WhereToFindUs({ img }) {
    return (
    <div className={`${styles.whereToFindUs}`}>
        <div className={`${styles.whereToFindUs_wrapper} wrapper`}>

            <div className={`${styles.whereToFindUs_location}`} >
                <div className={`${styles.whereToFindUs_header} satisfy`} >Locations</div>
                <div className={`${styles.whereToFindUs_text}`} >Stop by and have a treat</div>
                <button className={`${styles.whereToFindUs_btn} rglrBtn`} >Discover</button>
            </div>

            <img className={`${styles.whereToFindUs_lollipop}`}  src={`${img}`} alt='lollipop'></img>

            <div className={`${styles.whereToFindUs_call}`} >
                <div className={`${styles.whereToFindUs_header} satisfy`} >Call us!</div>
                <div className={`${styles.whereToFindUs_text}`} >
                    Our delivery service works from 10 AM to 6PM*
                </div>
                <button className={`${styles.whereToFindUs_btn} ${styles.whereToFindUs_btnCall} rglrBtn`} >1234-4456-5675</button>
                <div className={`${styles.whereToFindUs_ps}`} >
                    *There is a minimum of $15.00 for delivery and a $5.00 delivery fee.
                </div>
            </div>

        </div>
    </div>
    )
}
