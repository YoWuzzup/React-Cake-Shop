import React from 'react'
import styles from './Header.module.css'

export default function Header({ name, img, text, colors }) {
    return (
    <div className={`${styles.header}`} style={{ backgroundImage: `url(${img})`}} >
        <div className={`${styles.header_wrapper} wrapper`}>

            <div className={`${styles.header_name} satisfy`} style={{ color: colors ? colors.nameColor : '#fff'}}>{name}</div>
            <div className={`${styles.header_text}`} style={{ color: colors ? colors.textColor : '#fff'}}>{text}</div>

        </div>
    </div>
    )
}
