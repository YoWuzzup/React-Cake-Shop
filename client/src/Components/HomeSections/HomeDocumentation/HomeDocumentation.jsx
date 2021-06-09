import React from 'react'
import styles from './HomeDocumentation.module.css' 

export default function HomeDocumentation({ bg }) {
    return (
        <div className={`${styles.HomeDocumentation}`}>
            
            <div className={`${styles.HomeDocumentation_leftBlock} ${styles.blocks}`}
                data-aos-anchor-placement="bottom-top"
                data-aos='fade'
            >
                <div className={`${styles.HomeDocumentation_read} satisfy`}>
                    Read our  <br/>
                    WP theme <br/>
                    Documentation
                </div>
                <button className={`${styles.HomeDocumentation_button} rglrBtn`} >VIEW MORE</button>
            </div>

            <div className={`${styles.HomeDocumentation_rightBlock} ${styles.blocks}`}
                style={{backgroundImage: `url(${bg})`}}
                data-aos-anchor-placement="bottom-top"
                data-aos='fade'
                data-aos-delay={200}
            >
                <div className={`${styles.HomeDocumentation_leaveEmail} satisfy`}>
                    Leave your email here
                </div>
                <div className={`${styles.HomeDocumentation_para}`}>
                    Subscribe to Bold Themes newsletter to get a notification
                    once a new WP theme is online. We promise not to spam!
                </div>
                <form className={`${styles.HomeDocumentation_form}`}>
                    <input className={`${styles.HomeDocumentation_input}`} placeholder='E-mail'/>
                    <button className={`${styles.HomeDocumentation_button} rglrBtn`} >GO</button>
                </form>
            </div>

        </div>
    )
}
