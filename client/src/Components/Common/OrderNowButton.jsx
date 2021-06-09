import React from 'react'
import styles from './OrderNowButton.module.css'

export default function OrderNowButton({ reversed }) {
    return (
        <button className={`${styles.nutritional_button} rglrBtn`}
            style={{alignSelf: reversed ? 'flex-start' : 'flex-end'}}
        >
            order now
        </button>
    )
}
