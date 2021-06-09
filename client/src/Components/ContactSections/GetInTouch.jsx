import React from 'react'
import styles from './GetInTouch.module.css'

export default function GetInTouch({ bg }) {
    return (
    <div className={`${styles.getInTouch}`} style={{ backgroundImage: `url(${bg})`}}>
        <div className={`${styles.getInTouch_wrapper} wrapper`}>

            <h3 className={`${styles.getInTouch_header} satisfy`}>Get in touch</h3>

            <form className={`${styles.getInTouch_form}`}>
                <label htmlFor='name' />
                <input className={`${styles.getInTouch_input}`} type='text' id='name' name='name' placeholder='Name' />
                <label htmlFor='Email' />
                <input className={`${styles.getInTouch_input}`} type='email' id='Email' name='Email' placeholder='Email' />
                <label htmlFor='address-line_1' />
                <input className={`${styles.getInTouch_input}`} type='text' id='address-line_1' name='address-line_1' placeholder='Address*' required />
                <label htmlFor='address-line_2' />
                <input className={`${styles.getInTouch_input}`} type='text' id='address-line_2' name='address-line_2' placeholder='Address' />

                <label htmlFor='city' />
                <input className={`${styles.getInTouch_input}`} type='text' id='city' name='city' placeholder='City*' required />
                <label htmlFor='state' />
                <input className={`${styles.getInTouch_input}`} type='text' id='state' name='state' placeholder='State*' required />
                <label htmlFor='zip' />
                <input className={`${styles.getInTouch_input}`} type='number' id='zip' name='zip' placeholder='Zip*' required />
                <label htmlFor='phone' />
                <input className={`${styles.getInTouch_input}`} type='tel' id='phone' name='phone' placeholder='Phone number*' required />

                <label htmlFor='message' />
                <textarea className={`${styles.getInTouch_input} ${styles.getInTouch_message}`} type='text' id='message' name='message' placeholder='Message' />

                <button className={`${styles.getInTouch_button} rglrBtn`} type='submit' >Send</button>
            </form>
        </div>
    </div>
    )
}
