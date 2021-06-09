import React from 'react'
import styles from './HomeFooter.module.css' 

export default function HomeFooter({ gif }) {
    return (
        <div className={`${styles.HomeFooter}`} style={{backgroundImage: `url(${gif})`}} />
    )
}
